import { Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const money = await inputMoney();
    let lottoTicket = printTiceks(money);
  }
}

// 4. 로또 한개 만들기_6개의 중복되지 않는 수 반복으로 만들기
const generateLottoNumbers = () => {
  const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  return numbers.sort((a, b) => a - b);
};

// 5. 로또 번호 생성 후 Lotto 클래스에 전달
const validateLottoNumber = () => {
  let lottoNumbers = generateLottoNumbers();

  try {
    const lotto = new Lotto(lottoNumbers);
    return lotto.getNumbers();
  } catch (error) {
    console.error(error.message);
  }
};
export default App;
const app = new App();
app.play();
