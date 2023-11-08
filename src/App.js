import { Console, Random } from "@woowacourse/mission-utils";
import WinningNumbers from './WinningNumbers.js';
import BonusNumber from './BonusNumber.js';

class App { 

    async play() {
        const purchasePrice = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
        const quantity = purchasePrice/1000;
        Console.print(`\n${quantity}개를 구매했습니다.`);
        this.generateLottoNumber(quantity);

        this.getWinningNumbers();
    }

    generateLottoNumber(quantity) {
        let lotto = [];
        
        for (let i = 0; i < quantity; i += 1) {
            lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
            Console.print(lotto.sort((a,b) => a - b));
        }
    }

    getWinningNumbers() {
        Console.readLine('당첨 번호를 입력해 주세요.\n', (winningNumbers) => {
            this.winningNumbers = new WinningNumbers(winningNumbers);
            // 숫자가 6개가 아닌 경우 예외 처리한다.
            this.getBonusNumber();
        });
    }

    getBonusNumber() {
        Console.readLine('보너스 번호를 입력해 주세요.\n', (bonusNumber) => {
            this.bonusNumber = new BonusNumber(bonusNumber);
            // 당첨번호와 겹칠 경우 예외 처리한다.
        });
    }
    
    // 입력값이 1000으로 나누어 떨어지지 않는 경우 예외 처리한다. if %1000 !== 0 return throw [ERROR]
        
    

    // 보너스 번호 입력받기

    

    // 당첨 결과
    // 당첨번호와 보너스번호와 로또번호를 호출해서 받아오고
    // 당첨번호를 compare forEach number(로또번호) 해서
    // 일치하는 개수를 계산하여
    // 수익률을 계산한다.


    // 당첨 내역 출력하기
    // 3개 ~6개 일치하는 개수 : 0개
    // 수익률은 소수점 둘째 자리에서 반올림한 후 출력한다.
    // let rate = 30.05;
    // console.log(rate.toFixed(1));

    // 전체 프로그램 실행하는 메인 함수
    // 앞서 만든 함수들을 호출하여 로또 게임을 진행한다.

}

    // 로또 구입금액 입력받기
    // '구입금액을 입력해 주세요.'를 화면에 출력하고, 사용자가 입력한 답변을 반환한다.


    
const app = new App();
app.play();


export default App;
