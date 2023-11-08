import LottoMachine from '../domain/LottoMachine.js'
import InputView from '../view/InputView.js'
import OutputView from '../view/OutputView.js'

class LottoController {
  constructor() {
    this.lottoMachine = new LottoMachine()
  }

  async start() {
    await this.buyLottoStep()
    await this.winningLottoStep()
    await this.winningStatisticsStep()
  }

  async buyLottoStep() {
    const lottoPurchasePrice = await this.getLottoPurchasePrice()
    this.lottoMachine.buyLotto(lottoPurchasePrice)
    OutputView.printEmptyLine()
    OutputView.printPurchaseLottoList(this.lottoMachine.getLottos())
    OutputView.printEmptyLine()
  }

  async winningLottoStep() {
    const winningLottoNumbers = await this.getWinningLottoNumbers()

    OutputView.printEmptyLine()
    const bonusNumber = await this.getBonusNumber(winningLottoNumbers)
    OutputView.printEmptyLine()

    this.lottoMachine.createWinningLotto(winningLottoNumbers, bonusNumber)
  }

  async winningStatisticsStep() {
    const winningStatistics = this.lottoMachine.calculateWinningStatistics()
    OutputView.printWinningStatistics(winningStatistics)
    OutputView.printProfitRate(this.lottoMachine.calculateProfitRate(winningStatistics))
  }

  async getLottoPurchasePrice() {
    try {
      const lottoPurchasePrice = await InputView.readLottoPurchasePrice()
      return lottoPurchasePrice
    } catch (error) {
      OutputView.printError(error)
      return this.getLottoPurchasePrice()
    }
  }

  async getWinningLottoNumbers() {
    try {
      const winningLottoNumbers = await InputView.readWinningLottoNumbers()
      return winningLottoNumbers
    } catch (error) {
      OutputView.printError(error)
      return this.getWinningLottoNumbers()
    }
  }

  async getBonusNumber(winningLottoNumbers) {
    try {
      const bonusNumber = await InputView.readBonusNumber(winningLottoNumbers)
      return bonusNumber
    } catch (error) {
      OutputView.printError(error)
      return this.getBonusNumber(winningLottoNumbers)
    }
  }
}

export default LottoController
