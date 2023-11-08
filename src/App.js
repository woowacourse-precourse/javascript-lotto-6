import LottoController from './Controller/LottoController.js'

class App {
  async play() {
    this.lottoController = new LottoController()
    await this.lottoController.start()
  }
}

export default App
