import Lotto from "../src/Lotto.js";
import { InvalidLottoNumberCountError, DuplicatedNumberError, NotNumberError, InvalidNumberRangeError, NotIntegerError } from "../src/utils/Error.js";

let randomNumbers, lotto;

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
  describe("getNumbers 메서드 테스트", () => {
    beforeEach(() => {
      randomNumbers = [1, 2, 3, 4, 5, 6];
      lotto = new Lotto(randomNumbers);
    });

    test("getNumbers 메서드가 존재해야 한다.", () => {
      // then
      expect(typeof lotto.getNumbers).toBe("function");
    });

    test("getNumbers 메서드를 호출하면 생성할때 전달한 로또 숫자를 반환해야 한다.", () => {
      // when
      const receivedNumbers = lotto.getNumbers();

      // then
      expect(receivedNumbers).toBe(randomNumbers);
    });
  });

  describe("matchNumbers 메서드 테스트", () => {
    beforeEach(() => {
      randomNumbers = [1, 2, 3, 4, 5, 6];
      lotto = new Lotto(randomNumbers);
    });

    test("matchNumbers 메서드가 존재해야 한다.", () => {
      // then
      expect(typeof lotto.matchNumbers).toBe("function");
    });

    test("matchNumbers 메서드를 호출하면 전달받은 번호와 몇 개가 일치하는지 반환하다.", () => {
      // given
      const mockLottoWinningNumbers = {
        lottoWinningNumbers: [2, 3, 4, 5, 6, 7],
        bonusNumber: [1],
      };
      const mockMatchResult = {
        lottoWinningNumbersMatchCount: 5,
        bonusNumberMatchCount: 1,
      };

      // when
      const matchResult = lotto.matchNumbers(mockLottoWinningNumbers);

      // then
      expect(matchResult).toEqual(mockMatchResult);
    });

    describe("lottoNumbers값에 대한 validation 테스트", () => {
      test.each([
        [
          "6자리 숫자가 들어오지 않으면 InvalidLottoNumberCountError를 throw", 
          [1, 2, 3, 4, 5, 6, 7], 
          InvalidLottoNumberCountError
        ],
        [
          "중복된 숫자가 존재하면 DuplicatedNumberError를 throw", 
          [1, 2, 3, 4, 5, 1], 
          DuplicatedNumberError
        ],
        [
          "숫자가 아닌 값이 존재하면 NotNumberError를 throw", 
          [1, 2, 3, 4, 5, "a"], 
          NotNumberError
        ],
        [
          "45보다 큰 값이 존재하면 InvalidNumberRangeError를 throw", 
          [1, 2, 3, 4, 5, 46], 
          InvalidNumberRangeError
        ],
        [
          "1보다 작은 값이 존재하면 InvalidNumberRangeError를 throw", 
          [1, 2, 3, 4, 5, -7], 
          InvalidNumberRangeError
        ],
        [
          "정수가 아닌 값이 존재하면 NotIntegerError를 throw", 
          [1, 2, 3, 4, 5, 6.5], 
          NotIntegerError
        ],
      ])("Lotto의 #numbers에 %s", (description, lottoNumbers, error) => {

        // when-then
        expect(() => new Lotto(lottoNumbers)).toThrow(error);
      });
    });
  });
});
