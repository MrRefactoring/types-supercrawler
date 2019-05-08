export class Crawler {
  constructor(opts: {
    urlList?: DbUrlList | RedisUrlList
    interval?: number,
    concurrentRequestsLimit?: number,
    robotsEnabled?: boolean,
    robotsCacheTime?: number,
    robotsIgnoreServerError?: boolean,
    userAgent?: string,
    request?: any
  });

  addHandler(contentType: any, handler: any, ...args: any[]): any;

  addListener(type: any, listener: any): any;

  emit(type: any, args: any): any;

  eventNames(): any;

  getConcurrentRequestsLimit(): any;

  getInterval(): any;

  getMaxListeners(): any;

  getRequestOptions(): any;

  getUrlList(): UrlList;

  getUserAgent(): any;

  listenerCount(type: any): any;

  listeners(type: any): any;

  off(type: any, listener: any): any;

  on(type: any, listener: any): any;

  once(type: any, listener: any): any;

  prependListener(type: any, listener: any): any;

  prependOnceListener(type: any, listener: any): any;

  rawListeners(type: any): any;

  removeAllListeners(type: any, ...args: any[]): any;

  removeListener(type: any, listener: any): any;

  setMaxListeners(n: any): any;

  start(): any;

  stop(): void;
}

export abstract class UrlList {
  insertIfNotExists(url: Url): Promise<Url>;

  getNextUrl(): Promise<Url>;

  upsert(url: Url): Promise<Url>;
}

export class DbUrlList extends UrlList {
  constructor(opts: {
    db: {
      database: string,
      username: string,
      password: string,
      sequelizeOpts: {
        dialect: string,
        host: string
      },
      table?: string,
      recrawlInMs?: number
    }
  });
}

export class RedisUrlList extends UrlList {
  constructor(opts: {
    redis: any,
    delayHalfLifeMs?: number,
    expiryTimeMs?: number,
    initialRetryTimeMs?: number
  });
}

export class Url {
  constructor(opts: {
    url: string,
    statusCode?: number | string | null,
    errorCode?: number | string | null
  });

  getErrorCode(): number | string | null;

  getStatusCode(): number | string | null;

  getUniqueId(): any;

  getUrl(): string;
}

export namespace handlers {
  interface IHtmlLinkParserOptions {
    hostnames?: string[],
    urlFilter?: (url: string, pageUrl?: string) => boolean
  }

  function htmlLinkParser(opts: IHtmlLinkParserOptions): (context: { [key: string]: any, body: Buffer | string }) => any;

  function robotsParser(opts: any): any;

  function sitemapsParser(opts: any): any;
}