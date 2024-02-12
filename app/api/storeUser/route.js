import connectMongoDB from "@/app/libs/connectMongoDB";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

// Export a named function for the POST method
export async function POST(req, res) {
  console.log("User post request", req.body);
  const { uid, email, displayName } = await req.json();
  await connectMongoDB();
  let user = await User.findOne({ uid });
  if (!user) {
    await User.create({ uid, email, displayName });
  }
  return NextResponse.json(
    { message: "Model created successfully!" },
    { status: 200 }
  );

  // const { uid, email, displayName } = await req.json();

  // console.log({ uid, email, displayName }); // Check if fields are populated

  // if (!uid || !email || !displayName) {
  //   return res.status(400).json({ message: "Missing required fields" });
  // }

  // try {
  //   let user = await User.findOne({ uid });
  //   if (!user) {
  //     user = new User({ uid, email, displayName });
  //     await user.save();
  //   }
  //   res.status(200).json({ message: "User stored successfully", user });
  // } catch (error) {
  //   console.error("Error storing user:", error);
  //   res.status(500).json({ message: "Error storing user" });
  // }
}
