import calculateProfit from "./calculateProfit";
import OutputView from "../view/OutputView";

const printLottoResult = (lottoResult, userBuyMoney) => {
    const calculateProfitPer = ((calculateProfit(lottoResult) / userBuyMoney) * 100).toFixed(1);
    printLottoContent(lottoResult, calculateProfitPer);
}

const printLottoContent = (lottoResult, totalPer) => {
    const getLottoResult = OutputView.printLottoGameResult(lottoResult, totalPer);
    OutputView.printResult(getLottoResult);
}

export default printLottoResult;