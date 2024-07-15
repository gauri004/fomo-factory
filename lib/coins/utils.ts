"use server";

import { headers } from "next/headers";
import CryptoCoin from "../models/CryptoCoin";
import dbConnect from "../mongodb";
import { CoinSymbol } from "../types/coins";

export const fetchLiveCoinPrices = async () => {
	return await (
		await fetch("https://api.livecoinwatch.com/coins/list", {
			headers: {
				"x-api-key": process.env.LIVE_COIN_WATCH_API_KEY!,
				"content-type": "application/json",
			},
			body: JSON.stringify({
				currency: "USD",
				sort: "rank",
				order: "ascending",
				offset: 0,
				limit: 5,
				meta: true,
			}),
			method: "POST",
			cache: "no-cache",
		})
	).json();
};

/**
 * return last 20 prices for a given crypto currency symbol
 */
export const getCoinPriceInformationBySymbol = async (symbol: CoinSymbol) => {
	await dbConnect();

	const headersList = headers();

	const origin = headersList.get("origin");

	const res = await (
		await fetch(`${origin}/api/crypto/poll`, {
			cache: "no-cache",
		})
	).json();

	const data = await CryptoCoin.find({
		symbol,
	})
		.sort({ timestamp: -1 })
		.limit(20);

	return data.map((item) => ({
		name: item.name,
		rank: item.rank,
		code: item.symbol,
		price: item.price,
		timestamp: item.timestamp,
	}));
};
