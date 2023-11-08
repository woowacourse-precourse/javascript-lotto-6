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

export function getBuyNumber(buyMoney){ 
  let buyNumber = buyMoney/1000;
  return buyNumber;
}

export function getLottoNumber(buyNumber){
  let lottoNumber = [];
  for(let i = 0; i < buyNumber; i++){
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const lotto = new Lotto(numbers); //Lotto클래스 객체 lotto
    lottoNumber.push(lotto);  //lotto 객체를 lottoNumber 배열에 차례대로 삽입.
  }
  return lottoNumber;
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

export function calculateWinCount(matchingCount,winCount,lottoNumber,bonusNumber){  
  switch(matchingCount){
    case 3: winCount[0] += 5000;  //당첨된 금액을 바로 배열에 저장
      break;
    case 4: winCount[1] += 50000;
      break;
    case 5: if (lottoNumber.getNumber().includes(bonusNumber)) { winCount[3] += 30000000; break;}
      winCount[2] += 1500000;
      break;
    case 6: winCount[4] += 2000000000;
      break;
  }
  return winCount;
}

export function getWinCount(buyNumber,lottoNumber,winNumber,bonusNumber){
  let winCount = [0,0,0,0,0];
  for(let i = 0; i < buyNumber; i++){
    let matchingCount = lottoNumber[i].match(winNumber);  //Lotto 클래스 내 match 메소드로 같은 수 비교
    winCount = calculateWinCount(matchingCount,winCount,lottoNumber[i],bonusNumber);  //같은 수 갯수 만큼 계산
  }
  return winCount;
}

export function printLottoNumber(buyNumber,lottoNumber){    //UI
  MissionUtils.Console.print(buyNumber+"개를 구매했습니다.");
  for(let i=0; i<buyNumber; i++){
    let lottoNumber_string = "["+lottoNumber[i].getNumber().sort((a,b)=>a-b).join(", ")+"]"
    MissionUtils.Console.print(lottoNumber_string);
  }
}

export function getRateofReturn(buyMoney,winCount){ //수익률 계산
  let sum = 0;
  for(let i=0; i<5; i++){
    sum += winCount[i];
  }
  let rateOfRetrurn = (sum/buyMoney)*100;
  return rateOfRetrurn.toFixed(1);
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
      let buyNumber = getBuyNumber(buyMoney);
      let lottoNumber = getLottoNumber(buyNumber);
      printLottoNumber(buyNumber,lottoNumber);
      let winNumber = await getWinNumber();
      let bonusNumber = await getBonusNumber();
      let winCount = getWinCount(buyNumber,lottoNumber,winNumber,bonusNumber);
      let rateOfRetrurn = getRateofReturn(buyMoney,winCount);
      printReward(rateOfRetrurn,winCount);
    } catch(error){throw error;}
  }
}

export default App;
