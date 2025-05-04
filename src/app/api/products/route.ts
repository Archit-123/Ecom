import connectDB from "../../lib/mongoose";
import { NextResponse } from "next/server";
import ProductModel from "../../models/product";

export async function GET(){
    try {
        await connectDB();
        const product = await ProductModel.find();
        return await NextResponse.json(product);
    } catch (error) {
        console.log("error:: ",error);
    }
}