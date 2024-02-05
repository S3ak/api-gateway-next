import { getAllInvoices } from "./actions";
export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  // const headers = new Headers();
  // headers.append("Content-Type", "application/json");
  // headers.append("API-Key", process.env.DATA_API_KEY || "");

  try {
    const res = await getAllInvoices();
    if (!res.data) throw new Error("No data found");

    return Response.json({
      message: res.message,
      data: res.data?.rows,
      count: res.data?.rowCount,
    });
  } catch (error) {
    return Response.json("Error", { status: 400 });
  }
}
