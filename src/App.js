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

async getLottoNumber(){ 
  let COUNT = this.USERSCASH / 1000;
  Console.print(`${COUNT}개를 구매했습니다.`);
    await domain.GetLottoNumbers(COUNT,this.LOTTOS);
  }//도메인 로직

  async getUserNumber() {
    while(true){
    const USERCHOOSENUMBERDATA = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    this.USERCHOOSENUMBER = String(USERCHOOSENUMBERDATA).split(",").map(Number);
    try{
      new Lotto(this.USERCHOOSENUMBER); 
      break;
    }catch(error){ Console.print(`${error}`); }
    }
  } // ui로직



  async play() {
    while(true){
   await this.getUsersCashAndCheck();
   await this.getLottoNumber();
   await this.getUserNumber();
   break;
    }
  }

}

let app = new App();
let domain = new Domain();

export default App;
