import { MissionUtils } from "@woowacourse/mission-utils";

class LottoValidator {
  
    constructor() {
    }
  
    async readUserInput() {
        const budget = await this.#readBudget();
        const { answerNumbers, bonusNumber } = await this.#readAnswer();

        return { budget, answerNumbers, bonusNumber };
    }

    async #readBudget() {
        const budgetString = await MissionUtils.Console.readLineAsync('구매 금액을 입력해주세요:');
        if (budgetString.trim().match(/\D/)) {
            throw new Error('[ERROR] 구매 금액에 숫자가 아닌 입력이 포함되어있습니다');
        }
    
        const budget = Number(budgetString);
        if (budget % 1000 > 0) {
            throw new Error('[ERROR] 구매 금액이 천원 단위가 아닙니다.');
        }

        return budget;
    }

    async #readAnswer() {
        const answerNumberString = await MissionUtils.Console.readLineAsync('');
        if (answerNumberString.match(/[^(0-9),]/)) {
            throw new Error('[ERROR] 번호에 숫자와 ,가 아닌 입력이 포함되어있습니다.');
        }
    
        const answerBonusNumberString = await MissionUtils.Console.readLineAsync('');
        if (answerBonusNumberString.match(/\D/)) {
            throw new Error('[ERROR] 보너스 번호에 숫자가 아닌 입력이 포함되어있습니다.');
        }

        return { 
            answerNumbers: answerNumberString.split(",").map(Number),
            bonusNumber: Number(answerBonusNumberString)
        };
    }

}
  
export default LottoValidator;
