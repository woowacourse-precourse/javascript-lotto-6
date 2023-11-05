import { InputValue } from './InputValue.js';
import Lotto from './Lotto.js';
import { BuyLotto } from './BuyLotto.js';
import { BonusLotto } from './BonusLotto.js';
import { PrintValue } from './PrintValue.js';
import LottoIssuance from './LottoIssuance.js';
import CheckWinning from './CheckWinning.js';

class App {
	async play() {
		try {
			// const inputValue = new InputValue();
			// // 로또 구입 금액 입력
			// const buyLotto = await inputValue.buyLotto();
			// new BuyLotto(buyLotto);
			// // 로또 구입 수량
			// const lottoQuantity = buyLotto / 1000;

			// // 당첨 로또 번호 입력
			// const winningNumber = await inputValue.winningNumber();
			// new Lotto(winningNumber);

			// // 보너스 로또 번호 입력
			// const bonusNumber = await inputValue.bonusNumber();
			// new BonusLotto(bonusNumber, winningNumber);

			// // 로또 수량만큼 발행
			// const lottoList = LottoIssuance(lottoQuantity);
			// // 발행 로또 출력
			// const printValue = new PrintValue(lottoQuantity, lottoList);
			// printValue.test();

			// // 당첨된 로또 리스트
			// const winningList = CheckWinning(winningNumber, bonusNumber, lottoList);
			const winningList = CheckWinning([1, 2, 3, 4, 5, 6], 7, [
				[1, 2, 3, 4, 5, 6],
				[3, 1, 6, 5, 4, 7],
				[21, 42, 3, 38, 19, 20],
			]);
		} catch (error) {
			console.log(error.message);
		}
	}
}

export default App;
