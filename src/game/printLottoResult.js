import calculateProfit from "./calculateProfit";
import OutputView from "../view/OutputView";

const printLottoResult = (lottoResult, userBuyMoney) => {
    const calculateProfitPer = ((calculateProfit(lottoResult) / userBuyMoney) * 100).toFixed(1);
    printLottoContent(lottoResult, calculateProfitPer);
}

const printLottoContent = (lottoResult, totalPer) => {
    const contents = `
        당첨 통계
        ---
        3개 일치 (5,000원) - ${lottoResult.three.count}개
        4개 일치 (50,000원) - ${lottoResult.four.count}개
        5개 일치 (1,500,000원) - ${lottoResult.five.count}개
        5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult.fiveBonus.count}개
        6개 일치 (2,000,000,000원) - ${lottoResult.six.count}개
        총 수익률은 ${totalPer}%입니다.
    `;

    OutputView.printResult(contents);
}

export default printLottoResult;