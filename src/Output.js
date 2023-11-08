import { Console } from '@woowacourse/mission-utils';

class Output {
	static printLottoList(lottoList) {
		Console.print(`${lottoList.length}개를 구매했습니다.`);

		lottoList.forEach((lotto) => {
			const numbers = lotto.getLottoNumber();
			Console.print(`[${numbers.join(', ')}]`);
		});
		Console.print('');
	}

	static printWinningResult(purchaseResult) {
		Console.print('당첨 통계\n---');
		purchaseResult.forEach((winningLottObj) => {
			const { correctCnt, bonusCnt, winnings } =
				winningLottObj.condition.getWinningCondition();
			Console.print(
				`${correctCnt}개 일치${
					bonusCnt > 0 ? ', 보너스 볼 일치' : ''
				} (${Output.numberWithCommas(winnings)}원) - ${
					winningLottObj.count
				}개`,
			);
		});
	}

	static printProfitRate(profitRate) {
		Console.print(`총 수익률은 ${profitRate}입니다.`);
	}

	static numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
}
export default Output;
