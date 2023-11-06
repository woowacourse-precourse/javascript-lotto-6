import Lotto from "../src/Lotto.js";
import App from "../src/App.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  test("새로운 로또 생성", () => {
    const money = 4000;
    let newLotto;
    const app = new App();

    newLotto = app.makeLotto(money);

    expect(newLotto.length).toEqual(money / 1000);
  });

  test("로또 번호 비교", () => {
    const inputs = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 32, 39, 45],
    ];
    const bonusNumber = [4, 5];
    const outputs = [
      [3, 1],
      [6, 0],
    ];

    const lottoGame = new Lotto([1, 2, 3, 32, 39, 45]);

    outputs.forEach((output) => {
      const input = inputs.shift();
      const bonusNum = bonusNumber.shift();
      const result = lottoGame.compareLottos(input, bonusNum);

      expect(result).toEqual(output);
    });
  });

  test("로또 결과 저장", () => {
    const input = [5, 1];
    const lottoGame = new Lotto([1, 2, 3, 4, 5, 6]);
    const lottoBoard = {
      threeSame: 0,
      fourSame: 0,
      fiveSame: 0,
      fiveAndBonusSame: 0,
      sixSame: 0,
    };

    lottoGame.saveCompareResult(input, lottoBoard);
    expect(lottoBoard.fiveAndBonusSame).toEqual(1);
  });

  test("로또 당첨 금액 계산", () => {
    let totalReward = 0;
    const lottoGame = new Lotto([1, 2, 3, 4, 5, 6]);
    const lottoBoard = {
      threeSame: 1,
      fourSame: 2,
      fiveSame: 0,
      fiveAndBonusSame: 0,
      sixSame: 0,
    };

    totalReward += lottoGame.calculateReward(lottoBoard);
    expect(totalReward).toEqual(105000);
  });
});
