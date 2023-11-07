import { Console } from '@woowacourse/mission-utils'
import Validate from '../validate/Validate.js'

const InputView = {
  /**
   *
   * @returns {Promise<number>} 구입금액
   */
  readLottoPurchasePrice: async () => {
    try {
      const userInput = await Console.readLineAsync('구입금액을 입력해 주세요.')

      Validate.validLottoPrice(userInput)

      return Number(userInput)
    } catch (error) {
      return InputView.readLottoPurchasePrice()
    }
  },

  /**
   *
   * @returns {Promise<number[]>} 당첨 번호
   */
  readWinningLotto: async () => {
    try {
      const userInput = await Console.readLineAsync('당첨 번호를 입력해 주세요.')
      const winningLotto = userInput
        .split(',')
        .map((lottoNumber) => lottoNumber.trim())
        .map(Number)

      Validate.validLottoNumbers(winningLotto)

      return winningLotto
    } catch (error) {
      return InputView.readWinningLotto()
    }
  },

  /**
   *  @param {number[]} 당첨 번호
   * @returns {Promise<number>} 보너스 번호
   */
  readWinningLottoBonus: async (winningLotto) => {
    try {
      const userInput = await Console.readLineAsync('보너스 번호를 입력해 주세요.')
      const winningLottoBonus = Number(userInput)

      Validate.validBonusNumber(winningLottoBonus, winningLotto)

      return winningLottoBonus
    } catch (error) {
      return InputView.readWinningLottoBonus()
    }
  },
}

export default InputView
