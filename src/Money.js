import { MissionUtils } from '@woowacourse/mission-utils';

class Money {
  payedMoney;
  

  constructor() {
    this.init();
  }
  init = async () => {
    await this.getPayedMoney();
    
  };
  getPayedMoney = async () => {
    this.payedMoney = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
  };
  
}
export default Money;
