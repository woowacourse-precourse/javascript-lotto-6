import { Console,Random } from "@woowacourse/mission-utils";
import Lottos from "./Lottos.js";
import WinningNumbers from "./WinningNumbers.js";
import BonusNumber from "./BonusNumber.js";


class App {
  constructor(){
    this.lottos = null;
    this.winningNumbers =null;
    this.bonusNumber = null;
  }

  printRateOfReturn(INPUT_MONEY,total_Return){
    let rate_of_return = (total_Return/INPUT_MONEY)*100
    Console.print('총 수익률은 '+rate_of_return.toFixed(1)+'%입니다.')

  }

  async play() {
  
    const INPUT_MONEY = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    this.lottos=new Lottos(INPUT_MONEY);
    let keep = this.lottos.returnStopOrKeep();
    if(keep==false){
      return this.play();
    }

    this.lottos.printCount();
    this.lottos.printList();

    const winningNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    this.winningNumbers = winningNumbers.split(',');
    this.winningNumbers = new WinningNumbers(winningNumbers);
    

    const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    this.bonusNumber = new BonusNumber(bonusNumber);


    this.lottos.printResult(this.winningNumbers.value, this.bonusNumber.value);
    this.printRateOfReturn(INPUT_MONEY,this.lottos.total_Return);
  }
}

const app = new App();
app.play();

export default App;
