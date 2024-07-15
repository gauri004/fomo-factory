import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { RootState } from "@/lib/redux/reducers";
import { setSelectedCoin } from "@/lib/redux/stockSlice";
import { useSelector, useDispatch } from "react-redux";

const CoinSelector = () => {
	const dispatch = useDispatch();

	const selectedCoin = useSelector(
		(state: RootState) => state.stock.selectedCoin
	);

	const handleChange = (value: string) => {
		dispatch(setSelectedCoin(value));
	};

	return (
		<>
			<Select
				value={selectedCoin}
				onValueChange={(value) => handleChange(value)}
			>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select Crypto Coin" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="BTC">Bitcoin</SelectItem>
					<SelectItem value="ETH">Etherium</SelectItem>
					<SelectItem value="BNB">Binance</SelectItem>
					<SelectItem value="SOL">Solana</SelectItem>
					<SelectItem value="USDT">Tether</SelectItem>
				</SelectContent>
			</Select>
		</>
	);
};

export default CoinSelector;
