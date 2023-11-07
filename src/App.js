import LottoGame from "./LottoGame.js";

class App {
  async play() {
      try {
          await LottoGame.game_start();
      }catch (error){
          throw new Error(error);
      }
  }
}

export default App;
