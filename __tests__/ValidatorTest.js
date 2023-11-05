describe('Validator', () => {
  test('구입금액이 숫자인지 확인한다.', () => {
    const purchaseMoney = 'a';

    expect(() => {
      if (!/^\d+$/.test(purchaseMoney)) {
        throw new Error('[ERROR] 숫자를 입력해 주세요.');
      }
    }).toThrow();
  });

  test('구입금액이 1000원 단위인지 확인한다.', () => {
    const purchaseMoney = [0, 1500, 500, 1200];

    purchaseMoney.forEach(money => {
      expect(() => {
        if (Boolean(money % 1000) || money === 0) {
          throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
        }
      }).toThrow();
    });
  });
});
