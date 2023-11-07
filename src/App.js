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

  async getUserBonusNumber() {
    while(true){
   const GETUSERBONUSNUMBERDATA =  await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
   try{
   new Bonus(GETUSERBONUSNUMBERDATA,this.USERCHOOSENUMBER)
   this.USERBONUSNUMBER = Number(GETUSERBONUSNUMBERDATA);
   break;
   }catch(error){ Console.print(`${error}`) ;}
  }
  }// ui 로직


  async result() {
    Console.print("당첨 통계\n"+"---");
    await domain.ScoreSet(this.LOTTOS,this.SCORE,this.USERCHOOSENUMBER,this.USERBONUSNUMBER);
       Console.print(`3개 일치 (5,000원) - ${this.SCORE[0]}개`)
       Console.print(`4개 일치 (50,000원) - ${this.SCORE[1]}개`)
       Console.print(`5개 일치 (1,500,000원) - ${this.SCORE[2]}개`)
       Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.SCORE[3]}개`)
       Console.print(`6개 일치 (2,000,000,000원) - ${this.SCORE[4]}개`)
 
     await domain.Result(this.SCORE,this.USERSCASH);
       
   }//도메인 로직

  async play() {
    while(true){
   await this.getUsersCashAndCheck();
   await this.getLottoNumber();
   await this.getUserNumber();
   await this.getUserBonusNumber();
   this.result();
   break;
    }
  }

}

let app = new App();
let domain = new Domain();

export default App;
