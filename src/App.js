import Lotto from './Lotto.js';   
import UserInput from "./Input.js";
import print from './Print.js';
class App {
  async play() {
    // const userInputMoney = await new UserInput().getPurchasingPrice();
    const maxLottoNumber = 0 // 최대 구매 가능량 계산 로직
    print.maxLottoNumber(maxLottoNumber)
    // 로또 숫자 랜덤 생성
    // 전부다 프린트
    const array = [
      [1, 2, 3, 4],
      [6, 5, 3, 2],
      [1, 1, 2, 3],
      
    ]
    print.lottoNumber(array)
    // 순회하면서 Lotto 생성
    // 당첨 번호 입력 받기
    // 보너스 번호 입력 받기
    // 당첨 통계


    // const userInputLotto = await new UserInput().getLottoNumber();
    

  }
}




export default App;
