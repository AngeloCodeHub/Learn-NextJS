import postgres from 'postgres';
import {
  Revenue,
} from '@/app/lib/definitions';

const sql = postgres(process.env.POSTGRES_URL!);
// console.log(process.env.POSTGRES_URL!);

const data = await sql<Revenue[]>`SELECT * FROM revenue`;

console.log('Revenue Data:', data);
