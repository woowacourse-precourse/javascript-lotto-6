import Lotto from './Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  // 로또 금액 입력 함수
  async buyLotto() {  
    let numberArr = []
    try {
      let price = await MissionUtils.Console.readLineAsync('구입 금액을 입력해 주세요');
      if (price % 1000 === 0) {
        MissionUtils.Console.print(price/1000 + '개를 구매했습니다.')
        return this.createLottoNumber(numberArr, price / 1000)
      } else {
        throw new Error("[ERROR] 올바른 금액을 입력해주세요.");
      }
    } catch (err) {
      throw Error(err)
    }
  }

  // 로또 번호 생성 함수
  createLottoNumber(arr, count) {
    let num = [];
    for (let i = 0; i < count; i++) {
      let number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      number.sort
      MissionUtils.Console.print(number)
      num.push(number)
    }
    return num
  }

  // 당첨 번호 입력 및 검증 함수
  async winningNumbers() {
    try {
      let numbers = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.')
      let winningNumber = numbers.split(',');
      let lotto = new Lotto(winningNumber)

      let addNumber = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.')
      winningNumber.push(addNumber)

      return lotto.validateNumbers(winningNumber)
    } catch(err) {
      throw Error(err)
    }
  }  

  calWinningAmount(buyLottoNumbers, winningNumber) {
    let winningAmount = [0, 0, 0, 0, 0];
    let winningNumberBonus = winningNumber[6]

    buyLottoNumbers.map((ba) => {
      let correctCount = 0;

      winningNumber.map((wa)=> {
        if (ba.indexOf(wa) !== -1) {
          correctCount++;
        }
      })
      if (correctCount === 5 && ba.indexOf(winningNumberBonus) !== -1) {
        winningAmount[3]++;
      }

      switch(correctCount){
        case 3 :
          winningAmount[0]++;
          break;
        case 4 :
          winningAmount[1]++;
          break;  
        case 5 :
          winningAmount[2]++;
          break;
        case 6 :
          winningAmount[4]++;
          break;  
      }
    })

    let profit = winningAmount[0] * 5000 + winningAmount[1] * 50000 + winningAmount[2] * 1500000
    + winningAmount[3] * 30000000 + winningAmount[4] * 2000000000 

    MissionUtils.Console.print('당첨 통계')
    MissionUtils.Console.print('---')
    MissionUtils.Console.print('3개 일치 (5,000원) - ' + winningAmount[0] + '개')
    MissionUtils.Console.print('4개 일치 (50,000원) - ' + winningAmount[1] + '개')
    MissionUtils.Console.print('5개 일치 (1,500,000원) - ' + winningAmount[2] + '개')
    MissionUtils.Console.print('5개 일치, 보너스 볼 일치 (30,000,000원) - ' + winningAmount[3] + '개')
    MissionUtils.Console.print('6개 일치 (2,000,000,000원) - ' + winningAmount[4] + '개')
    MissionUtils.Console.print('총 수익률은 ' + (profit / (buyLottoNumbers.length * 1000))*100 + '%입니다.')
  }

  async play() {
    let buyLottoNumbers = await this.buyLotto()
    let winningNumber = await this.winningNumbers()
    this.calWinningAmount(buyLottoNumbers, winningNumber)
  }
}

export default App;
