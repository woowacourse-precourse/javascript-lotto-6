import { Console } from '@woowacourse/mission-utils';

class Output {
  static printPurchaseCount(purchaseAmount) {
    Console.print(`\n${purchaseAmount}개를 구매했습니다.`);
  }
  static printRandomLottoNumber(RandomLottoNumber) {
    const FORMATTED_ARRAY = RandomLottoNumber.sort((a,b) => a - b).join(', ');
    Console.print(`[${FORMATTED_ARRAY}]`);
  }
  static printError(error) {
    Console.print(error.message);
  }
}

export default Output;