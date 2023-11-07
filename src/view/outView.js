import { MissionUtils } from "@woowacourse/mission-utils";

export function printLottoArray(lottoArray,count){
  for(let x = 0; x< count ; x++){
    let lottoString = lottoArray[x].join(", ")
    MissionUtils.Console.print(`[${lottoString}]`);
  }
}

export function printMatch(matchDict){
  MissionUtils.Console.print('당첨\n--');
  for(let key in matchDict){
    MissionUtils.Console.print(matchDict[key][2] + matchDict[key][0] +'개');
  }
}

export function printProfit(profit){
  const PROFIT = Math.floor(profit*10) / 10;
  MissionUtils.Console.print(`총 수익률은 ${PROFIT}%입니다.`);
}


