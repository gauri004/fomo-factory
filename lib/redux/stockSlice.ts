import { createSlice } from "@reduxjs/toolkit";
import { CoinSymbol } from "../types/coins";

const initialState: {
	data: {
		name: string;
		rank: number;
		symbol: string;
		price: number;
		timestamp: Date;
	}[];
	selectedCoin: CoinSymbol;
} = {
	data: [],
	selectedCoin: CoinSymbol.BTC,
};

const stockSlice = createSlice({
	name: "stock",
	initialState,
	reducers: {
		setData(state, action) {
			state.data = action.payload;
		},
		setSelectedCoin(state, action) {
			state.selectedCoin = action.payload;
		},
	},
});

export const { setData, setSelectedCoin } = stockSlice.actions;

export default stockSlice.reducer;
