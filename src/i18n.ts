import { Language } from './types';

export interface Messages {
  // Settings UI
  settings: {
    apiKeyName: string;
    apiKeyDesc: string;
    modelName: string;
    modelDesc: string;
    autoSummarizeName: string;
    autoSummarizeDesc: string;
    watchFolderName: string;
    watchFolderDesc: string;
    summaryPositionName: string;
    summaryPositionDesc: string;
    summaryPositionTop: string;
    summaryPositionBottom: string;
    summaryPositionFrontmatter: string;
    summaryLengthName: string;
    summaryLengthDesc: string;
    summaryLengthShort: string;
    summaryLengthMedium: string;
    summaryLengthLong: string;
    languageName: string;
    languageDesc: string;
  };

  // Notices
  notices: {
    generatingSummary: string;
    summaryGenerated: string;
  };

  // Error messages
  errors: {
    apiKeyNotSet: string;
    openaiClientNotInitialized: string;
    fileReadError: string;
    fileWriteError: string;
    noActiveFile: string;
    fileAlreadySummarized: string;
    apiRequestFailed: string;
    apiResponseEmpty: string;
    apiRateLimit: string;
    apiInvalidRequest: string;
    apiAuthenticationError: string;
    apiTimeout: string;
    apiConnectionError: string;
    apiNetworkError: string;
    contentEmpty: string;
    contentTooLong: string;
    summaryGenerationFailed: string;
    unknownError: string;
  };

  // Error details
  errorDetails: {
    dnsError: string;
    connectionRefused: string;
    connectionReset: string;
    failedToConnect: string;
    invalidApiKey: string;
    rateLimitWait: string;
    checkRequestParams: string;
    openaiServerError: string;
    requestTimedOut: string;
    networkError: string;
  };

  // AI prompts
  prompts: {
    summaryLengthShort: string;
    summaryLengthMedium: string;
    summaryLengthLong: string;
    userPrompt: string;
    systemPrompt: string;
  };
}

export const translations: Record<Language, Messages> = {
  en: {
    settings: {
      apiKeyName: 'OpenAI API Key',
      apiKeyDesc: 'Enter your OpenAI API key',
      modelName: 'Model',
      modelDesc: 'Select the OpenAI model to use',
      autoSummarizeName: 'Auto Summarize',
      autoSummarizeDesc: 'Automatically summarize new files',
      watchFolderName: 'Watch Folder',
      watchFolderDesc: 'Only auto-summarize files in this folder (leave empty for all folders)',
      summaryPositionName: 'Summary Position',
      summaryPositionDesc: 'Where to insert the summary',
      summaryPositionTop: 'Top of file',
      summaryPositionBottom: 'Bottom of file',
      summaryPositionFrontmatter: 'Frontmatter',
      summaryLengthName: 'Summary Length',
      summaryLengthDesc: 'Length of the generated summary',
      summaryLengthShort: 'Short (3-5 lines)',
      summaryLengthMedium: 'Medium (5-8 lines)',
      summaryLengthLong: 'Long (2-3 paragraphs)',
      languageName: 'Language',
      languageDesc: 'Interface and summary language'
    },
    notices: {
      generatingSummary: 'Generating summary...',
      summaryGenerated: 'Summary generated successfully'
    },
    errors: {
      apiKeyNotSet: 'OpenAI API key is not set',
      openaiClientNotInitialized: 'OpenAI client is not initialized',
      fileReadError: 'Failed to read file',
      fileWriteError: 'Failed to write file',
      noActiveFile: 'No active file',
      fileAlreadySummarized: 'This file already has a summary',
      apiRequestFailed: 'API request failed',
      apiResponseEmpty: 'API response is empty',
      apiRateLimit: 'API rate limit reached',
      apiInvalidRequest: 'Invalid API request',
      apiAuthenticationError: 'API authentication failed',
      apiTimeout: 'API request timed out',
      apiConnectionError: 'Failed to connect to OpenAI API',
      apiNetworkError: 'Network error occurred',
      contentEmpty: 'File content is empty',
      contentTooLong: 'File content is too long',
      summaryGenerationFailed: 'Failed to generate summary',
      unknownError: 'An unknown error occurred'
    },
    errorDetails: {
      dnsError: 'DNS error - Please check your internet connection',
      connectionRefused: 'Connection refused - Please check your proxy settings',
      connectionReset: 'Connection reset - Network may be unstable',
      failedToConnect: 'Failed to connect to OpenAI API',
      invalidApiKey: 'Invalid API key',
      rateLimitWait: 'Please wait a moment and try again',
      checkRequestParams: 'Please check request parameters',
      openaiServerError: 'OpenAI server error',
      requestTimedOut: 'Request timed out',
      networkError: 'Network error occurred'
    },
    prompts: {
      summaryLengthShort: 'a concise summary in 3-5 lines',
      summaryLengthMedium: 'a summary in 1 paragraph (5-8 lines)',
      summaryLengthLong: 'a detailed summary in 2-3 paragraphs',
      userPrompt:
        'Please create {length} of the following article. Focus on the key points and make it easy to read.\n\n{content}',
      systemPrompt:
        'You are an excellent article summarization assistant. You extract key points from articles and summarize them clearly.'
    }
  },
  ja: {
    settings: {
      apiKeyName: 'OpenAI APIキー',
      apiKeyDesc: 'OpenAI APIキーを入力してください',
      modelName: 'モデル',
      modelDesc: '使用するOpenAIモデルを選択',
      autoSummarizeName: '自動要約',
      autoSummarizeDesc: '新しいファイルを自動的に要約する',
      watchFolderName: '監視フォルダ',
      watchFolderDesc: 'このフォルダ内のファイルのみ自動要約（空欄で全フォルダ）',
      summaryPositionName: '要約の位置',
      summaryPositionDesc: '要約を挿入する位置',
      summaryPositionTop: 'ファイルの先頭',
      summaryPositionBottom: 'ファイルの末尾',
      summaryPositionFrontmatter: 'フロントマター',
      summaryLengthName: '要約の長さ',
      summaryLengthDesc: '生成される要約の長さ',
      summaryLengthShort: '短い（3-5行）',
      summaryLengthMedium: '中程度（5-8行）',
      summaryLengthLong: '長い（2-3段落）',
      languageName: '言語',
      languageDesc: 'インターフェースと要約の言語'
    },
    notices: {
      generatingSummary: '要約を生成中...',
      summaryGenerated: '要約が正常に生成されました'
    },
    errors: {
      apiKeyNotSet: 'OpenAI APIキーが設定されていません',
      openaiClientNotInitialized: 'OpenAIクライアントが初期化されていません',
      fileReadError: 'ファイルの読み込みに失敗しました',
      fileWriteError: 'ファイルの書き込みに失敗しました',
      noActiveFile: 'アクティブなファイルがありません',
      fileAlreadySummarized: 'このファイルには既に要約が存在します',
      apiRequestFailed: 'API通信に失敗しました',
      apiResponseEmpty: 'APIからの応答が空です',
      apiRateLimit: 'APIの利用制限に達しました',
      apiInvalidRequest: 'APIリクエストが無効です',
      apiAuthenticationError: 'API認証に失敗しました',
      apiTimeout: 'APIリクエストがタイムアウトしました',
      apiConnectionError: 'OpenAI APIへの接続に失敗しました',
      apiNetworkError: 'ネットワークエラーが発生しました',
      contentEmpty: 'ファイルの内容が空です',
      contentTooLong: 'ファイルの内容が長すぎます',
      summaryGenerationFailed: '要約の生成に失敗しました',
      unknownError: '不明なエラーが発生しました'
    },
    errorDetails: {
      dnsError: 'DNSエラー - インターネット接続を確認してください',
      connectionRefused: '接続が拒否されました - プロキシ設定を確認してください',
      connectionReset: '接続がリセットされました - ネットワークが不安定な可能性があります',
      failedToConnect: 'OpenAI APIへの接続に失敗しました',
      invalidApiKey: 'APIキーが無効です',
      rateLimitWait: 'しばらく待ってから再試行してください',
      checkRequestParams: 'リクエストパラメータを確認してください',
      openaiServerError: 'OpenAIサーバーエラー',
      requestTimedOut: 'リクエストがタイムアウトしました',
      networkError: 'ネットワークエラーが発生しました'
    },
    prompts: {
      summaryLengthShort: '3〜5行の簡潔な要約',
      summaryLengthMedium: '1段落（5〜8行）の要約',
      summaryLengthLong: '2〜3段落の詳細な要約',
      userPrompt:
        '以下の記事の{length}を作成してください。要点を押さえ、読みやすくまとめてください。\n\n{content}',
      systemPrompt:
        'あなたは優秀な記事要約アシスタントです。記事から重要なポイントを抽出し、明確に要約します。'
    }
  },
  zh: {
    settings: {
      apiKeyName: 'OpenAI API密钥',
      apiKeyDesc: '输入您的OpenAI API密钥',
      modelName: '模型',
      modelDesc: '选择要使用的OpenAI模型',
      autoSummarizeName: '自动摘要',
      autoSummarizeDesc: '自动摘要新文件',
      watchFolderName: '监视文件夹',
      watchFolderDesc: '仅自动摘要此文件夹中的文件（留空表示所有文件夹）',
      summaryPositionName: '摘要位置',
      summaryPositionDesc: '插入摘要的位置',
      summaryPositionTop: '文件顶部',
      summaryPositionBottom: '文件底部',
      summaryPositionFrontmatter: '前言',
      summaryLengthName: '摘要长度',
      summaryLengthDesc: '生成的摘要长度',
      summaryLengthShort: '短（3-5行）',
      summaryLengthMedium: '中（5-8行）',
      summaryLengthLong: '长（2-3段）',
      languageName: '语言',
      languageDesc: '界面和摘要语言'
    },
    notices: {
      generatingSummary: '正在生成摘要...',
      summaryGenerated: '摘要生成成功'
    },
    errors: {
      apiKeyNotSet: '未设置OpenAI API密钥',
      openaiClientNotInitialized: 'OpenAI客户端未初始化',
      fileReadError: '读取文件失败',
      fileWriteError: '写入文件失败',
      noActiveFile: '没有活动文件',
      fileAlreadySummarized: '此文件已有摘要',
      apiRequestFailed: 'API请求失败',
      apiResponseEmpty: 'API响应为空',
      apiRateLimit: '已达到API速率限制',
      apiInvalidRequest: '无效的API请求',
      apiAuthenticationError: 'API身份验证失败',
      apiTimeout: 'API请求超时',
      apiConnectionError: '连接OpenAI API失败',
      apiNetworkError: '发生网络错误',
      contentEmpty: '文件内容为空',
      contentTooLong: '文件内容过长',
      summaryGenerationFailed: '生成摘要失败',
      unknownError: '发生未知错误'
    },
    errorDetails: {
      dnsError: 'DNS错误 - 请检查您的互联网连接',
      connectionRefused: '连接被拒绝 - 请检查您的代理设置',
      connectionReset: '连接已重置 - 网络可能不稳定',
      failedToConnect: '连接OpenAI API失败',
      invalidApiKey: '无效的API密钥',
      rateLimitWait: '请稍等片刻后重试',
      checkRequestParams: '请检查请求参数',
      openaiServerError: 'OpenAI服务器错误',
      requestTimedOut: '请求超时',
      networkError: '发生网络错误'
    },
    prompts: {
      summaryLengthShort: '3-5行的简明摘要',
      summaryLengthMedium: '1段（5-8行）的摘要',
      summaryLengthLong: '2-3段的详细摘要',
      userPrompt: '请创建以下文章的{length}。专注于关键点并使其易于阅读。\n\n{content}',
      systemPrompt: '您是一位出色的文章摘要助手。您从文章中提取关键点并清晰地总结它们。'
    }
  },
  es: {
    settings: {
      apiKeyName: 'Clave API de OpenAI',
      apiKeyDesc: 'Ingrese su clave API de OpenAI',
      modelName: 'Modelo',
      modelDesc: 'Seleccione el modelo de OpenAI a utilizar',
      autoSummarizeName: 'Resumen automático',
      autoSummarizeDesc: 'Resumir automáticamente archivos nuevos',
      watchFolderName: 'Carpeta de vigilancia',
      watchFolderDesc:
        'Solo resumir automáticamente archivos en esta carpeta (dejar vacío para todas)',
      summaryPositionName: 'Posición del resumen',
      summaryPositionDesc: 'Dónde insertar el resumen',
      summaryPositionTop: 'Inicio del archivo',
      summaryPositionBottom: 'Final del archivo',
      summaryPositionFrontmatter: 'Frontmatter',
      summaryLengthName: 'Longitud del resumen',
      summaryLengthDesc: 'Longitud del resumen generado',
      summaryLengthShort: 'Corto (3-5 líneas)',
      summaryLengthMedium: 'Medio (5-8 líneas)',
      summaryLengthLong: 'Largo (2-3 párrafos)',
      languageName: 'Idioma',
      languageDesc: 'Idioma de la interfaz y el resumen'
    },
    notices: {
      generatingSummary: 'Generando resumen...',
      summaryGenerated: 'Resumen generado exitosamente'
    },
    errors: {
      apiKeyNotSet: 'La clave API de OpenAI no está configurada',
      openaiClientNotInitialized: 'El cliente de OpenAI no está inicializado',
      fileReadError: 'Error al leer el archivo',
      fileWriteError: 'Error al escribir el archivo',
      noActiveFile: 'No hay archivo activo',
      fileAlreadySummarized: 'Este archivo ya tiene un resumen',
      apiRequestFailed: 'La solicitud API falló',
      apiResponseEmpty: 'La respuesta de la API está vacía',
      apiRateLimit: 'Límite de tasa de API alcanzado',
      apiInvalidRequest: 'Solicitud API inválida',
      apiAuthenticationError: 'Error de autenticación de la API',
      apiTimeout: 'Tiempo de espera de la solicitud API agotado',
      apiConnectionError: 'Error al conectar con la API de OpenAI',
      apiNetworkError: 'Error de red',
      contentEmpty: 'El contenido del archivo está vacío',
      contentTooLong: 'El contenido del archivo es demasiado largo',
      summaryGenerationFailed: 'Error al generar el resumen',
      unknownError: 'Ocurrió un error desconocido'
    },
    errorDetails: {
      dnsError: 'Error de DNS - Verifique su conexión a Internet',
      connectionRefused: 'Conexión rechazada - Verifique su configuración de proxy',
      connectionReset: 'Conexión restablecida - La red puede ser inestable',
      failedToConnect: 'Error al conectar con la API de OpenAI',
      invalidApiKey: 'Clave API inválida',
      rateLimitWait: 'Espere un momento e intente nuevamente',
      checkRequestParams: 'Verifique los parámetros de la solicitud',
      openaiServerError: 'Error del servidor de OpenAI',
      requestTimedOut: 'Tiempo de espera de la solicitud agotado',
      networkError: 'Error de red'
    },
    prompts: {
      summaryLengthShort: 'un resumen conciso en 3-5 líneas',
      summaryLengthMedium: 'un resumen en 1 párrafo (5-8 líneas)',
      summaryLengthLong: 'un resumen detallado en 2-3 párrafos',
      userPrompt:
        'Por favor cree {length} del siguiente artículo. Concéntrese en los puntos clave y facilite la lectura.\n\n{content}',
      systemPrompt:
        'Eres un excelente asistente de resumen de artículos. Extraes puntos clave de los artículos y los resumes claramente.'
    }
  },
  fr: {
    settings: {
      apiKeyName: 'Clé API OpenAI',
      apiKeyDesc: 'Entrez votre clé API OpenAI',
      modelName: 'Modèle',
      modelDesc: 'Sélectionnez le modèle OpenAI à utiliser',
      autoSummarizeName: 'Résumé automatique',
      autoSummarizeDesc: 'Résumer automatiquement les nouveaux fichiers',
      watchFolderName: 'Dossier surveillé',
      watchFolderDesc:
        'Ne résumer automatiquement que les fichiers dans ce dossier (laisser vide pour tous)',
      summaryPositionName: 'Position du résumé',
      summaryPositionDesc: 'Où insérer le résumé',
      summaryPositionTop: 'Haut du fichier',
      summaryPositionBottom: 'Bas du fichier',
      summaryPositionFrontmatter: 'En-tête',
      summaryLengthName: 'Longueur du résumé',
      summaryLengthDesc: 'Longueur du résumé généré',
      summaryLengthShort: 'Court (3-5 lignes)',
      summaryLengthMedium: 'Moyen (5-8 lignes)',
      summaryLengthLong: 'Long (2-3 paragraphes)',
      languageName: 'Langue',
      languageDesc: "Langue de l'interface et du résumé"
    },
    notices: {
      generatingSummary: 'Génération du résumé...',
      summaryGenerated: 'Résumé généré avec succès'
    },
    errors: {
      apiKeyNotSet: "La clé API OpenAI n'est pas définie",
      openaiClientNotInitialized: "Le client OpenAI n'est pas initialisé",
      fileReadError: 'Échec de la lecture du fichier',
      fileWriteError: "Échec de l'écriture du fichier",
      noActiveFile: 'Aucun fichier actif',
      fileAlreadySummarized: 'Ce fichier a déjà un résumé',
      apiRequestFailed: 'La requête API a échoué',
      apiResponseEmpty: "La réponse de l'API est vide",
      apiRateLimit: "Limite de taux de l'API atteinte",
      apiInvalidRequest: 'Requête API invalide',
      apiAuthenticationError: "Échec de l'authentification de l'API",
      apiTimeout: "Délai d'attente de la requête API dépassé",
      apiConnectionError: "Échec de la connexion à l'API OpenAI",
      apiNetworkError: 'Erreur réseau',
      contentEmpty: 'Le contenu du fichier est vide',
      contentTooLong: 'Le contenu du fichier est trop long',
      summaryGenerationFailed: 'Échec de la génération du résumé',
      unknownError: "Une erreur inconnue s'est produite"
    },
    errorDetails: {
      dnsError: 'Erreur DNS - Vérifiez votre connexion Internet',
      connectionRefused: 'Connexion refusée - Vérifiez vos paramètres de proxy',
      connectionReset: 'Connexion réinitialisée - Le réseau peut être instable',
      failedToConnect: "Échec de la connexion à l'API OpenAI",
      invalidApiKey: 'Clé API invalide',
      rateLimitWait: 'Veuillez patienter un moment et réessayer',
      checkRequestParams: 'Vérifiez les paramètres de la requête',
      openaiServerError: 'Erreur du serveur OpenAI',
      requestTimedOut: "Délai d'attente de la requête dépassé",
      networkError: 'Erreur réseau'
    },
    prompts: {
      summaryLengthShort: 'un résumé concis en 3-5 lignes',
      summaryLengthMedium: 'un résumé en 1 paragraphe (5-8 lignes)',
      summaryLengthLong: 'un résumé détaillé en 2-3 paragraphes',
      userPrompt:
        "Veuillez créer {length} de l'article suivant. Concentrez-vous sur les points clés et rendez-le facile à lire.\n\n{content}",
      systemPrompt:
        "Vous êtes un excellent assistant de résumé d'articles. Vous extrayez les points clés des articles et les résumez clairement."
    }
  },
  de: {
    settings: {
      apiKeyName: 'OpenAI API-Schlüssel',
      apiKeyDesc: 'Geben Sie Ihren OpenAI API-Schlüssel ein',
      modelName: 'Modell',
      modelDesc: 'Wählen Sie das zu verwendende OpenAI-Modell',
      autoSummarizeName: 'Automatische Zusammenfassung',
      autoSummarizeDesc: 'Neue Dateien automatisch zusammenfassen',
      watchFolderName: 'Überwachter Ordner',
      watchFolderDesc:
        'Nur Dateien in diesem Ordner automatisch zusammenfassen (leer lassen für alle)',
      summaryPositionName: 'Position der Zusammenfassung',
      summaryPositionDesc: 'Wo die Zusammenfassung eingefügt werden soll',
      summaryPositionTop: 'Anfang der Datei',
      summaryPositionBottom: 'Ende der Datei',
      summaryPositionFrontmatter: 'Frontmatter',
      summaryLengthName: 'Länge der Zusammenfassung',
      summaryLengthDesc: 'Länge der generierten Zusammenfassung',
      summaryLengthShort: 'Kurz (3-5 Zeilen)',
      summaryLengthMedium: 'Mittel (5-8 Zeilen)',
      summaryLengthLong: 'Lang (2-3 Absätze)',
      languageName: 'Sprache',
      languageDesc: 'Sprache der Benutzeroberfläche und Zusammenfassung'
    },
    notices: {
      generatingSummary: 'Zusammenfassung wird erstellt...',
      summaryGenerated: 'Zusammenfassung erfolgreich erstellt'
    },
    errors: {
      apiKeyNotSet: 'OpenAI API-Schlüssel ist nicht gesetzt',
      openaiClientNotInitialized: 'OpenAI-Client ist nicht initialisiert',
      fileReadError: 'Fehler beim Lesen der Datei',
      fileWriteError: 'Fehler beim Schreiben der Datei',
      noActiveFile: 'Keine aktive Datei',
      fileAlreadySummarized: 'Diese Datei hat bereits eine Zusammenfassung',
      apiRequestFailed: 'API-Anfrage fehlgeschlagen',
      apiResponseEmpty: 'API-Antwort ist leer',
      apiRateLimit: 'API-Ratenlimit erreicht',
      apiInvalidRequest: 'Ungültige API-Anfrage',
      apiAuthenticationError: 'API-Authentifizierung fehlgeschlagen',
      apiTimeout: 'API-Anfrage hat Zeitlimit überschritten',
      apiConnectionError: 'Verbindung zur OpenAI-API fehlgeschlagen',
      apiNetworkError: 'Netzwerkfehler aufgetreten',
      contentEmpty: 'Dateiinhalt ist leer',
      contentTooLong: 'Dateiinhalt ist zu lang',
      summaryGenerationFailed: 'Erstellung der Zusammenfassung fehlgeschlagen',
      unknownError: 'Ein unbekannter Fehler ist aufgetreten'
    },
    errorDetails: {
      dnsError: 'DNS-Fehler - Überprüfen Sie Ihre Internetverbindung',
      connectionRefused: 'Verbindung abgelehnt - Überprüfen Sie Ihre Proxy-Einstellungen',
      connectionReset: 'Verbindung zurückgesetzt - Netzwerk kann instabil sein',
      failedToConnect: 'Verbindung zur OpenAI-API fehlgeschlagen',
      invalidApiKey: 'Ungültiger API-Schlüssel',
      rateLimitWait: 'Bitte warten Sie einen Moment und versuchen Sie es erneut',
      checkRequestParams: 'Überprüfen Sie die Anfrageparameter',
      openaiServerError: 'OpenAI-Serverfehler',
      requestTimedOut: 'Anfrage hat Zeitlimit überschritten',
      networkError: 'Netzwerkfehler aufgetreten'
    },
    prompts: {
      summaryLengthShort: 'eine prägnante Zusammenfassung in 3-5 Zeilen',
      summaryLengthMedium: 'eine Zusammenfassung in 1 Absatz (5-8 Zeilen)',
      summaryLengthLong: 'eine detaillierte Zusammenfassung in 2-3 Absätzen',
      userPrompt:
        'Bitte erstellen Sie {length} des folgenden Artikels. Konzentrieren Sie sich auf die Kernpunkte und machen Sie es leicht lesbar.\n\n{content}',
      systemPrompt:
        'Sie sind ein ausgezeichneter Assistent für Artikelzusammenfassungen. Sie extrahieren Kernpunkte aus Artikeln und fassen sie klar zusammen.'
    }
  },
  ko: {
    settings: {
      apiKeyName: 'OpenAI API 키',
      apiKeyDesc: 'OpenAI API 키를 입력하세요',
      modelName: '모델',
      modelDesc: '사용할 OpenAI 모델 선택',
      autoSummarizeName: '자동 요약',
      autoSummarizeDesc: '새 파일을 자동으로 요약',
      watchFolderName: '감시 폴더',
      watchFolderDesc: '이 폴더의 파일만 자동 요약 (모든 폴더는 비워두기)',
      summaryPositionName: '요약 위치',
      summaryPositionDesc: '요약을 삽입할 위치',
      summaryPositionTop: '파일 상단',
      summaryPositionBottom: '파일 하단',
      summaryPositionFrontmatter: '프론트매터',
      summaryLengthName: '요약 길이',
      summaryLengthDesc: '생성될 요약의 길이',
      summaryLengthShort: '짧게 (3-5줄)',
      summaryLengthMedium: '중간 (5-8줄)',
      summaryLengthLong: '길게 (2-3단락)',
      languageName: '언어',
      languageDesc: '인터페이스 및 요약 언어'
    },
    notices: {
      generatingSummary: '요약 생성 중...',
      summaryGenerated: '요약이 성공적으로 생성되었습니다'
    },
    errors: {
      apiKeyNotSet: 'OpenAI API 키가 설정되지 않았습니다',
      openaiClientNotInitialized: 'OpenAI 클라이언트가 초기화되지 않았습니다',
      fileReadError: '파일 읽기 실패',
      fileWriteError: '파일 쓰기 실패',
      noActiveFile: '활성 파일 없음',
      fileAlreadySummarized: '이 파일에는 이미 요약이 있습니다',
      apiRequestFailed: 'API 요청 실패',
      apiResponseEmpty: 'API 응답이 비어 있습니다',
      apiRateLimit: 'API 속도 제한에 도달했습니다',
      apiInvalidRequest: '잘못된 API 요청',
      apiAuthenticationError: 'API 인증 실패',
      apiTimeout: 'API 요청 시간 초과',
      apiConnectionError: 'OpenAI API 연결 실패',
      apiNetworkError: '네트워크 오류 발생',
      contentEmpty: '파일 내용이 비어 있습니다',
      contentTooLong: '파일 내용이 너무 깁니다',
      summaryGenerationFailed: '요약 생성 실패',
      unknownError: '알 수 없는 오류가 발생했습니다'
    },
    errorDetails: {
      dnsError: 'DNS 오류 - 인터넷 연결을 확인하세요',
      connectionRefused: '연결 거부됨 - 프록시 설정을 확인하세요',
      connectionReset: '연결 재설정됨 - 네트워크가 불안정할 수 있습니다',
      failedToConnect: 'OpenAI API 연결 실패',
      invalidApiKey: '잘못된 API 키',
      rateLimitWait: '잠시 기다린 후 다시 시도하세요',
      checkRequestParams: '요청 매개변수를 확인하세요',
      openaiServerError: 'OpenAI 서버 오류',
      requestTimedOut: '요청 시간 초과',
      networkError: '네트워크 오류 발생'
    },
    prompts: {
      summaryLengthShort: '3-5줄의 간결한 요약',
      summaryLengthMedium: '1단락(5-8줄)의 요약',
      summaryLengthLong: '2-3단락의 상세한 요약',
      userPrompt:
        '다음 기사의 {length}을(를) 작성하세요. 핵심 포인트에 집중하고 읽기 쉽게 만드세요.\n\n{content}',
      systemPrompt:
        '당신은 훌륭한 기사 요약 도우미입니다. 기사에서 핵심 포인트를 추출하고 명확하게 요약합니다.'
    }
  },
  pt: {
    settings: {
      apiKeyName: 'Chave API OpenAI',
      apiKeyDesc: 'Digite sua chave API OpenAI',
      modelName: 'Modelo',
      modelDesc: 'Selecione o modelo OpenAI a ser usado',
      autoSummarizeName: 'Resumo automático',
      autoSummarizeDesc: 'Resumir automaticamente novos arquivos',
      watchFolderName: 'Pasta monitorada',
      watchFolderDesc:
        'Resumir automaticamente apenas arquivos nesta pasta (deixe vazio para todas)',
      summaryPositionName: 'Posição do resumo',
      summaryPositionDesc: 'Onde inserir o resumo',
      summaryPositionTop: 'Início do arquivo',
      summaryPositionBottom: 'Final do arquivo',
      summaryPositionFrontmatter: 'Frontmatter',
      summaryLengthName: 'Comprimento do resumo',
      summaryLengthDesc: 'Comprimento do resumo gerado',
      summaryLengthShort: 'Curto (3-5 linhas)',
      summaryLengthMedium: 'Médio (5-8 linhas)',
      summaryLengthLong: 'Longo (2-3 parágrafos)',
      languageName: 'Idioma',
      languageDesc: 'Idioma da interface e do resumo'
    },
    notices: {
      generatingSummary: 'Gerando resumo...',
      summaryGenerated: 'Resumo gerado com sucesso'
    },
    errors: {
      apiKeyNotSet: 'Chave API OpenAI não está definida',
      openaiClientNotInitialized: 'Cliente OpenAI não está inicializado',
      fileReadError: 'Falha ao ler o arquivo',
      fileWriteError: 'Falha ao escrever o arquivo',
      noActiveFile: 'Nenhum arquivo ativo',
      fileAlreadySummarized: 'Este arquivo já tem um resumo',
      apiRequestFailed: 'Solicitação API falhou',
      apiResponseEmpty: 'Resposta da API está vazia',
      apiRateLimit: 'Limite de taxa da API atingido',
      apiInvalidRequest: 'Solicitação API inválida',
      apiAuthenticationError: 'Falha na autenticação da API',
      apiTimeout: 'Tempo limite da solicitação API esgotado',
      apiConnectionError: 'Falha ao conectar à API OpenAI',
      apiNetworkError: 'Erro de rede ocorreu',
      contentEmpty: 'Conteúdo do arquivo está vazio',
      contentTooLong: 'Conteúdo do arquivo é muito longo',
      summaryGenerationFailed: 'Falha ao gerar resumo',
      unknownError: 'Ocorreu um erro desconhecido'
    },
    errorDetails: {
      dnsError: 'Erro de DNS - Verifique sua conexão com a Internet',
      connectionRefused: 'Conexão recusada - Verifique suas configurações de proxy',
      connectionReset: 'Conexão redefinida - A rede pode estar instável',
      failedToConnect: 'Falha ao conectar à API OpenAI',
      invalidApiKey: 'Chave API inválida',
      rateLimitWait: 'Aguarde um momento e tente novamente',
      checkRequestParams: 'Verifique os parâmetros da solicitação',
      openaiServerError: 'Erro do servidor OpenAI',
      requestTimedOut: 'Tempo limite da solicitação esgotado',
      networkError: 'Erro de rede ocorreu'
    },
    prompts: {
      summaryLengthShort: 'um resumo conciso em 3-5 linhas',
      summaryLengthMedium: 'um resumo em 1 parágrafo (5-8 linhas)',
      summaryLengthLong: 'um resumo detalhado em 2-3 parágrafos',
      userPrompt:
        'Por favor, crie {length} do seguinte artigo. Concentre-se nos pontos-chave e torne-o fácil de ler.\n\n{content}',
      systemPrompt:
        'Você é um excelente assistente de resumo de artigos. Você extrai pontos-chave de artigos e os resume claramente.'
    }
  },
  ru: {
    settings: {
      apiKeyName: 'API-ключ OpenAI',
      apiKeyDesc: 'Введите ваш API-ключ OpenAI',
      modelName: 'Модель',
      modelDesc: 'Выберите модель OpenAI для использования',
      autoSummarizeName: 'Автоматическое резюме',
      autoSummarizeDesc: 'Автоматически резюмировать новые файлы',
      watchFolderName: 'Отслеживаемая папка',
      watchFolderDesc:
        'Автоматически резюмировать только файлы в этой папке (оставьте пустым для всех)',
      summaryPositionName: 'Позиция резюме',
      summaryPositionDesc: 'Где вставить резюме',
      summaryPositionTop: 'Начало файла',
      summaryPositionBottom: 'Конец файла',
      summaryPositionFrontmatter: 'Frontmatter',
      summaryLengthName: 'Длина резюме',
      summaryLengthDesc: 'Длина сгенерированного резюме',
      summaryLengthShort: 'Короткое (3-5 строк)',
      summaryLengthMedium: 'Среднее (5-8 строк)',
      summaryLengthLong: 'Длинное (2-3 абзаца)',
      languageName: 'Язык',
      languageDesc: 'Язык интерфейса и резюме'
    },
    notices: {
      generatingSummary: 'Генерация резюме...',
      summaryGenerated: 'Резюме успешно создано'
    },
    errors: {
      apiKeyNotSet: 'API-ключ OpenAI не установлен',
      openaiClientNotInitialized: 'Клиент OpenAI не инициализирован',
      fileReadError: 'Ошибка чтения файла',
      fileWriteError: 'Ошибка записи файла',
      noActiveFile: 'Нет активного файла',
      fileAlreadySummarized: 'У этого файла уже есть резюме',
      apiRequestFailed: 'Запрос API не выполнен',
      apiResponseEmpty: 'Ответ API пуст',
      apiRateLimit: 'Достигнут лимит API',
      apiInvalidRequest: 'Недопустимый запрос API',
      apiAuthenticationError: 'Ошибка аутентификации API',
      apiTimeout: 'Время ожидания запроса API истекло',
      apiConnectionError: 'Ошибка подключения к API OpenAI',
      apiNetworkError: 'Произошла сетевая ошибка',
      contentEmpty: 'Содержимое файла пусто',
      contentTooLong: 'Содержимое файла слишком длинное',
      summaryGenerationFailed: 'Ошибка создания резюме',
      unknownError: 'Произошла неизвестная ошибка'
    },
    errorDetails: {
      dnsError: 'Ошибка DNS - Проверьте подключение к Интернету',
      connectionRefused: 'Соединение отклонено - Проверьте настройки прокси',
      connectionReset: 'Соединение сброшено - Сеть может быть нестабильной',
      failedToConnect: 'Ошибка подключения к API OpenAI',
      invalidApiKey: 'Недопустимый API-ключ',
      rateLimitWait: 'Подождите немного и повторите попытку',
      checkRequestParams: 'Проверьте параметры запроса',
      openaiServerError: 'Ошибка сервера OpenAI',
      requestTimedOut: 'Время ожидания запроса истекло',
      networkError: 'Произошла сетевая ошибка'
    },
    prompts: {
      summaryLengthShort: 'краткое резюме на 3-5 строк',
      summaryLengthMedium: 'резюме в 1 абзац (5-8 строк)',
      summaryLengthLong: 'подробное резюме на 2-3 абзаца',
      userPrompt:
        'Пожалуйста, создайте {length} следующей статьи. Сосредоточьтесь на ключевых моментах и сделайте его легким для чтения.\n\n{content}',
      systemPrompt:
        'Вы отличный помощник для резюмирования статей. Вы извлекаете ключевые моменты из статей и четко резюмируете их.'
    }
  },
  it: {
    settings: {
      apiKeyName: 'Chiave API OpenAI',
      apiKeyDesc: 'Inserisci la tua chiave API OpenAI',
      modelName: 'Modello',
      modelDesc: 'Seleziona il modello OpenAI da utilizzare',
      autoSummarizeName: 'Riepilogo automatico',
      autoSummarizeDesc: 'Riassumi automaticamente i nuovi file',
      watchFolderName: 'Cartella monitorata',
      watchFolderDesc:
        'Riassumi automaticamente solo i file in questa cartella (lascia vuoto per tutte)',
      summaryPositionName: 'Posizione del riepilogo',
      summaryPositionDesc: 'Dove inserire il riepilogo',
      summaryPositionTop: 'Inizio del file',
      summaryPositionBottom: 'Fine del file',
      summaryPositionFrontmatter: 'Frontmatter',
      summaryLengthName: 'Lunghezza del riepilogo',
      summaryLengthDesc: 'Lunghezza del riepilogo generato',
      summaryLengthShort: 'Breve (3-5 righe)',
      summaryLengthMedium: 'Medio (5-8 righe)',
      summaryLengthLong: 'Lungo (2-3 paragrafi)',
      languageName: 'Lingua',
      languageDesc: "Lingua dell'interfaccia e del riepilogo"
    },
    notices: {
      generatingSummary: 'Generazione riepilogo...',
      summaryGenerated: 'Riepilogo generato con successo'
    },
    errors: {
      apiKeyNotSet: 'Chiave API OpenAI non impostata',
      openaiClientNotInitialized: 'Client OpenAI non inizializzato',
      fileReadError: 'Errore nella lettura del file',
      fileWriteError: 'Errore nella scrittura del file',
      noActiveFile: 'Nessun file attivo',
      fileAlreadySummarized: 'Questo file ha già un riepilogo',
      apiRequestFailed: 'Richiesta API fallita',
      apiResponseEmpty: 'Risposta API vuota',
      apiRateLimit: 'Limite di velocità API raggiunto',
      apiInvalidRequest: 'Richiesta API non valida',
      apiAuthenticationError: 'Autenticazione API fallita',
      apiTimeout: 'Timeout della richiesta API',
      apiConnectionError: "Errore di connessione all'API OpenAI",
      apiNetworkError: 'Errore di rete',
      contentEmpty: 'Contenuto del file vuoto',
      contentTooLong: 'Contenuto del file troppo lungo',
      summaryGenerationFailed: 'Errore nella generazione del riepilogo',
      unknownError: 'Si è verificato un errore sconosciuto'
    },
    errorDetails: {
      dnsError: 'Errore DNS - Controlla la tua connessione Internet',
      connectionRefused: 'Connessione rifiutata - Controlla le impostazioni del proxy',
      connectionReset: 'Connessione ripristinata - La rete potrebbe essere instabile',
      failedToConnect: "Errore di connessione all'API OpenAI",
      invalidApiKey: 'Chiave API non valida',
      rateLimitWait: 'Attendi un momento e riprova',
      checkRequestParams: 'Controlla i parametri della richiesta',
      openaiServerError: 'Errore del server OpenAI',
      requestTimedOut: 'Timeout della richiesta',
      networkError: 'Errore di rete'
    },
    prompts: {
      summaryLengthShort: 'un riepilogo conciso in 3-5 righe',
      summaryLengthMedium: 'un riepilogo in 1 paragrafo (5-8 righe)',
      summaryLengthLong: 'un riepilogo dettagliato in 2-3 paragrafi',
      userPrompt:
        'Crea {length} del seguente articolo. Concentrati sui punti chiave e rendilo facile da leggere.\n\n{content}',
      systemPrompt:
        'Sei un eccellente assistente per il riepilogo di articoli. Estrai i punti chiave dagli articoli e li riassumi chiaramente.'
    }
  },
  ar: {
    settings: {
      apiKeyName: 'مفتاح OpenAI API',
      apiKeyDesc: 'أدخل مفتاح OpenAI API الخاص بك',
      modelName: 'النموذج',
      modelDesc: 'اختر نموذج OpenAI المراد استخدامه',
      autoSummarizeName: 'ملخص تلقائي',
      autoSummarizeDesc: 'تلخيص الملفات الجديدة تلقائيًا',
      watchFolderName: 'المجلد المراقب',
      watchFolderDesc: 'تلخيص الملفات في هذا المجلد فقط تلقائيًا (اتركه فارغًا للجميع)',
      summaryPositionName: 'موضع الملخص',
      summaryPositionDesc: 'أين يتم إدراج الملخص',
      summaryPositionTop: 'أعلى الملف',
      summaryPositionBottom: 'أسفل الملف',
      summaryPositionFrontmatter: 'Frontmatter',
      summaryLengthName: 'طول الملخص',
      summaryLengthDesc: 'طول الملخص المُنشأ',
      summaryLengthShort: 'قصير (3-5 أسطر)',
      summaryLengthMedium: 'متوسط (5-8 أسطر)',
      summaryLengthLong: 'طويل (2-3 فقرات)',
      languageName: 'اللغة',
      languageDesc: 'لغة الواجهة والملخص'
    },
    notices: {
      generatingSummary: 'جارٍ إنشاء الملخص...',
      summaryGenerated: 'تم إنشاء الملخص بنجاح'
    },
    errors: {
      apiKeyNotSet: 'لم يتم تعيين مفتاح OpenAI API',
      openaiClientNotInitialized: 'لم يتم تهيئة عميل OpenAI',
      fileReadError: 'فشل في قراءة الملف',
      fileWriteError: 'فشل في كتابة الملف',
      noActiveFile: 'لا يوجد ملف نشط',
      fileAlreadySummarized: 'يحتوي هذا الملف بالفعل على ملخص',
      apiRequestFailed: 'فشل طلب API',
      apiResponseEmpty: 'استجابة API فارغة',
      apiRateLimit: 'تم الوصول إلى حد معدل API',
      apiInvalidRequest: 'طلب API غير صالح',
      apiAuthenticationError: 'فشل مصادقة API',
      apiTimeout: 'انتهت مهلة طلب API',
      apiConnectionError: 'فشل الاتصال بـ OpenAI API',
      apiNetworkError: 'حدث خطأ في الشبكة',
      contentEmpty: 'محتوى الملف فارغ',
      contentTooLong: 'محتوى الملف طويل جدًا',
      summaryGenerationFailed: 'فشل إنشاء الملخص',
      unknownError: 'حدث خطأ غير معروف'
    },
    errorDetails: {
      dnsError: 'خطأ DNS - تحقق من اتصالك بالإنترنت',
      connectionRefused: 'تم رفض الاتصال - تحقق من إعدادات الوكيل',
      connectionReset: 'تمت إعادة تعيين الاتصال - قد تكون الشبكة غير مستقرة',
      failedToConnect: 'فشل الاتصال بـ OpenAI API',
      invalidApiKey: 'مفتاح API غير صالح',
      rateLimitWait: 'يرجى الانتظار لحظة والمحاولة مرة أخرى',
      checkRequestParams: 'تحقق من معاملات الطلب',
      openaiServerError: 'خطأ في خادم OpenAI',
      requestTimedOut: 'انتهت مهلة الطلب',
      networkError: 'حدث خطأ في الشبكة'
    },
    prompts: {
      summaryLengthShort: 'ملخص موجز في 3-5 أسطر',
      summaryLengthMedium: 'ملخص في فقرة واحدة (5-8 أسطر)',
      summaryLengthLong: 'ملخص مفصل في 2-3 فقرات',
      userPrompt:
        'يرجى إنشاء {length} للمقالة التالية. ركز على النقاط الرئيسية واجعلها سهلة القراءة.\n\n{content}',
      systemPrompt:
        'أنت مساعد ممتاز لتلخيص المقالات. تستخرج النقاط الرئيسية من المقالات وتلخصها بوضوح.'
    }
  },
  hi: {
    settings: {
      apiKeyName: 'OpenAI API कुंजी',
      apiKeyDesc: 'अपनी OpenAI API कुंजी दर्ज करें',
      modelName: 'मॉडल',
      modelDesc: 'उपयोग करने के लिए OpenAI मॉडल चुनें',
      autoSummarizeName: 'स्वचालित सारांश',
      autoSummarizeDesc: 'नई फाइलों को स्वचालित रूप से सारांशित करें',
      watchFolderName: 'निगरानी फ़ोल्डर',
      watchFolderDesc:
        'केवल इस फ़ोल्डर में फाइलों को स्वचालित रूप से सारांशित करें (सभी के लिए खाली छोड़ें)',
      summaryPositionName: 'सारांश स्थिति',
      summaryPositionDesc: 'सारांश कहाँ डालें',
      summaryPositionTop: 'फाइल के शीर्ष पर',
      summaryPositionBottom: 'फाइल के निचले भाग में',
      summaryPositionFrontmatter: 'फ्रंटमैटर',
      summaryLengthName: 'सारांश लंबाई',
      summaryLengthDesc: 'उत्पन्न सारांश की लंबाई',
      summaryLengthShort: 'छोटा (3-5 पंक्तियाँ)',
      summaryLengthMedium: 'मध्यम (5-8 पंक्तियाँ)',
      summaryLengthLong: 'लंबा (2-3 पैराग्राफ)',
      languageName: 'भाषा',
      languageDesc: 'इंटरफ़ेस और सारांश भाषा'
    },
    notices: {
      generatingSummary: 'सारांश उत्पन्न हो रहा है...',
      summaryGenerated: 'सारांश सफलतापूर्वक उत्पन्न हुआ'
    },
    errors: {
      apiKeyNotSet: 'OpenAI API कुंजी सेट नहीं है',
      openaiClientNotInitialized: 'OpenAI क्लाइंट प्रारंभ नहीं किया गया है',
      fileReadError: 'फाइल पढ़ने में विफल',
      fileWriteError: 'फाइल लिखने में विफल',
      noActiveFile: 'कोई सक्रिय फाइल नहीं',
      fileAlreadySummarized: 'इस फाइल में पहले से ही एक सारांश है',
      apiRequestFailed: 'API अनुरोध विफल',
      apiResponseEmpty: 'API प्रतिक्रिया खाली है',
      apiRateLimit: 'API दर सीमा पहुँच गई',
      apiInvalidRequest: 'अमान्य API अनुरोध',
      apiAuthenticationError: 'API प्रमाणीकरण विफल',
      apiTimeout: 'API अनुरोध समय समाप्त',
      apiConnectionError: 'OpenAI API से कनेक्ट करने में विफल',
      apiNetworkError: 'नेटवर्क त्रुटि हुई',
      contentEmpty: 'फाइल सामग्री खाली है',
      contentTooLong: 'फाइल सामग्री बहुत लंबी है',
      summaryGenerationFailed: 'सारांश उत्पन्न करने में विफल',
      unknownError: 'एक अज्ञात त्रुटि हुई'
    },
    errorDetails: {
      dnsError: 'DNS त्रुटि - अपना इंटरनेट कनेक्शन जांचें',
      connectionRefused: 'कनेक्शन अस्वीकार - अपनी प्रॉक्सी सेटिंग्स जांचें',
      connectionReset: 'कनेक्शन रीसेट - नेटवर्क अस्थिर हो सकता है',
      failedToConnect: 'OpenAI API से कनेक्ट करने में विफल',
      invalidApiKey: 'अमान्य API कुंजी',
      rateLimitWait: 'कृपया थोड़ी देर प्रतीक्षा करें और पुनः प्रयास करें',
      checkRequestParams: 'अनुरोध पैरामीटर जांचें',
      openaiServerError: 'OpenAI सर्वर त्रुटि',
      requestTimedOut: 'अनुरोध समय समाप्त',
      networkError: 'नेटवर्क त्रुटि हुई'
    },
    prompts: {
      summaryLengthShort: '3-5 पंक्तियों में संक्षिप्त सारांश',
      summaryLengthMedium: '1 पैराग्राफ (5-8 पंक्तियाँ) में सारांश',
      summaryLengthLong: '2-3 पैराग्राफ में विस्तृत सारांश',
      userPrompt:
        'कृपया निम्नलिखित लेख का {length} बनाएं। मुख्य बिंदुओं पर ध्यान केंद्रित करें और इसे पढ़ने में आसान बनाएं।\n\n{content}',
      systemPrompt:
        'आप लेख सारांश के लिए एक उत्कृष्ट सहायक हैं। आप लेखों से मुख्य बिंदु निकालते हैं और उन्हें स्पष्ट रूप से सारांशित करते हैं।'
    }
  },
  nl: {
    settings: {
      apiKeyName: 'OpenAI API-sleutel',
      apiKeyDesc: 'Voer uw OpenAI API-sleutel in',
      modelName: 'Model',
      modelDesc: 'Selecteer het te gebruiken OpenAI-model',
      autoSummarizeName: 'Automatische samenvatting',
      autoSummarizeDesc: 'Nieuwe bestanden automatisch samenvatten',
      watchFolderName: 'Bewaakte map',
      watchFolderDesc:
        'Alleen bestanden in deze map automatisch samenvatten (leeg laten voor alle)',
      summaryPositionName: 'Samenvattingspositie',
      summaryPositionDesc: 'Waar de samenvatting moet worden ingevoegd',
      summaryPositionTop: 'Begin van bestand',
      summaryPositionBottom: 'Einde van bestand',
      summaryPositionFrontmatter: 'Frontmatter',
      summaryLengthName: 'Samenvattingslengte',
      summaryLengthDesc: 'Lengte van de gegenereerde samenvatting',
      summaryLengthShort: 'Kort (3-5 regels)',
      summaryLengthMedium: 'Gemiddeld (5-8 regels)',
      summaryLengthLong: "Lang (2-3 alinea's)",
      languageName: 'Taal',
      languageDesc: 'Interface- en samenvattingstaal'
    },
    notices: {
      generatingSummary: 'Samenvatting genereren...',
      summaryGenerated: 'Samenvatting succesvol gegenereerd'
    },
    errors: {
      apiKeyNotSet: 'OpenAI API-sleutel is niet ingesteld',
      openaiClientNotInitialized: 'OpenAI-client is niet geïnitialiseerd',
      fileReadError: 'Bestand lezen mislukt',
      fileWriteError: 'Bestand schrijven mislukt',
      noActiveFile: 'Geen actief bestand',
      fileAlreadySummarized: 'Dit bestand heeft al een samenvatting',
      apiRequestFailed: 'API-verzoek mislukt',
      apiResponseEmpty: 'API-reactie is leeg',
      apiRateLimit: 'API-tariflimiet bereikt',
      apiInvalidRequest: 'Ongeldig API-verzoek',
      apiAuthenticationError: 'API-authenticatie mislukt',
      apiTimeout: 'Time-out API-verzoek',
      apiConnectionError: 'Verbinding met OpenAI API mislukt',
      apiNetworkError: 'Netwerkfout opgetreden',
      contentEmpty: 'Bestandsinhoud is leeg',
      contentTooLong: 'Bestandsinhoud is te lang',
      summaryGenerationFailed: 'Samenvatting genereren mislukt',
      unknownError: 'Er is een onbekende fout opgetreden'
    },
    errorDetails: {
      dnsError: 'DNS-fout - Controleer uw internetverbinding',
      connectionRefused: 'Verbinding geweigerd - Controleer uw proxy-instellingen',
      connectionReset: 'Verbinding gereset - Netwerk kan instabiel zijn',
      failedToConnect: 'Verbinding met OpenAI API mislukt',
      invalidApiKey: 'Ongeldige API-sleutel',
      rateLimitWait: 'Wacht even en probeer het opnieuw',
      checkRequestParams: 'Controleer verzoekparameters',
      openaiServerError: 'OpenAI-serverfout',
      requestTimedOut: 'Verzoek time-out',
      networkError: 'Netwerkfout opgetreden'
    },
    prompts: {
      summaryLengthShort: 'een beknopte samenvatting in 3-5 regels',
      summaryLengthMedium: 'een samenvatting in 1 alinea (5-8 regels)',
      summaryLengthLong: "een gedetailleerde samenvatting in 2-3 alinea's",
      userPrompt:
        'Maak alstublieft {length} van het volgende artikel. Focus op de belangrijkste punten en maak het gemakkelijk te lezen.\n\n{content}',
      systemPrompt:
        'U bent een uitstekende assistent voor artikelsamenvatting. U haalt belangrijke punten uit artikelen en vat ze duidelijk samen.'
    }
  },
  tr: {
    settings: {
      apiKeyName: 'OpenAI API Anahtarı',
      apiKeyDesc: 'OpenAI API anahtarınızı girin',
      modelName: 'Model',
      modelDesc: 'Kullanılacak OpenAI modelini seçin',
      autoSummarizeName: 'Otomatik özet',
      autoSummarizeDesc: 'Yeni dosyaları otomatik olarak özetle',
      watchFolderName: 'İzlenen klasör',
      watchFolderDesc:
        'Yalnızca bu klasördeki dosyaları otomatik olarak özetle (tümü için boş bırakın)',
      summaryPositionName: 'Özet konumu',
      summaryPositionDesc: 'Özetin nereye ekleneceği',
      summaryPositionTop: 'Dosyanın başı',
      summaryPositionBottom: 'Dosyanın sonu',
      summaryPositionFrontmatter: 'Frontmatter',
      summaryLengthName: 'Özet uzunluğu',
      summaryLengthDesc: 'Oluşturulan özetin uzunluğu',
      summaryLengthShort: 'Kısa (3-5 satır)',
      summaryLengthMedium: 'Orta (5-8 satır)',
      summaryLengthLong: 'Uzun (2-3 paragraf)',
      languageName: 'Dil',
      languageDesc: 'Arayüz ve özet dili'
    },
    notices: {
      generatingSummary: 'Özet oluşturuluyor...',
      summaryGenerated: 'Özet başarıyla oluşturuldu'
    },
    errors: {
      apiKeyNotSet: 'OpenAI API anahtarı ayarlanmadı',
      openaiClientNotInitialized: 'OpenAI istemcisi başlatılmadı',
      fileReadError: 'Dosya okuma başarısız',
      fileWriteError: 'Dosya yazma başarısız',
      noActiveFile: 'Aktif dosya yok',
      fileAlreadySummarized: 'Bu dosyanın zaten bir özeti var',
      apiRequestFailed: 'API isteği başarısız',
      apiResponseEmpty: 'API yanıtı boş',
      apiRateLimit: 'API hız sınırına ulaşıldı',
      apiInvalidRequest: 'Geçersiz API isteği',
      apiAuthenticationError: 'API kimlik doğrulaması başarısız',
      apiTimeout: 'API isteği zaman aşımına uğradı',
      apiConnectionError: "OpenAI API'ye bağlanma başarısız",
      apiNetworkError: 'Ağ hatası oluştu',
      contentEmpty: 'Dosya içeriği boş',
      contentTooLong: 'Dosya içeriği çok uzun',
      summaryGenerationFailed: 'Özet oluşturma başarısız',
      unknownError: 'Bilinmeyen bir hata oluştu'
    },
    errorDetails: {
      dnsError: 'DNS hatası - İnternet bağlantınızı kontrol edin',
      connectionRefused: 'Bağlantı reddedildi - Proxy ayarlarınızı kontrol edin',
      connectionReset: 'Bağlantı sıfırlandı - Ağ kararsız olabilir',
      failedToConnect: "OpenAI API'ye bağlanma başarısız",
      invalidApiKey: 'Geçersiz API anahtarı',
      rateLimitWait: 'Lütfen bir süre bekleyin ve tekrar deneyin',
      checkRequestParams: 'İstek parametrelerini kontrol edin',
      openaiServerError: 'OpenAI sunucu hatası',
      requestTimedOut: 'İstek zaman aşımına uğradı',
      networkError: 'Ağ hatası oluştu'
    },
    prompts: {
      summaryLengthShort: '3-5 satırda kısa bir özet',
      summaryLengthMedium: '1 paragrafta (5-8 satır) bir özet',
      summaryLengthLong: '2-3 paragrafta ayrıntılı bir özet',
      userPrompt:
        'Lütfen aşağıdaki makalenin {length} oluşturun. Ana noktalara odaklanın ve okumayı kolaylaştırın.\n\n{content}',
      systemPrompt:
        'Makale özetleme konusunda mükemmel bir asistansınız. Makalelerden ana noktaları çıkarır ve bunları açıkça özetlersiniz.'
    }
  },
  pl: {
    settings: {
      apiKeyName: 'Klucz API OpenAI',
      apiKeyDesc: 'Wprowadź swój klucz API OpenAI',
      modelName: 'Model',
      modelDesc: 'Wybierz model OpenAI do użycia',
      autoSummarizeName: 'Automatyczne streszczenie',
      autoSummarizeDesc: 'Automatycznie streszczaj nowe pliki',
      watchFolderName: 'Obserwowany folder',
      watchFolderDesc:
        'Automatycznie streszczaj tylko pliki w tym folderze (zostaw puste dla wszystkich)',
      summaryPositionName: 'Pozycja streszczenia',
      summaryPositionDesc: 'Gdzie wstawić streszczenie',
      summaryPositionTop: 'Początek pliku',
      summaryPositionBottom: 'Koniec pliku',
      summaryPositionFrontmatter: 'Frontmatter',
      summaryLengthName: 'Długość streszczenia',
      summaryLengthDesc: 'Długość wygenerowanego streszczenia',
      summaryLengthShort: 'Krótkie (3-5 linii)',
      summaryLengthMedium: 'Średnie (5-8 linii)',
      summaryLengthLong: 'Długie (2-3 akapity)',
      languageName: 'Język',
      languageDesc: 'Język interfejsu i streszczenia'
    },
    notices: {
      generatingSummary: 'Generowanie streszczenia...',
      summaryGenerated: 'Streszczenie wygenerowane pomyślnie'
    },
    errors: {
      apiKeyNotSet: 'Klucz API OpenAI nie jest ustawiony',
      openaiClientNotInitialized: 'Klient OpenAI nie jest zainicjalizowany',
      fileReadError: 'Nie udało się odczytać pliku',
      fileWriteError: 'Nie udało się zapisać pliku',
      noActiveFile: 'Brak aktywnego pliku',
      fileAlreadySummarized: 'Ten plik ma już streszczenie',
      apiRequestFailed: 'Żądanie API nie powiodło się',
      apiResponseEmpty: 'Odpowiedź API jest pusta',
      apiRateLimit: 'Osiągnięto limit szybkości API',
      apiInvalidRequest: 'Nieprawidłowe żądanie API',
      apiAuthenticationError: 'Uwierzytelnianie API nie powiodło się',
      apiTimeout: 'Przekroczono limit czasu żądania API',
      apiConnectionError: 'Nie udało się połączyć z API OpenAI',
      apiNetworkError: 'Wystąpił błąd sieci',
      contentEmpty: 'Zawartość pliku jest pusta',
      contentTooLong: 'Zawartość pliku jest za długa',
      summaryGenerationFailed: 'Nie udało się wygenerować streszczenia',
      unknownError: 'Wystąpił nieznany błąd'
    },
    errorDetails: {
      dnsError: 'Błąd DNS - Sprawdź połączenie internetowe',
      connectionRefused: 'Odmowa połączenia - Sprawdź ustawienia proxy',
      connectionReset: 'Resetowanie połączenia - Sieć może być niestabilna',
      failedToConnect: 'Nie udało się połączyć z API OpenAI',
      invalidApiKey: 'Nieprawidłowy klucz API',
      rateLimitWait: 'Poczekaj chwilę i spróbuj ponownie',
      checkRequestParams: 'Sprawdź parametry żądania',
      openaiServerError: 'Błąd serwera OpenAI',
      requestTimedOut: 'Przekroczono limit czasu żądania',
      networkError: 'Wystąpił błąd sieci'
    },
    prompts: {
      summaryLengthShort: 'zwięzłe streszczenie w 3-5 liniach',
      summaryLengthMedium: 'streszczenie w 1 akapicie (5-8 linii)',
      summaryLengthLong: 'szczegółowe streszczenie w 2-3 akapitach',
      userPrompt:
        'Proszę utworzyć {length} następującego artykułu. Skup się na kluczowych punktach i ułatw czytanie.\n\n{content}',
      systemPrompt:
        'Jesteś doskonałym asystentem do streszczania artykułów. Wyodrębniasz kluczowe punkty z artykułów i jasno je streszczasz.'
    }
  }
};

export function t(lang: Language): Messages {
  return translations[lang] || translations.en;
}
