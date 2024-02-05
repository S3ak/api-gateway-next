export interface InvoicesRes {
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

export interface Products {
  count: number;
  data: Product[];
  message: string;
}

export interface Product {
  description: string;
  id: string;
  name: string;
  price: string;
}
