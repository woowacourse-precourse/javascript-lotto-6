import { Console } from '@woowacourse/mission-utils'
import Validate from '../validate/Validate.js'

const InputView = {
  /**
   *
   * @returns {Promise<number>} 구입금액
   */
  readLottoPurchasePrice: async () => {
    const userInput = await Console.readLineAsync('구입금액을 입력해 주세요.\n')

    Validate.validLottoPrice(userInput)

    return Number(userInput)
  },

  /**
   *
   * @returns {Promise<number[]>} 당첨 번호
   */
  readWinningLottoNumbers: async () => {
    const userInput = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n')
    const winningLottoNumbers = userInput
      .split(',')
      .map((lottoNumber) => lottoNumber.trim())
      .map(Number)

    Validate.validLottoNumbers(winningLottoNumbers)

    return winningLottoNumbers
  },

  /**
   *
   * @param {number[]} winningLottoNumbers
   * @returns {Promise<number>} 보너스 번호
   */
  readBonusNumber: async (winningLottoNumbers) => {
    const userInput = await Console.readLineAsync('보너스 번호를 입력해 주세요.')
    const bonusNumber = Number(userInput)

    Validate.validBonusNumber(winningLottoNumbers, bonusNumber)

    return bonusNumber
  },
}

export default InputView
