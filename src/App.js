import { MissionUtils } from "@woowacourse/mission-utils";

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
        MissionUtils.Console.print(randomNumbers);
      };
      MakeAndPrintLottoNumbers();
      count++;
    }

    //당첨 번호를 입력
    const WinLottoNumbersInput =
      await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");

    //당첨 번호 유효성 검사
    const isValidLottoNumbers = (input) => {
      const numbersArr = input.split(",");
      //6개가 아닐 때
      if (numbersArr.length !== 6)
        throw new Error("[ERROR]6개의 숫자를 입력하셔야 합니다.");
      numbersArr.forEach((number) => {
        if (number < 1 || number > 45) {
          throw new Error("[ERROR]1~45 사이로 입력해주세요.");
        }
      });
      //겹치는 숫자 있을 때
      const uniqueSet = new Set(numbersArr);
      if (uniqueSet.size !== numbersArr.length)
        throw new Error("[ERROR] 겹치는 숫자가 있습니다.");
    };

    isValidLottoNumbers(WinLottoNumbersInput);
  }
}

const app = new App();
app.play();

export default App;
