import { Console } from "@woowacourse/mission-utils";
import { ERROR } from './Constant.js'

class App {
  async play() {
    let lottoMoney = await inputMoney();
    checkMoney(lottoMoney);
  }
}

async function inputMoney() {
  let money = await MissionUtils.Console.readLineAsync('구입금액을 입력해주세요.\n');
  money = parseInt(money);
  return money;
}

function checkMoney(lottoMoney) {
  if (Number.isNaN(lottoMoney)) throw new Error(ERROR.MONEY_IS_NAN);
  if (lottoMoney % 1000 != 0) throw new Error(ERROR.MONEY_HAS_REMAINDER);
}

export default App;
