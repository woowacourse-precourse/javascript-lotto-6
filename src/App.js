import Lotto from './Lotto.js';   
import UserInput from "./Input.js";
import print from './Print.js';
import model from './Model.js';
import { Random } from "@woowacourse/mission-utils"


const CONDITION = [1,45,6]

class App {
  async play() {
    const userInputMoney = await new UserInput().getPurchasingPrice(); // 사용자가 구입에 사용할 금액 입력 받기
    const maxLottoNumber = model.calculateMaximumLotto(userInputMoney) // 최대 구매 가능량 계산 로직
    print.maxLottoNumber(maxLottoNumber) // 최대 구매 가능량 출력
    const lottoArray = Array(maxLottoNumber).fill(null).map(()=> new Lotto(Random.pickUniqueNumbersInRange(...CONDITION)).printOwnNumber())  

    const winningNumber = await new UserInput().getLottoNumber() // 당첨 번호 입력 받기
    const bonusNumber = await new UserInput().getBonusNumber()// 보너스 번호 입력 받기
    const result = [lottoArray.map(lotto => lotto.checkIsWinLottery(winningNumber, bonusNumber))]// 당첨 확인
    // 당첨 통계 및 출력
  }
}




export default App;
