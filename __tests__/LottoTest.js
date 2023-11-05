import Lotto from "../src/Lotto";

// eslint-disable-next-line
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
  const TEST_CASES = [
    [[8, 10, 11, 17, 32, 35], 14, 1],
    [[8, 10, 11, 17, 32, 33], 35, 2],
    [[8, 10, 11, 17, 32, 36], 33, 3],
    [[9, 10, 11, 17, 32, 44], 35, 4],
    [[9, 10, 11, 19, 32, 45], 35, 5],
    [[1, 4, 6, 18, 33, 41], 11, 8],
  ];

  test.each(TEST_CASES)(
    "등수 반환 테스트",
    (winNumbers, bonusNumber, expectResult) => {
      const LOTTO = new Lotto([8, 10, 11, 17, 32, 35]);
      const WIN_RESULT = LOTTO.getLottoResult({
        winNumbers,
        bonusNumber,
      });
      expect(WIN_RESULT).toEqual(expectResult);
    }
  );
});
