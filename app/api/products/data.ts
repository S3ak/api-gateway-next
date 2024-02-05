import { sql } from "@vercel/postgres";
import { API_RESPONSE_MESSAGES } from "./constants";
import { InvoicesRes, Products, Product } from "./definitions";

export async function getAllInvoices() {
  try {
    const res = await sql<InvoicesRes>`SELECT * FROM invoices`;
    return {
      message: `${API_RESPONSE_MESSAGES.success.read} Invoices`,
      data: res,
    };
  } catch (error) {
    return { message: "Database Error: Failed to retreive invoices" };
  }
}

export async function getLatestInvoices(count = 5) {
  const maxCount = Math.min(count, 100);
  const pageNumber = 1;
  const offset = (pageNumber - 1) * maxCount;

  try {
    const res =
      await sql<InvoicesRes>`SELECT invoices.amount, customers.name, customers.image_url, customers.email
        FROM invoices
        JOIN customers ON invoices.customer_id = customers.id
        ORDER BY invoices.date DESC
      LIMIT ${count} OFFSET ${offset}`;
    return {
      message: `${API_RESPONSE_MESSAGES.success.read} Invoices`,
      data: res,
    };
  } catch (error) {
    return { message: "Database Error: Failed to retreive invoices" };
  }
}

export async function getAllProducts() {
  try {
    const res = await sql<Products>`SELECT *
      FROM products
    `;
    return {
      message: `${API_RESPONSE_MESSAGES.success.read} products`,
      data: res,
    };
  } catch (error) {
    return { message: "Database Error: Failed to retreive products" };
  }
}

export async function getLatestProducts(count = 5) {
  const maxCount = Math.min(count, 100);
  const pageNumber = 1;
  const offset = (pageNumber - 1) * maxCount;

  try {
    const res = await sql<Products>`SELECT *
        FROM products
      LIMIT ${5}
      OFFSET ${offset}`;
    return {
      message: `${API_RESPONSE_MESSAGES.success.read} products`,
      data: res,
    };
  } catch (error) {
    return { message: "Database Error: Failed to retreive products" };
  }
}

export async function createProduct(product: Product) {
  console.log("product", product);

  try {
    const res =
      await sql<Product>`INSERT INTO products (price, id, description, name) values (
        ${product.price}, 
        ${product.id}, 
        ${product.description},
        ${product.name})
        RETURNING *
      `;

    return {
      message: `${API_RESPONSE_MESSAGES.success.create} product`,
      data: res,
    };
  } catch (error) {
    console.log("error", error);

    return { message: `${API_RESPONSE_MESSAGES.error.create} product` };
  }
}
