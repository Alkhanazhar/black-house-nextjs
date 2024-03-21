import { connectDb } from "@/lib/connectDb";
import Collection from "@/lib/models/Collection";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("UnAuthorized user login first", { status: 400 });
    }
    await connectDb();
    const { title, description, image } = await req.json();
    const existing = await Collection.find({ title });
    if (existing) {
      return new NextResponse("collection already exists", { status: 400 });
    }
    const newCollection = await Collection.create({
      title,
      description,
      image,
    });
    await newCollection.save();
    return NextResponse.json({ newCollection, status: 200 });
  } catch (error) {
    console.error(error);
  }
};
