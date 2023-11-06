import { Console, Random } from "@woowacourse/mission-utils";

function App() {
  this.play = async () => {
    const inputAmount = await InputPurchaseAmount();
    const inputAmountCount = InputAmountValidation(inputAmount);
    const myLotto = MyLotto(inputAmountCount);
    printMyLotto(myLotto);
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
}

export default App;
