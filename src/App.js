import {Console,Random} from '@woowacourse/mission-utils'; 
import Lotto from './Lotto.js';
const lottos = []
const result = [0,0,0,0,0,0]

const FIRST_PRIZE_MONEY = 2000000000;
const SECOND_PRIZE_MONEY = 30000000;
const THIRD_PRIZE_MONEY = 1500000;
const FOURTH_PRIZE_MONEY = 50000;
const FIFTH_PRIZE_MONEY = 5000;

const inputPurchaseAmount = async()=>{
  const amount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  if (isNaN(amount) || amount % 1000 !== 0) {
    Console.print("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.")
    throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
  }
  const count = amount/1000;
  Console.print(`\n${count}개를 구매했습니다.`);
  
  for(let i=0;i<count;i++){
    const number = Random.pickUniqueNumbersInRange(1, 45, 6);
    const stringNumber = number.sort((a,b) => a-b).join(', ');
    Console.print(`[${stringNumber}]`)
    const lotto = new Lotto(number);
    lottos.push(lotto);
  }
}


const inputPrizeNumberAndBonusNumber = async() =>{
  const prizeNumber = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
  const prizeNumberArr = prizeNumber.split(',').map(Number);
  if (prizeNumberArr.length !== 6) {
    Console.print("[ERROR] 로또 번호는 6개여야 합니다.")
    throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  }
  if (new Set(prizeNumberArr).size !== 6){
    Console.print("[ERROR] 로또 번호는 중복될 수 없습니다.")
    throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
  }
  if (prizeNumberArr.some(number => number < 1 || number > 45)){
    Console.print("[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.")
    throw new Error("[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.")
  }
  const bonusNumberInput = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
  const bonusNumber = Number(bonusNumberInput);
  if (isNaN(bonusNumber)|| bonusNumber<1 || bonusNumber>45){
    Console.print("[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.")
    throw new Error("[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.")
  }
  if (prizeNumberArr.includes(bonusNumber)){
    Console.print("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.")
    throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
  }
  return [prizeNumberArr,bonusNumber];
}


const calculateResult = (prizeNumber,bonusNumber)=>{
  for(let i=0;i<lottos.length;i++){
    result[lottos[i].compare(prizeNumber,bonusNumber)] += 1;
  }
}

const calculateRatio = ()=>{
  const getMoney = result[1]*FIRST_PRIZE_MONEY+ result[2]*SECOND_PRIZE_MONEY+result[3]*THIRD_PRIZE_MONEY+result[4]*FOURTH_PRIZE_MONEY+result[5]*FIFTH_PRIZE_MONEY;
  return (getMoney/(lottos.length*1000)*100).toFixed(1);
}

const printResult = (ratio) =>{
  Console.print('\n당첨 통계');
  Console.print('---');
  Console.print(`3개 일치 (5,000원) - ${result[5]}개`);
  Console.print(`4개 일치 (50,000원) - ${result[4]}개`);
  Console.print(`5개 일치 (1,500,000원) - ${result[3]}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[2]}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${result[1]}개`);
  Console.print(`총 수익률은 ${ratio}%입니다.`)
}

class App {
  async play() {
    try{
      await inputPurchaseAmount();
      const [prizeNumber,bonusNumber] = await inputPrizeNumberAndBonusNumber();
      calculateResult(prizeNumber,bonusNumber);
      const ratio = calculateRatio();
      printResult(ratio);
    }catch(error){
      Console.print(error);
    }
  }
}

export default App;
