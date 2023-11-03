import { MissionUtils } from "@woowacourse/mission-utils";

class App {
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
    let lottoTickets = lottoPurchasePrice / LOTTO_PRICE;

    const lotto = new Lotto();
  }
}

export default App;
