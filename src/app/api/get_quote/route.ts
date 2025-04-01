import { NextResponse, NextRequest } from "next/server";
import { connectToDB } from "@/lib/db";
import { Quote } from "@/lib/models/quote.model";

export async function GET(request: NextRequest) {  
    try {
        await connectToDB();

        const randomQuote = await Quote.aggregate([{ $sample: { size: 1 } }]);

        if (!randomQuote.length) {
            return NextResponse.json({ error: "No quotes found" }, { status: 404 });
        }

        return NextResponse.json(randomQuote[0]);
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
