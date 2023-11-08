import { Console } from '@woowacourse/mission-utils';
import LottoController from './controller/LottoController';

class App {
  #lottoController

  constructor(){
    this.#lottoController = new LottoController();
  }

  async play() {
    try{
      await this.#lottoController.play();
    } catch (err) {
      Console.print(err.message);
    }
    
  }
}

export default App;
