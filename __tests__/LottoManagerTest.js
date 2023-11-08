import LottoManager from '../src/LottoManager';

describe('LottoManager 테스트', () => {
  const lottoManager = new LottoManager();

  test('generateLottoNumber 확인, 중복 없는 6개의 숫자 반환', () => {
    const generatedLottoNumbers = lottoManager.generateLottoNumber();
    const isUnique = (arr) => arr.length === new Set(arr).size;

    expect(generatedLottoNumbers.length).toBe(6);
    expect(isUnique(generatedLottoNumbers)).toBe(true);
    expect(generatedLottoNumbers.every((num) => num >= 1 && num <= 45)).toBe(true);
  });
});
