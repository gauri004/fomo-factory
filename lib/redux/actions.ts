import { AppThunk } from "./store";
import { setData } from "./stockSlice";
import { CoinSymbol } from "@/lib/types/coins";
import { getCoinPriceInformationBySymbol } from "../coins/utils";

export const fetchData =
	(stock: CoinSymbol): AppThunk =>
	async (dispatch) => {
		try {
			const response = await getCoinPriceInformationBySymbol(stock);
			dispatch(setData(response));
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};
