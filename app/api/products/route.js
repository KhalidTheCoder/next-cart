import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

// GET method to retrieve all products
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("nextcraft");
    const collection = db.collection("products");

    // Find all documents in the collection
    const products = await collection.find({}).toArray();

    return NextResponse.json(
      { success: true, data: products },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// POST method (your existing code)
export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("nextcraft");
    const collection = db.collection("products");

    const body = await req.json();
    const result = await collection.insertOne(body);

    return NextResponse.json(
      { success: true, insertedId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}
