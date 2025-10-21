// import { NextResponse } from "next/server";
// import clientPromise from "@/lib/mongodb"; // 👈 your MongoDB connection

// export async function POST(req) {
//   try {
//     const { name, email, password } = await req.json();

//     const client = await clientPromise;
//     const db = client.db("bitlinks");

//     // Check if user already exists
//     const existingUser = await db.collection("users").findOne({ email });
//     if (existingUser) {
//       return NextResponse.json({ error: "User already exists" }, { status: 400 });
//     }

//     // Insert new user
//     await db.collection("users").insertOne({ name, email, password });

//     return NextResponse.json({ message: "User registered successfully" });
//   } catch (err) {
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    const client = await clientPromise;
    const db = client.db("bitlinks");

    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const newUser = { name, email, password }; // ⚠️ hash password in production
    await db.collection("users").insertOne(newUser);

    return NextResponse.json({ message: "User created", user: newUser });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
