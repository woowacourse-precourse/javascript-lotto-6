import LottoData from '../src/models/LottoData.js';

describe('로또 구입 금액 테스트', () => {
  test('로또 구입 금액이 문자이면 예외가 발생한다.', () => {
    expect(() => {
      new LottoData('a');
    }).toThrow('[ERROR]');
  });

  test('로또 구입 금액이 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new LottoData('1.2');
    }).toThrow('[ERROR]');
  });

  test('로또 구입 금액이 0원이면 예외가 발생한다.', () => {
    expect(() => {
      new LottoData('0');
    }).toThrow('[ERROR]');
  });

  test('로또 구입 금액이 1,000원 단위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new LottoData('3001');
    }).toThrow('[ERROR]');
  });
});

describe('로또 구입 테스트', () => {
  let lottoData;

  beforeEach(() => {
    lottoData = new LottoData(8000);
  });

  test('로또 구입 개수 정하고 구입 개수만큼 로또 발행하기', () => {
    const result = lottoData.lottoIssuance();
    expect(result.count).toBe(8);
    expect(result.lottos).toHaveLength(8);
  });
});
