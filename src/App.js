import SetGame from "./domains/Settings.js";

class App {

  #setGame
  #amounts
  #lotto
  #bonus

  constructor(){
    this.#setGame = new SetGame();
  }

  async play() {
    await this.setGame();    
  }

  async setGame(){
    this.#amounts = await this.#setGame.setAmounts();
    this.#lotto = await this.#setGame.setLottoNumbers();
    this.#bonus = await this.#setGame.setBonusNumber(this.#lotto);
  }

  

}

export default App;
