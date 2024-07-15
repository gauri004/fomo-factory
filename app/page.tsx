"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/reducers";
import DataTable from "@/components/DataTable";
import CoinSelector from "@/components/CoinSelector";

const Home = () => {
	const selectedCoin = useSelector(
		(state: RootState) => state.stock.selectedCoin
	);

	return (
		<div className="container space-y-5 mt-4">
			<h1 className="text-3xl font-semibold text-center">
				Real-Time Crypto Prices Tracker
			</h1>
			<div className="flex items-center justify-between">
				<div>
					Selected Coin: <b>{selectedCoin}</b>
				</div>
				<CoinSelector />
			</div>
			<DataTable />
		</div>
	);
};

export default Home;
