import { MissionUtils } from '@woowacourse/mission-utils';
import ExceptionList from './ExceptionList.js';
class Money {
  payedMoney;
  lottoCount;
  LOTTO_PRICE = 1000;
  constructor(payedMoney) {
    this.validateMoney(payedMoney);
    this.payedMoney = payedMoney;
    this.calLottoCount();
  }

  
  validateMoney = (payedMoney) => {
    let exception = new ExceptionList();
    exception.noInputError(payedMoney);
    exception.isZeroError(payedMoney);
    // exception.notThousandError(payedMoney);
    // exception.isNaNError(payedMoney);
    // if (payedMoney==='') {
    //   throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    // }
  };
  calLottoCount = async () => {
    this.lottoCount = this.payedMoney / this.LOTTO_PRICE;
  };
  printCalLottoCount = () => {
    MissionUtils.Console.print(`\n${this.lottoCount}개를 구매했습니다.`);
  };
}
export default Money;
