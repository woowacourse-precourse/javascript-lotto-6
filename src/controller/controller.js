import { print } from '../view/print';
import { MESSAGE } from '../constant/MESSAGE';
import { setting } from './setting';
import { drawLotto } from './drawLotto';
import { inputAnswer } from './inputAnswer';
import Result from '../model/Result';

class Controller {

	async printProgressNumber (progressNumber) {
		print(`\n${progressNumber}${MESSAGE.TOTAL_PURCHASE}`);
	}

	printLotto (totalLotto) {
		const lotto = totalLotto
		.map((numbers) => `[${numbers.join(", ")}]`)
		.join("\n");
	
		print(lotto);
	}

  async play() {

		// 투입 금액과 게임 진행 횟수
		const { inputMoney, progressNumber } = await setting();
    await this.printProgressNumber(progressNumber); // 게임 횟수 출력

		const totalLotto = await drawLotto(progressNumber);
    this.printLotto(totalLotto); // 발행한 로또 출력

		// 정답 번호
    const { answerNumber, bonusNumber } = await inputAnswer();
		const answer = {answerNumber, bonusNumber}
		const result = new Result(answer);

		totalLotto.map((lotto) => result.checkRank(lotto));
		await result.printResult(inputMoney);
  }
}

export default Controller;
