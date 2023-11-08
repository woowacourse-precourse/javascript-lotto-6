import LottoList from '../src/LottoList.js';
import Lotto from '../src/Lotto.js';

describe('LottoList 클래스 테스트', () => {
  it('로또의 개수가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new LottoList(1.5);
    }).toThrow('[ERROR]');
  });

  it('로또의 개수가 음수면 예외가 발생한다.', () => {
    expect(() => {
      new LottoList(-1);
    }).toThrow('[ERROR]');
  });

  it('로또의 개수만큼 Lotto 인스턴스를 생성한다.', () => {
    const lottoList = new LottoList(3);
    const allLottoNumbers = lottoList.allLottoNumbers;

    expect(allLottoNumbers.length).toBe(3);
    allLottoNumbers.forEach((numbers) => {
      expect(numbers.length).toBe(6);
    });
  });
});
