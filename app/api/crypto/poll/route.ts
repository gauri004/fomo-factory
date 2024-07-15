"use server";

import { fetchLiveCoinPrices } from "@/lib/coins/utils";
import CryptoCoin from "@/lib/models/CryptoCoin";
import dbConnect from "@/lib/mongodb";

export async function GET() {
	try {
		const coinPrices: {
			name: string;
			rank: number;
			code: string;
			rate: number;
		}[] = await fetchLiveCoinPrices();

		await dbConnect();

		const timestamp = new Date();

		const dbEntries = coinPrices.map((coin) => ({
			name: coin.name,
			timestamp,
			symbol: coin.code,
			price: coin.rate,
		}));

		const data = await CryptoCoin.insertMany(dbEntries);

		console.log("coins saved in database successfully! ✅", { data });

		return Response.json({ data });
	} catch (error: any) {
		console.log("error in polling coins data ", { error });

		return Response.json({ error: "error in polling coins data" });
	}
}
