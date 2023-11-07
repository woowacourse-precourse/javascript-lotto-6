import LottoGame from "./LottoGame.js";

class App {
  play() {
      try {
          LottoGame.game_start();
      }catch (error){
          throw new Error(error);
      }
  }
}

export default App;
