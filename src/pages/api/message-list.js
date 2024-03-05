import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const arabulucu_message = await sql`SELECT id, name, email, phonenumber, content, creationdate 
	FROM arabulucu_message;`;
  return response.status(200).json({ arabulucu_message });
}