import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

// POST /api/generate — create a new short URL (tied to logged-in user)
export async function POST(request) {
  try {
    const body = await request.json();
    const { url, shorturl, userEmail } = body;

    if (!url || !shorturl) {
      return NextResponse.json({ success: false, message: "URL and short URL are required." });
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // Check if the short URL is already taken
    const existing = await collection.findOne({ shorturl });
    if (existing) {
      return NextResponse.json({ success: false, error: true, message: "Short URL already exists! Choose another." });
    }

    await collection.insertOne({
      url,
      shorturl,
      userEmail: userEmail || null,   // link to user
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, error: false, message: "URL Generated Successfully!" });
  } catch (err) {
    return NextResponse.json({ success: false, error: true, message: err.message }, { status: 500 });
  }
}

// GET /api/generate?email=user@example.com — fetch all URLs for a user
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required." }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const urls = await db
      .collection("url")
      .find({ userEmail: email })
      .sort({ createdAt: -1 })
      .toArray();

    // Strip MongoDB _id for cleanliness
    const cleaned = urls.map(({ _id, ...rest }) => rest);
    return NextResponse.json({ success: true, urls: cleaned });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}