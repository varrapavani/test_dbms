# PostgreSQL Database Connectivity in JavaScript (Deno)

This demo demonstrates how to connect to a PostgreSQL database using JavaScript in Deno.

## Folder structure
```
root
|---.env
|---connect.js
```

## Prerequisites
- Edit the `.env` file with your own database credentials

## Running the Script
Use the following command to execute the script:

```sh
deno run --allow-net --allow-env connect.js
```

## Modifying Environment Variables
If you are not using an `.env` file, you can manually set the database credentials as follows:

```javascript
const client = new Client({
  user: "postgres",
  database: "sample_database",
  hostname: "localhost",
  port: 5432,
  password: "abcd@1234",
});
```

## Notes
- Ensure that the PostgreSQL database is running and accessible.
- The `--allow-net` flag is required to enable network access.
- The `--allow-env` flag is needed to load environment variables.

This setup provides a simple way to connect to a PostgreSQL database using Deno.

