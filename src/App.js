import Lotto from './Lotto.js';   
import UserInput from "./Input.js";
import print from './Print.js';
import model from './Model.js';

class App {
  async play() {
    const userInputMoney = await new UserInput().getPurchasingPrice(); // 사용자가 구입에 사용할 금액 입력 받기
    const maxLottoNumber = model.calculateMaximumLotto(userInputMoney) // 최대 구매 가능량 계산 로직
    print.maxLottoNumber(maxLottoNumber) // 최대 구매 가능량 출력
    const lottoNumberArray = model.generateLottoNumberArray(maxLottoNumber) // 로또 숫자 랜덤 생성
    print.lottoNumber(lottoNumberArray) // 전부다 프린트
    const lottoArray = lottoNumberArray.map(lottoNumber => new Lotto(lottoNumber)) // 순회하면서 Lotto 생성
    const winningNumber = await new UserInput().getLottoNumber() // 당첨 번호 입력 받기
    const bonusNumber = await new UserInput().getBonusNumber()// 보너스 번호 입력 받기
    // 당첨 통계


    // const userInputLotto = await new UserInput().getLottoNumber();
    

  }
}




export default App;
