const validPurchase = (amount) => {
  if (isNaN(amount)) return false;
  if (Number(amount) % 1000 !== 0) return false;

  return true;
};

describe('로또 클래스 테스트', () => {
  test('1000원 단위의 정상적인 입력값은 TRUE', () => {
    const amount = '1000';

    expect(validPurchase(amount)).toBe(true);
  });

  test('숫자가 아닌 입력값은 FALSE', () => {
    const amount = '1300원';

    expect(validPurchase(amount)).toBe(false);
  });

  test('1000원 단위가 아닌 입력값은 FALSE', () => {
    const amount = '23400';

    expect(validPurchase(amount)).toBe(false);
  });
});
