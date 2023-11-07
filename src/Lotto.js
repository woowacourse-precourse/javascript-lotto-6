import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
}
  // TODO: 추가 기능 구현

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
      if(list.includes(winning[i])){
        count++;
      }
    }
    return count;
  }

  //당첨 통계
  function winCount(trial,winnum,bonus,totalList){

    let statistic = [];
    for(let i = 0; i < trial; i++){
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
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${statistic[0]}개\n`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${statistic[1]}개\n`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${statistic[2]}개\n`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${statistic[3]}개\n`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${statistic[4]}개\n`);
  }

   //수익률 계산
   function rateOfReturn(){
  }







export default Lotto;
