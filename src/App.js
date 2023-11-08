import LottoGame from './Controller/LottoGame'

const lottoGame = new LottoGame

class App {
  async play() {
    await lottoGame.startGame()
  }
}

export default App;
