import { MissionUtils } from '@woowacourse/mission-utils';
import * as LottoCompute from '../model/LottoCompute';
import * as LottoGenerator from '../model/LottoGenerator';

import Lotto from '../Lotto';
import * as ErrorCheck from '../model/ErrorCheck';
import * as ErrorMessage from '../view/ErrorMessage';
import * as outView from '../view/outView';

class Controller{

  constructor(){
    this.lottoArray = [];
    this.matchDict = {
      3 : [0, 5000, "3개 일치 (5,000원) - "], // 5등
      4 : [0, 50000, "4개 일치 (50,000원) - "], // 4등
      5 : [0, 1500000, "5개 일치 (1,500,000원) - "], // 3등
      bonus : [0, 30000000, "5개 일치, 보너스 볼 일치 (30,000,000원) - "],
      6 : [0, 2000000000, "6개 일치 (2,000,000,000원) - "], // 1등
    } ;
    this.winning = null;
    this.bonus = 0;
    this.count = 0;
    this.profit = 0;
  }

  async run() {
    await this.buyLotto();
    LottoGenerator.makeLotto(this.lottoArray, this.count);
    outView.printLottoArray(this.lottoArray, this.count);
    await this.inputWinning();
    await this.inputBonus();

  }
  

  async buyLotto() {
    try {
      const MONEY = await MissionUtils.Console.readLineAsync("구입 금액을 입력해주세요.");
      ErrorCheck.checkMoney(MONEY);
      this.count = Math.floor(Number(MONEY) / 1000);
      MissionUtils.Console.print(`${this.count}개를 구매했습니다.`);
    } catch (error) {
      ErrorMessage.moneyErrorPrint();
      return this.buyLotto();
    }
  }

  parseWinning(INPUT) {
    const [num1, num2, num3, num4, num5, num6] = INPUT.split(',').map(Number);
    return new Lotto([num1, num2, num3, num4, num5, num6]);
  }

  async inputWinning(){
    while(true){
      try{
        const USERINPUT = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해주세요.");
        this.winning = this.parseWinning(USERINPUT);
        break;
      }
      catch(e){
        ErrorMessage.winningErrorPrint();
        return;
      }
    }
  }

  async inputBonus(){
    while(true){
      try{
        const USERINPUT = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해주세요.");
        ErrorCheck.checkBonus(USERINPUT,winning);
        this.bonus = Number(USERINPUT);
        break;
      }
      catch(e){
        ErrorMessage.bonusErrorPrint();
        return ;
      }
    }
  }  
}



export default Controller;