declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    NODE_PATH: string;

    DB_DATABASE: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_HOST: string;
    APP_HOST: string;
    APP_PORT: string;
  }
}
