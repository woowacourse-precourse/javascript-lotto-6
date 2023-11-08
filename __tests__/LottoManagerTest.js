import LottoManager from '../src/LottoManager';
import { MONEY_CONSTANTS } from '../src/constants/constants';

describe('LottoManager 테스트', () => {
  const lottoManager = new LottoManager();

  test('generateLottoNumber 확인, 중복 없는 6개의 숫자 반환', () => {
    const generatedLottoNumbers = lottoManager.generateLottoNumber();
    const isUnique = (arr) => arr.length === new Set(arr).size;

    expect(generatedLottoNumbers.length).toBe(6);
    expect(isUnique(generatedLottoNumbers)).toBe(true);
    expect(generatedLottoNumbers.every((num) => num >= 1 && num <= 45)).toBe(true);
  });

  test('generateLottoTickets 확인, 금액과 카운트 계산', () => {
    const money = 3000;
    lottoManager.generateLottoTickets(money);

    expect(lottoManager.getMoney()).toBe(money);
    expect(lottoManager.getCount()).toBe(parseInt(money / MONEY_CONSTANTS.countUnit));
  });

  test('getMoney 확인, 같은 금액 반환', () => {
    const money1 = 3000;
    lottoManager.generateLottoTickets(money1);

    const money2 = lottoManager.getMoney();
    expect(money2).toBe(money1);
  });
});
