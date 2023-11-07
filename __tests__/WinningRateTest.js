import Lotto from "../src/Lotto.js";
import WinningRate from "../src/domains/WinningRate.js";

describe("WinningRate 클래스 테스트", () => {
  test("당첨 번호와 보너스 번호가 중복됐을 때 예외가 발생한다", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = numbers[0];

    expect(() => new WinningRate(new Lotto(numbers), bonusNumber)).toThrow("[ERROR]");
  });

  test("보너스 번호에 숫자가 아닌 값이 작성됐을 때 예외가 발생한다", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = "7";

    expect(() => new WinningRate(new Lotto(numbers), bonusNumber)).toThrow("[ERROR]");
  });

  test("보너스 번호에 1보다 작은 숫자가 작성됐을 때 예외가 발생한다", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 0.3;

    expect(() => new WinningRate(new Lotto(numbers), bonusNumber)).toThrow("[ERROR]");
  });

  test("당첨 번호의 3개 일치 개수를 센다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 8;
    const numbers = [1, 2, 3, 7, 8, 9];

    const winningRate = new WinningRate(new Lotto(winningNumbers), bonusNumber);
    const lotto = new Lotto(numbers);

    expect(winningRate.countMatchLottoNumber(lotto)).toBe(3);
  });

  test("당첨 번호의 4개 일치 개수를 센다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 8;
    const numbers = [1, 2, 3, 4, 7, 8];

    const winningRate = new WinningRate(new Lotto(winningNumbers), bonusNumber);
    const lotto = new Lotto(numbers);

    expect(winningRate.countMatchLottoNumber(lotto)).toBe(4);
  });

  test("당첨 번호의 5개 일치 개수를 센다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 8;
    const numbers = [1, 2, 3, 4, 5, 7];

    const winningRate = new WinningRate(new Lotto(winningNumbers), bonusNumber);
    const lotto = new Lotto(numbers);

    expect(winningRate.countMatchLottoNumber(lotto)).toBe(5);
  });

  test("당첨 번호의 5개 일치 + 보너스 번호 일치를 센다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 8;
    const numbers = [1, 2, 3, 4, 5, 8];

    const winningRate = new WinningRate(new Lotto(winningNumbers), bonusNumber);
    const lotto = new Lotto(numbers);

    expect(winningRate.countMatchLottoNumber(lotto)).toBe(5);
    expect(winningRate.isMatchBonusNumber(lotto)).toBe(true);
  });

  test("당첨 번호의 6개 일치 개수를 센다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 8;
    const numbers = [1, 2, 3, 4, 5, 6];

    const winningRate = new WinningRate(new Lotto(winningNumbers), bonusNumber);
    const lotto = new Lotto(numbers);

    expect(winningRate.countMatchLottoNumber(lotto)).toBe(6);
  });
});
