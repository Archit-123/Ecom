import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongoose";
import ProductModel from "../../../models/product";

export const config = {
  api: {
    bodyParser: false,
  },
};
// GET 
export async function GET() {
  try {
    await connectDB();
    const products = await ProductModel.find();
    return NextResponse.json(products);
  } catch (error) {
    console.error(" GET error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch products" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}


// POST 
export async function POST(req: Request) {
  await connectDB();

  try {
    const body = await req.json();

    const { productName, price, category, image } = body;

    if (!productName || !price || !category || !image) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const product = await ProductModel.create({
      productName,
      price: Number(price),
      category,
      image,
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { message: "Error creating product", error },
      { status: 500 }
    );
  }
}

// DELETE 
export async function DELETE(
  req: Request,
  {params}:{params: Promise<{ id: string }>}
) {
  const { id } = await params;
  await connectDB();
  try {
    const deletedProduct =await  ProductModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}


