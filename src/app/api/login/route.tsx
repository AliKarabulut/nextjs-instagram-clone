import { NextResponse } from "next/server";

export async function POST() {
  let response = new NextResponse();

  try {
    response.cookies.set("auth_token", "123456789");
    return response;
  } catch (error) {
    throw error;
  }
}
