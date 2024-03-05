import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    const name = request.body.name;
    const email = request.body.email;
    let phonenumber = request.body.phonenumber;
    phonenumber= phonenumber.replace("(", "");
    phonenumber= phonenumber.replace(")", "");
    const creationdate = new Date();
    const content = request.body.content;
    // if (!name || !email || !phonenumber || content) throw new Error('Message fields required');
    await sql`INSERT INTO arabulucu_message (name, email, phonenumber, content, creationdate) VALUES (${name}, ${email}, ${phonenumber}, ${content}, ${creationdate});`;
    return response.status(200).json("successfully saved");
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  // const arabulucu_message = await sql`SELECT * FROM arabulucu_message;`;
  // return response.status(200).json({ arabulucu_message });
}