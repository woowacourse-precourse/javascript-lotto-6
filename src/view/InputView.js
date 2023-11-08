import { Console } from "@woowacourse/mission-utils"
import Statics from "../static/Statics.js"

class InputView {
  static async inputPurchaseBudget() {
		return await Console.readLineAsync(Statics.message.input.purchaseBudget);
	}

	static async inputWinningNumber() {
		const winningNumber = await Console.readLineAsync(Statics.message.input.winningNumber);
		return winningNumber.split(',')
	}

	static async inputBonusNumber() {
		return await Console.readLineAsync(Statics.message.input.bonusNumber);
  } 
}

export default InputView