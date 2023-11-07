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
    const TOTAL_LIST = auto(TRIAL); //횟수만큼 자동생성



    const WINNING_NUMBERS = await MissionUtils.Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    const WINNING_STRING = WINNING_NUMBERS.split(',');
    const WINNING = WINNING_STRING.map((str) => parseInt(str,10));//10진수로 변환
    const BONUS = await MissionUtils.Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
    //WINNING.push(BONUS);
    WINNING.sort((a, b) => a - b); //입력값 오름차순 정렬

    MissionUtils.Console.print("\n당첨 통계");
    MissionUtils.Console.print("---");
    winRank(TRIAL,WINNING,BONUS,TOTAL_LIST);

    const PRINT_STATISTIC = winRank(TRIAL,WINNING,BONUS,TOTAL_LIST);
    printStatistic(PRINT_STATISTIC);
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn(PRINT_STATISTIC,MONEY)}%입니다.`);
  }
}





  //입력값 중복체크
  function duplicated(numbers){
    const set = new Set();
    for(let i = 0; i < numbers.length; i++){
      if(set.has(numbers[i])){
        throw new Error("[ERROR] 중복된 값이 있습니다.");
        return;
      }
      set.add(numbers[i]);
    }
  }

  //자동으로 지정된 횟수만큼 당첨 숫자 생성
  function auto(trial){
    let totalList = []; //모든 자동생성된 숫자를 저장할 배열
    for(let i = 0; i < trial; i++){
      let eachList = []
      autoGenerate(eachList);
      totalList.push(eachList);
      MissionUtils.Console.print(totalList[i]);
    }
    return totalList;
  }
  //로또 숫자를 자동 생성(중복배제 필요)
  function autoGenerate(list){
    while(list.length < 6){
      const randomNumber = MissionUtils.Random.pickNumberInRange(1,45);
      if(!list.includes(randomNumber)){
        list.push(randomNumber);
      }
      list.sort((a,b) => a - b); //오름차순 정렬
      //console.log(list);
    }
    return list;
  }

  //일치하는 숫자의 갯수
  function isWin(winning,list){
    let count = 0;
    for(let i = 0; i < 6; i++){
      if(winning.includes(list[i])){
        count++;
      }
    }
    return count;
  }

  //당첨 랭크 저장
  function winRank(trial,winnum,bonus,totalList){
    let statistic = [0,0,0,0,0];
    for(let i = 0; i < trial; i++){
      isWin(winnum,totalList[i]);
      if(isWin(winnum,totalList[i]) == 3){ //3개 일치 5,000
        statistic[0]++;
      }
      else if(isWin(winnum,totalList[i]) == 4){ //4개 일치 50,000
        statistic[1]++;
      }
      else if(isWin(winnum,totalList[i]) == 5 && !totalList[i].includes(bonus)){ //5개 일치 1,500,000
        statistic[2]++;
      }
      else if(isWin(winnum,totalList[i]) == 5 && totalList[i].includes(bonus)){ //5개 일치 + 보너스 30,000,000
        statistic[3]++;
      }
      else if(isWin(winnum,totalList[i]) == 6){ //전부 일치 2,000,000,000
        statistic[4]++;
      }
    }
    return statistic;
  }

  function printStatistic(statistic){
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${statistic[0]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${statistic[1]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${statistic[2]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${statistic[3]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${statistic[4]}개`);
  }

   //수익률 계산
   function rateOfReturn(statistic,money){
    const price = (statistic[0] * 5000) + (statistic[1] * 50000) + (statistic[2] * 1500000) +
    (statistic[3] * 30000000) + (statistic[4] * 2000000000)
    let rate = price/money;
    rate = rate.toFixed(2);
    return rate;
  }





export default App;
