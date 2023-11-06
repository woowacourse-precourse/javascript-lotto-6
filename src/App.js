import { Console, Random } from "@woowacourse/mission-utils";

function App() {
  this.play = async () => {
    const inputAmount = await InputPurchaseAmount();
  };
  const InputPurchaseAmount = async () => {
    const inputAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    return inputAmount;
  };
}

export default App;
