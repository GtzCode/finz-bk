//NodeJS.ProcessEnv

declare namespace NodeJS {
    type ProcessEnv =  {
        APP_HOST    :string;
        APP_PORT    :number;
        DB_HOST     :string;
        DB_PORT     :number;
        DB_USER     :string;
        DB_PASSWORD :string;
        DB_SCHEMA   :string;
        DB_DATABASE :string;
        CONTAINER   :string;
    }
}