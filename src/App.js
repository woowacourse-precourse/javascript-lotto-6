import {Console} from "@woowacourse/mission-utils";
import Lottos from "./Lottos.js";
import WinningNumbers from "./WinningNumbers.js";
import BonusNumber from "./BonusNumber.js";

class App {
  constructor(){
    this.LOTTOS = null;
    this.WINNINGNUMBER =null;
    this.BONUSNUMBER = null;
  }

  printRateOfReturn(INPUT_MONEY,total_Return){
    let rate_of_return = (total_Return/INPUT_MONEY)*100
    Console.print('총 수익률은 '+rate_of_return.toFixed(1)+'%입니다.')

  }

  async play() {
    const INPUT_MONEY = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    this.LOTTOS=new Lottos(INPUT_MONEY);
    
    let keep = this.LOTTOS.returnStopOrKeep();
    if(keep==false){ //금액 입력 예외 발생 시 다시 입력받기
      return this.play();
    }
    this.LOTTOS.printCount();
    this.LOTTOS.printList();

    const WINNINGNUMBER = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    this.WINNINGNUMBER = WINNINGNUMBER.split(',');
    this.WINNINGNUMBER = new WinningNumbers(WINNINGNUMBER);

    const BONUSNUMBER = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    this.BONUSNUMBER = new BonusNumber(BONUSNUMBER);

    this.LOTTOS.printResult(this.WINNINGNUMBER.value, this.BONUSNUMBER.value);
    this.printRateOfReturn(INPUT_MONEY,this.LOTTOS.total_Return);
  }
}

const app = new App();
app.play();

export default App;
