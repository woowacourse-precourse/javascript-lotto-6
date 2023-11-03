import LottoView from "../src/LottoView.js";

describe("LottoView 테스트", () => {
  test("로또 번호 변환 테스트", () => {
    // given
    const lottos = [
      [8, 23, 41, 42, 43, 21],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const results = [
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]",
      "[1, 8, 11, 31, 41, 42]",
      "[13, 14, 16, 38, 42, 45]",
      "[7, 11, 30, 40, 42, 43]",
      "[2, 13, 22, 32, 38, 45]",
      "[1, 3, 5, 14, 22, 45]",
    ]

    // when
    const answers = lottos.map((lotto) => LottoView.toLottoNumbersFormat(lotto));

    // then
    expect(answers).toEqual(results);
  });
});
