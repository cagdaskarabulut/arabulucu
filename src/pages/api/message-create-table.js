import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  try {
    const result =
      await sql`CREATE TABLE arabulucu_message ( id serial primary key, name varchar(255), email varchar(255), phonenumber varchar(255), content varchar(5000), creationdate date );`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
