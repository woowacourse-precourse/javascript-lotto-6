import {MissionUtils} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
/*
  기능 목록
0. 구입 금액 받고 로또 구입 개수 산출x
  -금액 유효성 확인x
1. 1~45 중 중복되지 않는 6개의 숫자 뽑기
2. 나머지 숫자 중 1개 뽑기
3. 구입 금액 입력 기능
4. 구입 금액 만큼 로또 발행 기능
5. 당첨 번호와 보너서 번호 입력 기능
6. 발행된 로또 와 당첨, 보너스 번호 비교 기능
7. 비교 내용으로 수익률 산출 기능
8. 결과 출력 기능
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
    let isPass = false;
    let inputMoney;
    while (!isPass) {
      try {
        inputMoney = await Console.readLineAsync("구입 금액을 입력해 주세요.");
        checkWonUnit(inputMoney);
        isPass = true;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
    const lottoArray = [];
    for (let i = 0; i < inputMoney; i += 1000) {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoArray.push(new Lotto(randomNumbers));
    }
  }
}

const {Random, Console} = MissionUtils;

const checkInputType = (input) => {
  if (!typeof input === "string" || isNaN(input)) throw new Error("[ERROR]숫자가 아닙니다.");
};

const checkWonUnit = (inputMoney) => {
  checkInputType(inputMoney);
  if (inputMoney % 1000 !== 0) throw new Error("[ERROR]1000원 단위가 아닙니다. ");
  //TODO 상수 처리
};
export default App;
