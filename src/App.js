import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from './Lotto.js';

async function getInput(text) {  // 사용자로부터 입력받는 함수
  try {
    var userInput = await Console.readLineAsync(text);  // 입력 후 반환
    return userInput;
  } catch (error) { 
    throw new Error("[ERROR] 잘못 된 형식의 입력입니다 !!");
  }
}

async function inputPurchaseTickets(){
  try {
    var userInput = await Console.readLineAsync("구입금액을 입력해 주세요.\n");  // 입력 후 반환
    isPurchaseTicketsValid(userInput);
    return userInput;
  } catch (error) { 

  }
}

function isPurchaseTicketsValid(purchaseTickets) {  // 입력된 구입 금액이 1,000원 단위인지
  try{
    if (purchaseTickets % 1000 != 0) {
      throw new Error("[ERROR] 입력된 로또 구입 금액이 1,000원 단위가 아닙니다 !!");
    }
  } catch(e){
    Console.print("[ERROR] 입력된 로또 구입 금액이 1,000원 단위가 아닙니다 !!");
  }
}

function generateLottoNumbers(numberOfTickets) {  // 발행한 로또 개수 만큼 번호 출력
  var lottoList = []

  for (var i = 0; i < numberOfTickets; i++){
    var lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
    var lottoObj = new Lotto(lottoNumbersSort(lottoNum));
    lottoList.push(lottoObj);
  }

  return lottoList;
}

function lottoNumbersSort(lottoNum){  // 두 수의 차를 이용해 오름차순 정렬
  lottoNum.sort(function(a, b)  {
    return a - b;
  });
  return lottoNum;
}

function isBonusNumValid(winningNumbers, bonusNumber) {  // 보너스 숫자가 유효한지, 겹치지 않는지 검증
  if(bonusNumber % 1 !== 0) {
    throw new Error("[ERROR] 보너스 번호는 정수여야 합니다.");
  }
  if(bonusNumber < 1 || bonusNumber > 45) {
    throw new Error("[ERROR] 보너스 번호는 1~45 사이의 숫자여야 합니다.");
  }
  for(var i = 0; i < winningNumbers.getNumbers().length; i++){
    if(winningNumbers.getNumbers()[i] === bonusNumber){
      throw new Error("[ERROR] 보너스 번호는 로또 번호와 중복되지 않아야 합니다.");
    }
  }
}

function checkLottoResult(lottoList, winningNumbers, bonusNumber){  // 로또 숫자를 비교해 당첨 결과 출력
  var result = [0, 0, 0, 0, 0];  // 각각 1, 2, 3, 4, 5등 개수를 저장할 리스트

  for (var i = 0; i < lottoList.length; i++){
    var sameNumber = lottoList[i].getNumbers().filter(it => winningNumbers.getNumbers().includes(it));
    
    if(sameNumber.length == 6){
      result[0] ++;
    }
    if(sameNumber.length == 5 || lottoList[i].getNumbers().includes(bonusNumber)){
      result[1] ++;
    }
    if(sameNumber.length == 5){
      result[2] ++;
    }
    if(sameNumber.length == 4){
      result[3] ++;
    }
    if(sameNumber.length == 3){
      result[4] ++;
    }
  }

  return result;
}

function printLottoResult(lottoResult, purchaseTickets){  // 로또 결과와 처음 구입 금액으로 당첨내역 및 수익률 결과출력
  Console.print("\n당첨 통계");
  Console.print("---");
  Console.print("3개 일치 (5,000원) - " + lottoResult[4] + "개");
  Console.print("4개 일치 (50,000원) - " + lottoResult[3] + "개");
  Console.print("5개 일치 (1,500,000원) - " + lottoResult[2] + "개");
  Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - " + lottoResult[1] + "개");
  Console.print("6개 일치 (2,000,000,000원) - " + lottoResult[0] + "개");
  
  var ROI = (lottoResult[4]*5000 + lottoResult[3]*50000 + lottoResult[2]*1500000 + lottoResult[1]*30000000 + lottoResult[0]*200000000) / purchaseTickets * 100;

  Console.print("총 수익률은 " + ROI.toFixed(1) + "%입니다.");
}

class App {
  async play() {

    var purchaseTickets;

    while(isNaN(purchaseTickets)){
      purchaseTickets = await inputPurchaseTickets();
    }

    var numberOfTickets = purchaseTickets / 1000;
    Console.print("\n" + numberOfTickets + "개를 구매했습니다.");

    var lottoList = generateLottoNumbers(numberOfTickets);
    for (var i = 0; i < numberOfTickets; i++){
      var lottoNum = lottoList[i].getNumbers().join(", ");
      Console.print("[" + lottoNum + "]");
    }
    
    var winningNumbersList = [];
    var winningNumbersStr = await getInput("\n당첨 번호를 입력해 주세요.\n");
    winningNumbersList = winningNumbersStr.split(',').map(Number);
    var winningNumbers = new Lotto(winningNumbersList);
    
    var bonusNumber = await getInput("\n보너스 번호를 입력해 주세요.\n");
    isBonusNumValid(winningNumbers, bonusNumber);

    var lottoResult = checkLottoResult(lottoList, winningNumbers, bonusNumber);
    printLottoResult(lottoResult, purchaseTickets);
  }
}

export default App;
