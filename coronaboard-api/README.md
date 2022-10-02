# coronaboard-api 💻

## Global Stats

- GET `/global-stats`
- POST `/global-stats`
- DELETE `/global-stats`

## Key Value

- GET `/key-value/:key`
- POST `/key-value`
- DELETE `/key-value/:key`

## Get Started

1. Run `npm install`
2. Create .env file under the root folder and add the following environment variables for database

    ```text
    CORONABOARD_MYSQL_HOST={your db host}
    CORONABOARD_MYSQL_PORT={your db port} => usually mysql uses 3306
    CORONABOARD_MYSQL_DATABASE={database db name}
    CORONABOARD_MYSQL_USER={database username}
    CORONABOARD_MYSQL_PASSWORD={your passowrd}
    ```

3. Run `npm run dev`
