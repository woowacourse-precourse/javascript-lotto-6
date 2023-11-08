import { ERROR } from '../src/constant/constant';
import Buyer from '../src/model/Buyer';

describe('Buyer 클래스 구입 금액 테스트.', () => {
  test('구매자 설정 - 성공', () => {
    expect(() => new Buyer(1000)).not.toThrow();
  });

  test('구매자 설정 - 실패', () => {
    expect(() => new Buyer(9999)).toThrow(ERROR.budget);
  });
});

describe('Buyer 클래스 구입 금액만큼 로또 구매 테스트.', () => {
  let buyer;
  const LOTTO_PRICE = 1000;
  const PURCHASE_COUNT = 3;

  beforeEach(() => {
    buyer = new Buyer(LOTTO_PRICE * PURCHASE_COUNT);
  });

  test('구입 금액을 반환한다.', () => {
    expect(buyer.getBudget()).toBe(LOTTO_PRICE * PURCHASE_COUNT);
  });

  test('구입 금액에 맞는 구매 횟수 반환한다.', () => {
    expect(buyer.getPurchaseCount()).toBe(PURCHASE_COUNT);
  });

  test('구입 횟수만큼의 로또를 발행한다.', () => {
    const lottoList = buyer.getLottoList();

    expect(lottoList.length).toBe(PURCHASE_COUNT);
  });
});
