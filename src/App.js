import UserView from './view/UserView.js';
import Lottos from './Model/Lottos.js';

class App {

  #lottos;

  constructor(){
    this.#lottos;
    this.userView = new UserView();
  }

  async play() {
    await this.lottoProcess();
  }

  async lottoProcess(){
    await this.createLottoAmount();
  }

}

export default App;
