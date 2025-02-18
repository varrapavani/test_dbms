import "jsr:@std/dotenv/load";
import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const client = new Client({
  user: Deno.env.get("DENO_USER"),
  database: Deno.env.get("DATABASE"),
  hostname: Deno.env.get("HOST"),
  port: Deno.env.get("PORT"),
  password: Deno.env.get("PASSWORD"),
});

function main() {
  client
    .connect()
    .then(() => {
      console.log("Connected to PostgreSQL");
      return client.queryObject("<write your query here>");
      // eg- return client.queryObject("SELECT * FROM employee");
    })
    .then((result) => {
      console.table(result.rows);
    })
    .catch((error) => {
      console.error("Error connecting to the database:", error);
    })
    .finally(() => {
      client.end();
    });
}

main();
