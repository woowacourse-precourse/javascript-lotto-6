import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from "../src/Lotto.js";

class App {
  async play() {
    const MONEY = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    if(MONEY%1000 != 0){
      throw new Error("[ERROR] 금액이 잘못되었습니다.");
    }
    const TRIAL = MONEY/1000; //구입금액을 횟수로 변경
    MissionUtils.Console.print(`${TRIAL}개를 구매했습니다.`);
    auto(TRIAL); //횟수만큼 자동생성

    const WINNING_NUMBERS = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const WINNING = WINNING_NUMBERS.split(',');
    const BONUS = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    //WINNING.push(BONUS);
    WINNING.sort((a, b) => a - b); //입력값 오름차순 정렬
  }
}



//함수부


//수익률을 계산해주는 함수
function rateOfReturn(){

}


//자동으로 지정된 횟수만큼 당첨 숫자를 생성해주는 함수
function auto(trial){
  let totalList = []; //모든 자동생성된 숫자를 저장할 배열
  for(let i = 0; i < trial; i++){
    autoGenerate();
    totalList.push(eachList);
    MissionUtils.Console.print(totalList[i]);
  }
}
//로또 당첨 숫자를 생성해주는 함수(중복배제 필요)
function autoGenerate(){
  let eachList = [];
  while(eachList.length < 6){
    const randomNumber = MissionUtils.Random.pickNumberInRange(1,45);
    if(!winningNumbers.includes(randomNumber)){
      eachList.push(randomNumber);
    }
    eachList.sort((a,b) => a - b); //오름차순 정렬
    return eachList;
  }
}


//당첨 통계를 알려주는 함수
function isWin(){
  MissionUtils.Console.print("당첨 통계\n");
  MissionUtils.Console.print("---\n");
}

export default App;
