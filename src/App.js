import {MissionUtils} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
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

    //TODO 로또 구매 함수 분리
    const lottoArray = [];

    let buyComment = `${inputMoney / 1000}개를 구매했습니다.\n`;
    for (let i = 0; i < inputMoney; i += 1000) {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      const lotto = new Lotto(randomNumbers);
      lottoArray.push(lotto);
      buyComment += `[${lotto.getNumbers().toString().replaceAll(",", ", ")}]\n`;
    }
    MissionUtils.Console.print(buyComment);

    // TODO 당첨 번호 질문 함수 분리
    const {winNumberArray, bonusNumber} = await askWinNumbersAndBonusNumberQuestion();

    //TODO 로또 결과, 구매 결과 출력 함수 분리
    const results = [];
    for (let lotto of lottoArray) {
      const result = lotto.getResult(winNumberArray, bonusNumber);
      results.push(result);
    }
    const prizeMoney = countPrizeMoney(results);
    const countResult = countTotalWin(results);

    const resultComment = writeResultComment(inputMoney, prizeMoney, countResult, LOTTO_PRIZES);
    MissionUtils.Console.print(resultComment);
  }
}

const LOTTO_PRIZES = {3: 5000, 4: 50000, 5: 1500000, "5B": 30000000, 6: 2000000000};

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

//TODO 당첨번호 유효성 검사, 보너스 중복 여부

export const checkInputNumberType = (input) => {
  if (!typeof input === "string" || isNaN(input)) throw new Error("[ERROR]숫자가 아닙니다.");
};

export const checkWinNumbersType = (input) => {
  //TODO switch문으로 변경
  if (typeof input !== "string") throw new Error("[ERROR]입려된 값이 잘못되었습니다.");
  const inputArray = input.split(",");
  if (inputArray.length !== 6) throw new Error("[ERROR]6개만 입력");
  for (let a of inputArray) {
    if (isNaN(a) || 1 > Number(a) || 45 < Number(a)) throw new Error("[ERROR]잘못된 값 입력");
  }
  if ([...new Set(inputArray)].length !== inputArray.length) throw new Error("[ERROR]잘못된 값 읿력 ");
};

export const checkWonUnit = (inputMoney) => {
  checkInputNumberType(inputMoney);
  if (inputMoney % 1000 !== 0) throw new Error("[ERROR]1000원 단위가 아닙니다. ");
  //TODO 상수 처리
};

const initIsPass = (isPass) => {
  isPass = false;
  return isPass;
};

const askBuyMoneyQuestion = async () => {
  let isPass = false;
  let inputMoney;
  //TODO 질문 함수분리
  while (!isPass) {
    try {
      inputMoney = await MissionUtils.Console.readLineAsync("구입 금액을 입력해 주세요.");
      checkWonUnit(inputMoney);
      isPass = true;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
    return inputMoney;
  }
};

const askWinNumbersAndBonusNumberQuestion = async () => {
  let isPass = false;
  let winNumberArray;
  let bonusNumber;
  while (!isPass) {
    try {
      const winNumbers = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요");
      checkWinNumbersType(winNumbers);
      winNumberArray = winNumbers.split(",");
      isPass = true;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  //TODO 보너스 번호 질문 함수 분리
  isPass = false;
  while (!isPass) {
    try {
      bonusNumber = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요");
      //TODO 유횽성 검사
      if (winNumberArray.includes(bonusNumber)) throw new Error("[ERROR]보너스 입력 문제 ");
      isPass = true;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
  return {winNumberArray, bonusNumber};
};
export default App;
