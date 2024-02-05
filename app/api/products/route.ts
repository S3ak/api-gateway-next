export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("API-Key", process.env.DATA_API_KEY || "");

  try {
    // const res = await fetch("https://data.mongodb-api.com", {
    //   headers,
    // });
    // const data = await res.json();
    return Response.json({
      product: {
        id: "1",
      },
    });
  } catch (error) {
    return Response.json("Error", { status: 400 });
  }
}
