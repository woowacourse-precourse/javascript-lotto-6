import { Console } from "@woowacourse/mission-utils";
import Controller from "./Controller/Controller";

class App {
  #Controller;

  constructor(){
    this.#Controller = new Controller();
  }
  async play() {
    try{
      await this.#Controller.run();
    }
    catch(error){
      Console.print(error.message)
    }
  }
}

export default App;
