import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    const lottoNumbers = [1, 2, 3, 4, 5, 6, 7];

    expect(() => {
      new Lotto(lottoNumbers);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    const lottoNumbers = [1, 2, 3, 4, 5, 5];

    expect(() => {
      new Lotto(lottoNumbers);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 번호에 중복된 숫자가 없고 6개일 경우 생성이 성공한다.", () => {
    const lottoNumbers = [1, 2, 3, 4, 5, 6];

    expect(() => {
      new Lotto(lottoNumbers);
    }).not.toThrow("[ERROR]");
  });

  test("calculateResult 메서드가 정확한 결과를 반환한다.", () => {
    const lottoNumbers = [1, 2, 3, 4, 5, 6];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const lotto = new Lotto(lottoNumbers);
    const result = lotto.calculateResult(winningNumbers, bonusNumber);

    expect(result).toEqual({
      matchingNumbers: 6,
      bonusMatch: false,
    });
  });

  test("calculateResult 메서드가 보너스 번호를 정확히 처리한다.", () => {
    const lottoNumbers = [1, 2, 3, 4, 5, 6];
    const winningNumbers = [1, 2, 3, 4, 5, 7];
    const bonusNumber = 5;

    const lotto = new Lotto(lottoNumbers);
    const result = lotto.calculateResult(winningNumbers, bonusNumber);

    expect(result).toEqual({
      matchingNumbers: 5,
      bonusMatch: true,
    });
  });
});
