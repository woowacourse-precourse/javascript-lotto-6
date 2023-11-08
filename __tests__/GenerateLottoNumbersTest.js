import GenerateLottoNumbers from "../src/domain/GenerateLottoNumbers.js";

describe("GenerateLottoNumbers 테스트", () => {
  test("올바른 로또 번호를 생성하는지 확인", () => {
    const generator = new GenerateLottoNumbers();
    const lottos = generator.getLottos(1);
    const lottoNumbers = lottos[0].getNumbers();

    expect(lottoNumbers.length).toBe(6);
    expect(lottoNumbers.every(num => num >= 1 && num <= 45)).toBeTruthy();
    expect(new Set(lottoNumbers).size).toBe(6);
  });
});