import Lotto from "../src/Lotto.js";
import LottoNumber from "../src/LottoNumber.js";

describe("Lotto 테스트", () => {
  test("올바른 로또 번호 배열 입력", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);
    expect(lotto.getNumbers()).toEqual(numbers);
  });

  test("로또 번호가 6개가 아닌 경우", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5])).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("중복된 숫자가 포함된 경우", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 1])).toThrow("[ERROR] 중복된 숫자가 포함되어 있습니다.");
  });

  test("로또 번호가 숫자가 아닌 경우", () => {
    expect(() => new Lotto([1, 2, 3, "4", 5, 6])).toThrow("[ERROR] 숫자를 입력해 주세요.");
  });

  test("로또 번호가 1 이상 45 이하가 아닌 경우", () => {
    expect(() => new Lotto([1, 2, 3, 46, 5, 6])).toThrow("[ERROR] 숫자는 1 이상 45 이하여야 합니다.");
  });
});