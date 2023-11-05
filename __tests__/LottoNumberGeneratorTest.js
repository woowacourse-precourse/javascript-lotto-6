import LottoNumberGenerator from "../src/LottoNumberGenerator.js";

describe("로또 번호 생성 클래스 테스트", () => {
  test("생성되는 로또 번호는 유니크한 1~45 범위의 6개 숫자로 구성된다.", () => {
    const lottoNumbers = LottoNumberGenerator.generate();

    for (const number of lottoNumbers) {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
    }

    expect(lottoNumbers).toHaveLength(6);

    const uniqueLottoNumbers = new Set(lottoNumbers);
    expect(uniqueLottoNumbers.size).toBe(6);
  });
});
