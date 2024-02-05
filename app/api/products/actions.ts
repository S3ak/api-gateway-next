import { sql } from "@vercel/postgres";

export interface RootObject {
  data: Data;
  message: string;
}

export interface Data {
  command: string;
  fields: Field[];
  rowAsArray: boolean;
  rowCount: number;
  rows: Row[];
  viaNeonFetch: boolean;
}

export interface Field {
  columnID: number;
  dataTypeID: number;
  dataTypeModifier: number;
  dataTypeSize: number;
  format: string;
  name: string;
  tableID: number;
}

export interface Row {
  amount: number;
  customer_id: string;
  date: Date;
  id: string;
  status: Status;
}

export enum Status {
  Paid = "paid",
  Pending = "pending",
}

export async function getAllInvoices() {
  try {
    const res = await sql`SELECT * FROM invoices`;
    return { message: "Found Invoices", data: res };
  } catch (error) {
    return { message: "Database Error: Failed to retreive invoices" };
  }
}
