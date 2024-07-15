import mongoose from "mongoose";

export interface CryptoCoin extends mongoose.Document {
	symbol: string;
	name: string;
	price: number;
	code: string;
	timestamp: Date;
}

/* CryptoCoinSchema will correspond to a collection in your MongoDB database. */
const CryptoCoinSchema = new mongoose.Schema<CryptoCoin>({
	symbol: {
		/* The symbol of the cryptocurrency */
		type: String,
		required: [true, "Please provide a symbol for the cryptocurrency."],
		maxlength: [10, "Symbol cannot be more than 10 characters"],
	},
	name: {
		/* The name of the cryptocurrency */
		type: String,
		required: [true, "Please provide a name for the cryptocurrency."],
		maxlength: [100, "Name cannot be more than 100 characters"],
	},
	price: {
		/* The price of the cryptocurrency */
		type: Number,
		required: [true, "Please provide the price of the cryptocurrency."],
	},
	timestamp: {
		/* The timestamp of the price data */
		type: Date,
		default: Date.now,
		required: [true, "Please provide a timestamp for the data."],
	},
});

export default mongoose.models.CryptoCoin ||
	mongoose.model<CryptoCoin>("CryptoCoin", CryptoCoinSchema);
