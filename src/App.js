import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { Message, ERROR } from "./env/Message.js";
import { WINNING_AMOUNT } from "./env/Constant.js";
import Validation from "./util/Validation.js";
function App() {
  const validation = new Validation();

  this.play = async () => {
    const inputAmount = await InputPurchaseAmount();
    const inputAmountCount = InputAmountValidation(inputAmount);
    const myLotto = MyLotto(inputAmountCount);
    printMyLotto(myLotto);
    const lottoWinningNumber = await LottoWinningNumber();

    const lottoBonusNumber = await LottoBonusNumber(lottoWinningNumber);
    printWinningStatistics(
      myLotto,
      lottoWinningNumber,
      lottoBonusNumber,
      inputAmount
    );
  };

  const InputPurchaseAmount = async () => {
    let inputAmount = 0;
    while (true) {
      try {
        inputAmount = await Console.readLineAsync(Message.INPUT_AMOUNT);
        validation.InvalidValue(inputAmount);
        validation.InvalidUnits(inputAmount);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return inputAmount;
  };

  const InputAmountValidation = (inputAmount) => {
    return inputAmount / 1000;
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
    Console.print(`${LOTTO_COUNT}${Message.BUY}`);
    myLotto.forEach((lotto) => Console.print(`[${lotto.join(", ")}]`));
  };

  const LottoWinningNumber = async () => {
    let lottoWinningNumber = [];
    while (true) {
      try {
        lottoWinningNumber = await Console.readLineAsync(
          Message.INPUT_WINNING_NUMBER
        );
        lottoWinningNumber = lottoWinningNumber.split(",").map(Number);
        const lotto = new Lotto(lottoWinningNumber);
        lottoWinningNumber = lotto.getNumbers();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return lottoWinningNumber;
  };

  const LottoBonusNumber = async (lottoWinningNumber) => {
    let lottoBonusNumber = 0;
    while (true) {
      try {
        lottoBonusNumber = await Console.readLineAsync(
          Message.INPUT_BONUS_NUMBER
        );
        validation.DuplicationBonusNumber(
          lottoWinningNumber,
          Number(lottoBonusNumber)
        );
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return Number(lottoBonusNumber);
  };

  const printWinningStatistics = (
    myLotto,
    lottoWinningNumber,
    lottoBonusNumber,
    inputAmount
  ) => {
    Console.print(Message.WINNING_STATISTICS);
    Console.print(Message.BR);
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
      return 5.5;
    }
    return 5;
  };

  const printWinningResult = (resultLotto, inputAmount) => {
    const WinningAmountResult = {
      3: 0,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0,
    };
    resultLotto.forEach((result) => {
      if (result >= 3) {
        WinningAmountResult[result]++;
      }
    });
    printCheckLotto(WinningAmountResult, WINNING_AMOUNT);
    printRateOfReturn(WinningAmountResult, inputAmount);
  };

  const printRateOfReturn = (WinningAmountResult, inputAmount) => {
    const LottoAmount = {
      3: 5000,
      4: 50000,
      5: 1500000,
      5.5: 30000000,
      6: 2000000000,
    };
    let resultAmount = 0;

    for (let key in WinningAmountResult) {
      resultAmount += WinningAmountResult[key] * LottoAmount[key];
    }

    Console.print(
      `총 수익률은 ${(
        Math.round((resultAmount / inputAmount) * 10000) / 100
      ).toFixed(1)}%입니다.`
    );
  };

  const printCheckLotto = (WinningAmountResult, WINNING_AMOUNT) => {
    const obj = Object.keys(WinningAmountResult).sort((a, b) => a - b);
    for (let key of obj) {
      Console.print(
        `${key === "5.5" ? "5" : key}개 일치${
          key === "5.5" ? ", 보너스 볼 일치 " : " "
        }(${WINNING_AMOUNT[key]}원) - ${WinningAmountResult[key]}개`
      );
    }
  };
}

export default App;
