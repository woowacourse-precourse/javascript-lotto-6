import Lotto from "./Lotto.js";
import Cash from "./Cash.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Bonus from "./Bonus.js";
import Domain from "./Domain.js";
let {Console,Random} = MissionUtils;

class App {
   USERSCASH = 0;
   USERCHOOSENUMBER = [];
   USERBONUSNUMBER = 0;
   LOTTOS = [];
   SCORE = [0,0,0,0,0];
 constructor() {

 }
  async getUsersCashAndCheck() {
   while(true){
    const USERSCASHDATA = await Console.readLineAsync(`구입금액을 입력해 주세요.\n`);
    try{
       new Cash(USERSCASHDATA);
       this.USERSCASH = Number(USERSCASHDATA);
       break;
    }catch(error) { Console.print(`${error}`); }
  } // ui로직
}





  async play() {
    while(true){
   await this.getUsersCashAndCheck();

   break;
    }
  }

}

let app = new App();


export default App;
