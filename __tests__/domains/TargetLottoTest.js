import TargetLotto from "../../src/domains/TargetLotto.js";

describe("당첨 로또 클래스 테스트", () => {
  let targetLotto;
  let userLotto;

  const targetNumber = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;

  beforeEach(() => {
    targetLotto = new TargetLotto(targetNumber, bonusNumber);
  });

  function mockUserLotto(numbers) {
    return {
      getNumbers: () => numbers,
    };
  }

  test("당첨 로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    // given
    const longLottoNumber = [1, 2, 3, 4, 5, 6, 7];
    const bonusNumber = 7;

    // when & then
    expect(() => {
      new TargetLotto(longLottoNumber, bonusNumber);
    }).toThrow("[ERROR] 당첨 로또 번호는 6개여야 합니다.");
  });

  test("당첨 로또 번호에 중복이 있다면 예외가 발생한다.", () => {
    // given
    const duplicateNumber = [1, 2, 3, 4, 6, 6];
    const bonusNumber = 7;

    // when & then
    expect(() => {
      new TargetLotto(duplicateNumber, bonusNumber);
    }).toThrow("[ERROR] 당첨 로또 번호는 중복되지 않아야 합니다.");
  });

  test("당첨 로또 정보의 각 숫자가 정수가 아니라면 예외가 발생한다.", () => {
    // given
    const wrongLottoNumber = ["a", "b", "c", "d", "e", "f"];

    // when & then
    expect(() => new TargetLotto(wrongLottoNumber)).toThrow(
      "[ERROR] 당첨 로또는 정수로 구성되어야 합니다"
    );
  });

  test("당첨 로또 정보의 각 숫자가 1~45 사이의 정수가 아니라면 예외가 발생한다.", () => {
    // given
    const wrongLottoNumber = [1, 2, 3, 4, 5, 46];

    // when & then
    expect(() => new TargetLotto(wrongLottoNumber)).toThrow(
      "[ERROR] 당첨 로또는 1~45 사이의 숫자로 구성되어야 합니다."
    );
  });

  test("보너스 번호가 당첨 번호에 중복되면 예외가 발생한다.", () => {
    // given
    const lottoNumber = [1, 2, 3, 4, 5, 6];
    const duplicateBonusNumber = 1;

    // when & then
    expect(() => {
      new TargetLotto(lottoNumber, duplicateBonusNumber);
    }).toThrow("[ERROR] 보너스 번호는 당첨 번호에 포함될 수 없습니다.");
  });

  test("로또의 결과", () => {
    // given
    const lottoNumber = [1, 2, 3, 4, 5, 6];
    const duplicateBonusNumber = 1;

    // when & then
    expect(() => {
      new TargetLotto(lottoNumber, duplicateBonusNumber);
    }).toThrow("[ERROR] 보너스 번호는 당첨 번호에 포함될 수 없습니다.");
  });

  test("사용자가 6개 번호를 모두 맞췄을 때 1등으로 처리해야 한다.", () => {
    //when
    userLotto = mockUserLotto([1, 2, 3, 4, 5, 6]);

    //then
    expect(targetLotto.calLottoResult(userLotto)).toBe(1);
  });

  test("사용자가 5개 번호와 보너스 번호를 맞췄을 때 2등으로 처리해야 한다.", () => {
    //when
    userLotto = mockUserLotto([1, 2, 3, 4, 5, 7]);

    //then
    expect(targetLotto.calLottoResult(userLotto)).toBe(2);
  });

  test("사용자가 5개 번호만 맞췄을 때 3등으로 처리해야 한다.", () => {
    //when
    userLotto = mockUserLotto([1, 2, 3, 4, 5, 8]);

    //then
    expect(targetLotto.calLottoResult(userLotto)).toBe(3);
  });

  test("사용자가 4개 번호만 맞췄을 때 4등으로 처리해야 한다.", () => {
    //when
    userLotto = mockUserLotto([1, 2, 3, 4, 8, 9]);

    //then
    expect(targetLotto.calLottoResult(userLotto)).toBe(4);
  });

  test("사용자가 3개 번호만 맞췄을 때 5등으로 처리해야 한다.", () => {
    //when
    userLotto = mockUserLotto([1, 2, 3, 7, 8, 9]);

    //then
    expect(targetLotto.calLottoResult(userLotto)).toBe(5);
  });

  test("사용자가 2개 이하의 번호만 맞췄다면 .", () => {
    //when
    userLotto = mockUserLotto([1, 2, 7, 8, 9, 10]);

    //then
    expect(targetLotto.calLottoResult(userLotto)).toBe(0);
  });
});
