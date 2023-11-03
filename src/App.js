import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #lottoTickets;

  async play() {
    const lottoPurchasePrice =
      await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.");
    const LOTTO_PRICE = 1000;
    //예외 처리
    const isValidPrice = (price) => {
      if (price % LOTTO_PRICE !== 0)
        return new Error("[ERROR] 유효한 숫자가 아닙니다.");
    };

    isValidPrice(lottoPurchasePrice);
    this.#lottoTickets = lottoPurchasePrice / LOTTO_PRICE;

    //한장씩 숫자 랜덤으로 돌려서 출력하기
    let count = 0;
    while (count < this.#lottoTickets) {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6,
      );
      MissionUtils.Console.print(randomNumbers);
      count++;
    }

    //당첨 번호를 입력

    const lotto = new Lotto();
  }
}

export default App;
