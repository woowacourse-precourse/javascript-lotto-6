import { Console } from '@woowacourse/mission-utils';
import { InputValue } from './InputValue.js';
import Lotto from './Lotto.js';
import { BuyLotto } from './BuyLotto.js';
import { BonusLotto } from './BonusLotto.js';
import { PrintValue } from './PrintValue.js';
import LottoIssuance from './LottoIssuance.js';
import CheckWinning from './CheckWinning.js';
import ReturnOnInvestment from './ReturnOnInvestment.js';

class App {
	async play() {
		try {
			const inputValue = new InputValue();
			const printValue = new PrintValue();

			// 로또 구입 금액 입력
			const buyLotto = await inputValue.buyLotto();
			new BuyLotto(buyLotto);

			// 로또 구입 수량
			const lottoQuantity = buyLotto / 1000;

			// 로또 수량만큼 발행
			const lottoList = LottoIssuance(lottoQuantity);

			// 발행 로또 출력
			printValue.lottoIssuedQuantity(lottoQuantity, lottoList);

			// 당첨 로또 번호 입력
			const winningNumber = await inputValue.winningNumber();
			new Lotto(winningNumber);

			// 보너스 로또 번호 입력
			const bonusNumber = await inputValue.bonusNumber();
			new BonusLotto(bonusNumber, winningNumber);

			//  당첨된 로또 리스트
			const winningList = CheckWinning(winningNumber, bonusNumber, lottoList);

			// 수익률
			const roi = ReturnOnInvestment(buyLotto, winningList);

			// 당첨 통계
			printValue.winningResult(winningList, roi);
		} catch (error) {
			Console.print(error.message);
		}
	}
}

export default App;
