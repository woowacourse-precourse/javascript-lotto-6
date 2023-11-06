import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

function App() {
  this.play = async () => {
    const inputAmount = await InputPurchaseAmount();
    const inputAmountCount = InputAmountValidation(inputAmount);
    const myLotto = MyLotto(inputAmountCount);
    printMyLotto(myLotto);
    const lottoWinningNumber = await LottoWinningNumber();
    new Lotto(lottoWinningNumber);
    const lottoBonusNumber = await LottoBonusNumber();
    printWinningStatistics(
      myLotto,
      lottoWinningNumber,
      lottoBonusNumber,
      inputAmount
    );
  };
  const InputPurchaseAmount = async () => {
    const inputAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    return inputAmount;
  };
  const InputAmountValidation = (inputAmount) => {
    try {
      if (inputAmount % 1000 !== 0) {
        throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
      }
      return inputAmount / 1000;
    } catch (error) {
      console.log(error.message);
    }
  };
  const MyLotto = (inputAmountCount) => {
    let lottoArr = [];
    for (let i = 0; i < inputAmountCount; i++) {
      lottoArr[i] = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoArr[i].sort((a, b) => a - b);
    }
    return lottoArr;
  };
  const printMyLotto = (myLotto) => {
    const LOTTO_COUNT = myLotto.length;
    Console.print(`\n${LOTTO_COUNT}개를 구매했습니다.`);
    myLotto.forEach((lotto) => Console.print(lotto));
    Console.print("\n");
  };
  const LottoWinningNumber = async () => {
    const lottoWinningNumber = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    return lottoWinningNumber.split(",").map(Number);
  };
  const LottoBonusNumber = async () => {
    const lottoBonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );

    return Number(lottoBonusNumber);
  };

  const printWinningStatistics = (
    myLotto,
    lottoWinningNumber,
    lottoBonusNumber,
    inputAmount
  ) => {
    Console.print("당첨 통계");
    Console.print("---");
    const resultLotto = myLotto.map((lotto) => {
      return lottoCheck(lotto, lottoWinningNumber, lottoBonusNumber);
    });
    printWinningResult(resultLotto, inputAmount);
  };
  const lottoCheck = (lotto, lottoWinningNumber, lottoBonusNumber) => {
    const lottoCheck = lotto.filter((value) =>
      lottoWinningNumber.includes(value)
    );

    let lottoCheckCount = lottoCheck.length;
    if (lottoCheckCount === 5) {
      lottoCheckCount = BonusCheck(lotto, lottoBonusNumber);
    }
    return lottoCheckCount;
  };
  const BonusCheck = (lotto, lottoBonusNumber) => {
    if (lotto.includes(lottoBonusNumber)) {
      return 7;
    }
    return 5;
  };

  const printWinningResult = (resultLotto, inputAmount) => {
    const WinningAmountResult = {
      3: 0,
      4: 0,
      5: 0,
      7: 0,
      6: 0,
    };
    resultLotto.forEach((result) => {
      if (result >= 3) {
        WinningAmountResult[result]++;
      }
    });
    Console.print(`3개 일치 (5,000원) - ${WinningAmountResult[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${WinningAmountResult[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${WinningAmountResult[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${WinningAmountResult[7]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${WinningAmountResult[6]}개`);
  };
}

export default App;
