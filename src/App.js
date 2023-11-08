import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

export async function getBuyMoney(){  //UI
  try{
  let buyMoney = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
  buyMoney = Number(buyMoney);
  if(buyMoney % 1000 !== 0){
    throw new Error("[ERROR] 금액은 1000원 단위여야 합니다.")
  }
  return buyMoney;
  }catch(error){
    MissionUtils.Console.print(error.message);
    return await getBuyMoney();
  }
}

export async function getWinNumber(){ //UI
  try{
  let winNumber =  await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
  winNumber = winNumber.split(",").map(Number);
  if(winNumber.length !== new Set(winNumber).size || winNumber.length!==6 || winNumber.some(number=>number<1) || winNumber.some(number=>number>45)){
    throw new Error("[ERROR] 올바른 당첨 번호 형식이 아닙니다.");
  }
  return winNumber;
  }catch(error){
    MissionUtils.Console.print(error.message);
    return await getWinNumber();
  }
}

export async function getBonusNumber(){ //UI
  try{
  let bonusNumber = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
  bonusNumber=Number(bonusNumber);
  if(bonusNumber<1||bonusNumber>45){
    throw new Error("[ERROR] 보너스 번호는 1에서 45사이의 숫자여야 합니다.")
  }
  return bonusNumber;
  }catch(error){
    MissionUtils.Console.print(error.message);
    return await getBonusNumber();
  }
}

export function printLottoNumber(buyNumber,lottoNumber){    //UI
  MissionUtils.Console.print(buyNumber+"개를 구매했습니다.");
  for(let i=0; i<buyNumber; i++){
    let lottoNumber_string = "["+lottoNumber[i].getNumber().sort((a,b)=>a-b).join(", ")+"]"
    MissionUtils.Console.print(lottoNumber_string);
  }
}

export function printReward(rateOfRetrurn,winCount){  //UI
  MissionUtils.Console.print("당첨 통계\n---");
  MissionUtils.Console.print("3개 일치 (5,000원) - "+(winCount[0]/5000)+"개");
  MissionUtils.Console.print("4개 일치 (50,000원) - "+(winCount[1]/50000)+"개");
  MissionUtils.Console.print("5개 일치 (1,500,000원) - "+(winCount[2]/1500000)+"개");
  MissionUtils.Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - "+(winCount[3]/30000000)+"개");
  MissionUtils.Console.print("6개 일치 (2,000,000,000원) - "+(winCount[4]/2000000000)+"개");
  MissionUtils.Console.print("총 수익률은 "+rateOfRetrurn+"%입니다.");
}

class App {
  async play() {
    try{
      let buyMoney = await getBuyMoney();
      printLottoNumber(buyNumber,lottoNumber);
      let winNumber = await getWinNumber();
      let bonusNumber = await getBonusNumber();
      printReward(rateOfRetrurn,winCount);
    } catch(error){throw error;}
  }
}

export default App;
