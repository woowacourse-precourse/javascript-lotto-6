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

function isPurchaseTicketsValid(purchaseTickets) {  // 입력된 구입 금액이 1,000원 단위인지
  if (purchaseTickets % 1000 != 0) {
    throw new Error("[ERROR] 입력된 로또 구입 금액이 1,000원 단위가 아닙니다 !!");
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

class App {
  async play() {

    var purchaseTickets = await getInput("구입금액을 입력해 주세요.\n");
    isPurchaseTicketsValid(purchaseTickets);

    var numberOfTickets = purchaseTickets / 1000;
    Console.print("\n" + numberOfTickets + "개를 구매했습니다.");

    var lottoList = generateLottoNumbers(numberOfTickets);
    for (var i = 0; i < numberOfTickets; i++){
      Console.print(lottoList[i].getNumbers());
    }
    
  }
}

export default App;
