import matchingNumbers from '../src/matchingNumbers';
import LOTTO_RESULTS from '../src/LOTTO_RESULTS';

describe('매칭 갯수 테스트', () => {
  let lottoResultsCopy;

  beforeEach(() => {
    lottoResultsCopy = { ...LOTTO_RESULTS };
  });

  it('1등일 경우', () => {
    const matchnumber = 6;
    const bonusNumber = true;
    const result = matchingNumbers(matchnumber, bonusNumber, lottoResultsCopy);
    expect(result).toEqual({
      '3개 일치 (5,000원)': 0,
      '4개 일치 (50,000원)': 0,
      '5개 일치 (1,500,000원)': 0,
      '5개 일치, 보너스 볼 일치 (30,000,000원)': 0,
      '6개 일치 (2,000,000,000원)': 1,
    });
  });
  it('2등일 경우', () => {
    const matchnumber = 5;
    const bonusNumber = true;
    const result = matchingNumbers(matchnumber, bonusNumber, lottoResultsCopy);
    expect(result).toEqual({
      '3개 일치 (5,000원)': 0,
      '4개 일치 (50,000원)': 0,
      '5개 일치 (1,500,000원)': 0,
      '5개 일치, 보너스 볼 일치 (30,000,000원)': 1,
      '6개 일치 (2,000,000,000원)': 0,
    });
  });
  it('3등일 경우', () => {
    const matchnumber = 5;
    const bonusNumber = false;
    const result = matchingNumbers(matchnumber, bonusNumber, lottoResultsCopy);
    expect(result).toEqual({
      '3개 일치 (5,000원)': 0,
      '4개 일치 (50,000원)': 0,
      '5개 일치 (1,500,000원)': 1,
      '5개 일치, 보너스 볼 일치 (30,000,000원)': 0,
      '6개 일치 (2,000,000,000원)': 0,
    });
  });
  it('4등일 경우', () => {
    const matchnumber = 4;
    const bonusNumber = true;
    const result = matchingNumbers(matchnumber, bonusNumber, lottoResultsCopy);
    expect(result).toEqual({
      '3개 일치 (5,000원)': 0,
      '4개 일치 (50,000원)': 1,
      '5개 일치 (1,500,000원)': 0,
      '5개 일치, 보너스 볼 일치 (30,000,000원)': 0,
      '6개 일치 (2,000,000,000원)': 0,
    });
  });
  it('5등일 경우', () => {
    const matchnumber = 3;
    const bonusNumber = true;
    const result = matchingNumbers(matchnumber, bonusNumber, lottoResultsCopy);
    expect(result).toEqual({
      '3개 일치 (5,000원)': 1,
      '4개 일치 (50,000원)': 0,
      '5개 일치 (1,500,000원)': 0,
      '5개 일치, 보너스 볼 일치 (30,000,000원)': 0,
      '6개 일치 (2,000,000,000원)': 0,
    });
  });
});
