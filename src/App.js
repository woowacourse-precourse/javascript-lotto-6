import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import validation from "./utils/valiidation.js";

class App {
  #lottoTickets;

  async play() {
    const lottoPurchasePrice =
      await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const LOTTO_PRICE = 1000;
    //예외 처리
    const isValidPrice = (price) => {
      if (price % LOTTO_PRICE !== 0 || isNaN(price))
        throw new Error("[ERROR] 유효한 숫자가 아닙니다.");
    };

    isValidPrice(lottoPurchasePrice);
    this.#lottoTickets = lottoPurchasePrice / LOTTO_PRICE;

    //한장씩 숫자 랜덤으로 돌려서 출력하기
    let count = 0;
    MissionUtils.Console.print(`${this.#lottoTickets}개를 구매했습니다.`);
    while (count < this.#lottoTickets) {
      const MakeAndPrintLottoNumbers = () => {
        const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
          1,
          45,
          6,
        );
        const sortedNumbers = randomNumbers.sort((a, b) => a - b);
        MissionUtils.Console.print(sortedNumbers);
      };
      MakeAndPrintLottoNumbers();
      count++;
    }

    //당첨 번호를 입력
    const winLottoNumbersInput =
      await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const winLottoNumbers = winLottoNumbersInput.split(",");

    //당첨 번호 유효성 검사
    const lotto = new Lotto(winLottoNumbers);
    lotto.checkValidation();

    //보너스 번호
    const bonusNumberInput =
      await MissionUtils.Console.readLineAsync(
        "보너스 번호를 입력해 주세요.\n",
      );

    //보너스 번호 유효성 검사
    validation.hasSameNumber([...winLottoNumbers, bonusNumberInput]);
    validation.isInValidRange([Number(bonusNumberInput)]);
  }
}

const app = new App();
app.play();

export default App;
