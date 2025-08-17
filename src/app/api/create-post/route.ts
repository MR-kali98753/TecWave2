import { createPostSession } from "@/action/createPost";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("POST /api/create-post called");
  try {
    const requestBody = await req.json();
    console.log("Request body:", requestBody);
    const post = await createPostSession(requestBody);
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "unknown error occurred";
    console.error("Error in route handler:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
