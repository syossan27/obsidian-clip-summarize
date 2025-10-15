import { Language } from './types';
import { t } from './i18n';

// Error code definitions
export enum ErrorCode {
  // Configuration errors (E001-E099)
  API_KEY_NOT_SET = 'E001',
  OPENAI_CLIENT_NOT_INITIALIZED = 'E002',

  // File operation errors (E101-E199)
  FILE_READ_ERROR = 'E101',
  FILE_WRITE_ERROR = 'E102',
  NO_ACTIVE_FILE = 'E103',
  FILE_ALREADY_SUMMARIZED = 'E104',

  // API communication errors (E201-E299)
  API_REQUEST_FAILED = 'E201',
  API_RESPONSE_EMPTY = 'E202',
  API_RATE_LIMIT = 'E203',
  API_INVALID_REQUEST = 'E204',
  API_AUTHENTICATION_ERROR = 'E205',
  API_TIMEOUT = 'E206',
  API_CONNECTION_ERROR = 'E207',
  API_NETWORK_ERROR = 'E208',

  // Content processing errors (E301-E399)
  CONTENT_EMPTY = 'E301',
  CONTENT_TOO_LONG = 'E302',
  SUMMARY_GENERATION_FAILED = 'E303',

  // Other errors (E900-E999)
  UNKNOWN_ERROR = 'E999'
}

// Get error message for a specific error code and language
export function getErrorMessage(code: ErrorCode, lang: Language): string {
  const messages = t(lang).errors;
  const errorMap: Record<ErrorCode, string> = {
    [ErrorCode.API_KEY_NOT_SET]: messages.apiKeyNotSet,
    [ErrorCode.OPENAI_CLIENT_NOT_INITIALIZED]: messages.openaiClientNotInitialized,
    [ErrorCode.FILE_READ_ERROR]: messages.fileReadError,
    [ErrorCode.FILE_WRITE_ERROR]: messages.fileWriteError,
    [ErrorCode.NO_ACTIVE_FILE]: messages.noActiveFile,
    [ErrorCode.FILE_ALREADY_SUMMARIZED]: messages.fileAlreadySummarized,
    [ErrorCode.API_REQUEST_FAILED]: messages.apiRequestFailed,
    [ErrorCode.API_RESPONSE_EMPTY]: messages.apiResponseEmpty,
    [ErrorCode.API_RATE_LIMIT]: messages.apiRateLimit,
    [ErrorCode.API_INVALID_REQUEST]: messages.apiInvalidRequest,
    [ErrorCode.API_AUTHENTICATION_ERROR]: messages.apiAuthenticationError,
    [ErrorCode.API_TIMEOUT]: messages.apiTimeout,
    [ErrorCode.API_CONNECTION_ERROR]: messages.apiConnectionError,
    [ErrorCode.API_NETWORK_ERROR]: messages.apiNetworkError,
    [ErrorCode.CONTENT_EMPTY]: messages.contentEmpty,
    [ErrorCode.CONTENT_TOO_LONG]: messages.contentTooLong,
    [ErrorCode.SUMMARY_GENERATION_FAILED]: messages.summaryGenerationFailed,
    [ErrorCode.UNKNOWN_ERROR]: messages.unknownError
  };
  return errorMap[code];
}

// Custom error class
export class SummarizeError extends Error {
  code: ErrorCode;
  originalError?: Error;
  details?: string;
  language: Language;

  constructor(code: ErrorCode, language: Language = 'en', originalError?: Error, details?: string) {
    const message = getErrorMessage(code, language);
    super(message);
    this.name = 'SummarizeError';
    this.code = code;
    this.language = language;
    this.originalError = originalError;
    this.details = details;
  }

  // Get message with error code
  getDisplayMessage(): string {
    let msg = `[${this.code}] ${this.message}`;
    if (this.details) {
      msg += ` (${this.details})`;
    }
    return msg;
  }

  // Get detailed information for debugging
  getDebugInfo(): string {
    const info = [
      `Error Code: ${this.code}`,
      `Message: ${this.message}`,
      this.details ? `Details: ${this.details}` : null,
      this.originalError ? `Original Error: ${this.originalError.message}` : null,
      this.originalError ? `Stack: ${this.originalError.stack}` : null
    ].filter(Boolean);
    return info.join('\n');
  }
}

// Map OpenAI error to error code and details
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
export function mapOpenAIError(
  error: any,
  lang: Language = 'en'
): { code: ErrorCode; details: string } {
  let code: ErrorCode;
  let details = '';

  const errorDetails = t(lang).errorDetails;
  const errorMessage = error?.message || error?.error?.message || '';
  const errorString = String(error).toLowerCase();

  // Check for connection error
  if (
    errorMessage.toLowerCase().includes('connection') ||
    errorString.includes('connection') ||
    error?.code === 'ECONNRESET' ||
    error?.code === 'ECONNREFUSED' ||
    error?.code === 'ENOTFOUND'
  ) {
    code = ErrorCode.API_CONNECTION_ERROR;
    if (error?.code === 'ENOTFOUND') {
      details = errorDetails.dnsError;
    } else if (error?.code === 'ECONNREFUSED') {
      details = errorDetails.connectionRefused;
    } else if (error?.code === 'ECONNRESET') {
      details = errorDetails.connectionReset;
    } else {
      details = errorMessage || errorDetails.failedToConnect;
    }
  } else if (error?.status === 401) {
    code = ErrorCode.API_AUTHENTICATION_ERROR;
    details = errorDetails.invalidApiKey;
  } else if (error?.status === 429) {
    code = ErrorCode.API_RATE_LIMIT;
    details = errorDetails.rateLimitWait;
  } else if (error?.status === 400) {
    code = ErrorCode.API_INVALID_REQUEST;
    details = errorMessage || errorDetails.checkRequestParams;
  } else if (error?.status === 500 || error?.status === 502 || error?.status === 503) {
    code = ErrorCode.API_REQUEST_FAILED;
    details = `${errorDetails.openaiServerError} (${error.status})`;
  } else if (error?.code === 'ETIMEDOUT' || error?.code === 'ECONNABORTED') {
    code = ErrorCode.API_TIMEOUT;
    details = errorDetails.requestTimedOut;
  } else if (errorString.includes('network') || errorString.includes('fetch')) {
    code = ErrorCode.API_NETWORK_ERROR;
    details = errorMessage || errorDetails.networkError;
  } else {
    code = ErrorCode.API_REQUEST_FAILED;
    // Get error details
    if (errorMessage) {
      details = errorMessage;
    } else {
      details = String(error);
    }
  }

  return { code, details };
}
/* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
