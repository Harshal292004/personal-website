import mongoose, { Schema, Document, Model } from "mongoose";

export interface IQuote extends Document {
  text: string;
  author: string;
  numberOfVotes: number;
  rating: number;
}

const quoteSchema = new Schema<IQuote>({
  text: { type: String, required: true },
  author: { type: String, required: true },
  numberOfVotes: { type: Number, required: true },
  rating: { type: Number, required: true },
});

export const Quote: Model<IQuote> =
  (mongoose.models.Quote as Model<IQuote>) ||
  mongoose.model<IQuote>("dev_quotes", quoteSchema);
