import Lotto from "../src/Lotto.js";
import RandomNumberGenerator from "../src/domain/RandomNumberGenerator.js";
import LottoCalculator from "../src/domain/LottoCalculator.js";
import GameCalculator from "../src/domain/GameCalculator";

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
  test.each([1,2,3,4,5])("로또 한 장당 랜덤 넘버로 이루어진 로또가 한 개 발행된다.", (input) => {
    const randomNumberGenerator = new RandomNumberGenerator();
    const randomNumbers = randomNumberGenerator.getRandomNumberArray(input);
    expect(randomNumbers).toHaveLength(input);
  })

  test("한 장의 로또 번호와 당첨 번호를 비교하여 같은 수를 찾아낼 수 있어야 한다.", () => {
    const lotto = [1, 2, 3, 4, 5, 6];
    const winningNumbers = [2, 4, 6, 8, 10];
    const oneGame = new LottoCalculator(lotto, undefined, winningNumbers);
    const correctNumbers = oneGame.calculate();
    expect(correctNumbers).toBe(3);
  })

  test("로또 번호가 당첨 번호와 5개가 일치하고, 나머지 한 개의 번호가 보너스 번호와 일치할 시, 이를 문자열 bonus로 반환하여 특수 케이스화 한다.", () => {
    const lotto = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 6;
    const winningNumbers = [1, 2, 3, 4, 5, 7];
    const oneGame = new LottoCalculator(lotto, bonusNumber, winningNumbers);
    const gameResult = oneGame.calculate();
    expect(gameResult).toBe('bonus');
  })

  test("구입 금액과 로또 결과에 대한 수익률을 소수점 둘째 자리에서 반올림하여 계산한다.", () => {
    const purchaseLottos = [[1, 2, 3, 4, 5, 6], [2, 5, 6, 8, 10, 12]];
    const winningNumbers = [1, 2, 5, 6, 8 ,10];
    const bonusNumber = 7;
    const purchaseMoney = 2000;
    const oneGame = new GameCalculator(purchaseLottos, winningNumbers, bonusNumber, purchaseMoney);
    const returnRate = oneGame.calculate()[1];
    expect(returnRate).toBe('77,500.0');
  })
});
