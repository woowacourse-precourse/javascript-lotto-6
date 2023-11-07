import { print } from '../view/print';
import { readLineAsync } from '../view/readLineAsync';
import { MESSAGE } from '../constant/MESSAGE';
import LottoAnswer from '../model/LottoAnswer';

export const inputAnswer = async () => {
	let answer;
	try{
		const inputAnswerNumber = await readLineAsync(MESSAGE.INPUT_WINNING_NUMBERS);
		answer = new LottoAnswer(inputAnswerNumber);
	} catch(error) {
		print(error.message);
		const inputAnswerNumber = await readLineAsync(MESSAGE.INPUT_WINNING_NUMBERS);
		answer = new LottoAnswer(inputAnswerNumber);
	}

	// bonus 번호 입력
	try{
		const inputBonusNumber = await readLineAsync(MESSAGE.INPUT_BONUS_NUMBER);
		answer.setBonusNumber(inputBonusNumber);
	} catch(error) {
		print(error.message);
		const inputBonusNumber = await readLineAsync(MESSAGE.INPUT_BONUS_NUMBER);
		answer.setBonusNumber(inputBonusNumber);
	}

	// 정답과 보너스 번호
	const { answerNumber, bonusNumber } = answer.getFullNumber();

	return { answerNumber, bonusNumber} ;
}