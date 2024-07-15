"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "@/lib/redux/actions";
import { RootState } from "@/lib/redux/reducers";
import { CoinSymbol } from "@/lib/types/coins";
import { AppDispatch } from "@/lib/redux/store";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const DataTable = () => {
	const dispatch: AppDispatch = useDispatch();

	const data = useSelector((state: RootState) => state.stock.data);

	const selectedCoin = useSelector(
		(state: RootState) => state.stock.selectedCoin
	);

	useEffect(() => {
		dispatch(fetchData(selectedCoin as CoinSymbol));

		const interval = setInterval(() => {
			dispatch(fetchData(selectedCoin as CoinSymbol));
		}, 10 * 1000);

		return () => clearInterval(interval);
	}, [dispatch, selectedCoin]);

	return (
		<>
			<Table>
				<TableHeader className="bg-muted">
					<TableRow>
						<TableHead>#</TableHead>
						<TableHead>Timestamp</TableHead>
						<TableHead>Price (USD)</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((entry, index) => (
						<TableRow key={index}>
							<TableCell>{index + 1}</TableCell>
							<TableCell>{entry.timestamp.toLocaleString()}</TableCell>
							<TableCell>${entry.price.toFixed(2)}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
};

export default DataTable;
