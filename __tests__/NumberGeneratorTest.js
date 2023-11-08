import LottoNumberGenerator from "../src/LottoNumberGenerator.js";

describe("숫자 생성 테스트", () => {
  test("숫자 6개를 뽑는다.", () => {
    const numberGenerator = new LottoNumberGenerator();

    expect(numberGenerator).toHaveLength(6);
  });

  test("1~45 사이의 중복되지 않는 숫자 6개를 뽑는다.", () => {
    const generatedNumbers = LottoNumberGenerator();
    console.log("생성된 숫자 배열:", generatedNumbers);
    const isUnique = (arr) => arr.length === new Set(arr).size;
    const hasNoDuplicates = isUnique(generatedNumbers);

    expect(hasNoDuplicates).toBe(true);
  });
});