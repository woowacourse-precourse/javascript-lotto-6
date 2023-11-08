import Lotto from "../src/Lotto";
import { PRIZE } from "../src/constants/lotto";
import LottoAnswer from "../src/domain/LottoAnswer";

const answerLotto = new Lotto([1, 2, 3, 4, 5, 6]);
const BONUS_NUMBER = "7";

describe("LottoAnswer 클래스 테스트", () => {
  describe("보너스 번호 값에 대한 유효성 검증을 올바르게 하는가", () => {
    test.each(["7", "15", "26"])(
      "조건에 부합하는 번호에 대해 예외가 발생하지 않는다. (%s)",
      (bonusNumber) => {
        expect(() => new LottoAnswer(answerLotto, bonusNumber)).not.toThrow();
      }
    );

    test.each(["1", "2", "3"])(
      "보너스 번호가 당첨 번호와 일치하는 경우 예외가 발생한다. (%s)",
      (bonusNumber) => {
        expect(() => new LottoAnswer(answerLotto, bonusNumber)).toThrow("[ERROR]");
      }
    );

    test.each(["0", "46", "-1"])(
      "보너스 번호가 로또 번호 범위 외의 값일 경우 예외가 발생한다. (%s)",
      (bonusNumber) => {
        expect(() => new LottoAnswer(answerLotto, bonusNumber)).toThrow("[ERROR]");
      }
    );

    test.each(["10,11", "12,21,23", "17,25"])(
      "보너스 번호가 한 개 이상의 값일 경우 예외가 발생한다. (%s)",
      (bonusNumber) => {
        expect(() => new LottoAnswer(answerLotto, bonusNumber)).toThrow("[ERROR]");
      }
    );

    test.each(["a", "ten", "nine"])(
      "보너스 번호가 숫자 외의 형태일 경우 예외가 발생한다. (%s)",
      (bonusNumber) => {
        expect(() => new LottoAnswer(answerLotto, bonusNumber)).toThrow("[ERROR]");
      }
    );
  });

  describe("당첨 번호 개수를 올바르게 계산하여 등수를 반환하는가", () => {
    test.each([
      [[1, 2, 3, 4, 10, 11], PRIZE.fourth],
      [[1, 2, 3, 4, 5, Number(BONUS_NUMBER)], PRIZE.second],
      [[1, 2, 3, 4, 5, 6], PRIZE.first],
    ])(
      "보너스 번호가 숫자 외의 형태일 경우 예외가 발생한다. (%expected)",
      (lottoNumbers, expected) => {
        expect(new LottoAnswer(answerLotto, BONUS_NUMBER).grade(new Lotto(lottoNumbers))).toEqual(
          expected
        );
      }
    );
  });
});
