import {MissionUtils} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import * as Validation from "./Validation.js";
/*
  기능 목록
0. 구입 금액 받고 로또 구입 개수 산출x
  -금액 유효성 확인x
1. ~중복되지 않는 6개의 숫자 뽑기
2. 나머지 숫자 중 1개 뽑기~
3. 구입 금액 입력 기능x
4. 구입 금액 만큼 로또 발행 기능x
5. 당첨 번호와 보너서 번호 입력 기능x
6. ~발행된 로또 와 당첨, 보너스 번호 비교 기능~
7. 비교 내용으로 수익률 산출 기능x
8. 결과 출력 기능x
9. 에러시 다시 입력 기능

✨ 추가 요구 사항 (항시 체크)
- 함수는 최대 15라인 이상x
- else 지양
  - switch문이 더 깔끔한 경우가 있다. 
  - 도메인 로직 에 단위 테스트 진행 
  -depth 주의 
  */

class App {
  async play() {
    const inputMoney = await askBuyMoneyQuestion();

    const lottoArray = buyLottos(inputMoney);

    const winNumberArray = await askWinNumbersQuestion();
    const bonusNumber = await askBonusNumberQuestion(winNumberArray);

    const results = getLottoResult(lottoArray, winNumberArray, bonusNumber);

    const prizeMoney = countPrizeMoney(results);
    const countResult = countTotalWin(results);
    const resultComment = writeResultComment(inputMoney, prizeMoney, countResult, LOTTO_PRIZES);
    MissionUtils.Console.print(resultComment);
  }
}

const LOTTO_PRIZES = {3: 5000, 4: 50000, 5: 1500000, "5B": 30000000, 6: 2000000000};

const buyLottos = (inputMoney) => {
  const lottoArray = [];
  let buyComment = `${inputMoney / 1000}개를 구매했습니다.\n`;
  for (let i = 0; i < inputMoney; i += 1000) {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    const lotto = new Lotto(randomNumbers);
    lottoArray.push(lotto);
    buyComment += `[${lotto.getNumbers().toString().replaceAll(",", ", ")}]\n`;
  }
  MissionUtils.Console.print(buyComment);
  return lottoArray;
};
const writeResultComment = (inputMoney, prizeMoney, countResult, LOTTO_PRIZES) => {
  let comment = `당첨 통계\n---\n`;
  for (let count in countResult) {
    if (count === "5B") comment += `5개 일치, 보너스 볼 일치`;
    else comment += `${count}개 일치`;
    comment += ` (${LOTTO_PRIZES[count].toLocaleString("kor")}원) - ${countResult[count]}개\n`;
  }
  comment += `총 수익률은 ${getEarningRate(inputMoney, prizeMoney)}%입니다.`;
  return comment;
};

const getEarningRate = (input, output) => {
  const earningRate = ((output / input) * 100).toFixed(1);
  const [onZero, underZero] = earningRate.split(".");
  const koreaInteger = Number(onZero).toLocaleString("kor");
  return koreaInteger + "." + underZero;
};
const getLottoResult = (lottoArray, winNumberArray, bonusNumber) => {
  const results = [];
  for (let lotto of lottoArray) {
    const result = lotto.getResult(winNumberArray, bonusNumber);
    results.push(result);
  }
  return results;
};
const countTotalWin = (lottoResults) => {
  const countResult = {3: 0, 4: 0, 5: 0, "5B": 0, 6: 0};
  for (let result of lottoResults) {
    if (result.winNumbersCount === 5 && result.isWinBonus) countResult["5B"]++;
    else if (result.winNumbersCount >= 3) {
      countResult[result.winNumbersCount]++;
    }
  }
  return countResult;
};

export const countPrizeMoney = (lottoResults) => {
  let prizeMoney = 0;
  for (let result of lottoResults) {
    switch (result.winNumbersCount) {
      case 3:
        prizeMoney += 5000;
        break;
      case 4:
        prizeMoney += 50000;
        break;
      case 5:
        prizeMoney += result.isWinBonus ? 30000000 : 1500000;
        break;
      case 6:
        prizeMoney += 2000000000;
        break;
      default:
    }
  }
  return prizeMoney;
};

const askBuyMoneyQuestion = async () => {
  let isPass = false;
  let inputMoney;
  while (!isPass) {
    try {
      inputMoney = await MissionUtils.Console.readLineAsync("구입 금액을 입력해 주세요.");
      Validation.checkWonUnit(inputMoney);
      isPass = true;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
    return inputMoney;
  }
};

const askWinNumbersQuestion = async () => {
  let isPass = false;
  let winNumberArray;
  while (!isPass) {
    try {
      const winNumbers = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요");
      Validation.checkWinNumbersType(winNumbers);
      winNumberArray = winNumbers.split(",");
      isPass = true;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  return winNumberArray;
};

const askBonusNumberQuestion = async (winNumberArray) => {
  let isPass = false;
  let bonusNumber;
  while (!isPass) {
    try {
      bonusNumber = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요");
      Validation.checkBonusNumber(bonusNumber);
      if (winNumberArray.includes(bonusNumber)) throw new Error("[ERROR]중복되지 않는 번호를 입력하세요");
      isPass = true;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
  return bonusNumber;
};

export default App;
