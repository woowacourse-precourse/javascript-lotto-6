import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    const MONEY = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    inputMoney()

    for(let i = 0; i < trial; i++){
      auto();
    }

  }
}

//함수부

//금액 입력받는 함수
function inputMoney(money){
  let trial = money/1000;
  MissionUtils.Console.print(`${trial}개를 구매했습니다.`);

}

//당첨번호 입력하는 함수
function winningNumbers(){

}

//수익률을 계산해주는 함수
function rateOfReturn(){

}

//자동으로 숫자를 생성해주는 함수
function auto(){

}

//당첨 통계를 알려주는 함수
function isWin(){

}

export default App;
