import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const client = postgres(process.env.DETABASE_URL!, { prepare: false });

const db = drizzle(client);
export default db;
