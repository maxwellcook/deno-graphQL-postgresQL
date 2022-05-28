import { Client } from "https://deno.land/x/postgres@v0.15.0/mod.ts";

const config = 'postgres://bwzctbwf:EmEg3YMJbUzhGhipRHACTEj05iqNaCbm@lallah.db.elephantsql.com/bwzctbwf';
const database = new Client(config);

export default database;