import rateOfReturn from '../src/rateOfReturn.js';

describe('수익률 로직 테스트', () => {
  it('1등 당첨일 경우', () => {
    const price = 1000;
    const result = {
      '3개 일치 (5,000원)': 0,
      '4개 일치 (50,000원)': 0,
      '5개 일치 (1,500,000원)': 0,
      '5개 일치, 보너스 볼 일치 (30,000,000원)': 0,
      '6개 일치 (2,000,000,000원)': 1,
    };
    const expectedRate = '200000000.0';

    const rate = rateOfReturn(price, result);

    expect(rate).toBe(expectedRate);
  });
  it('2등 당첨일 경우', () => {
    const price = 1000;
    const result = {
      '3개 일치 (5,000원)': 0,
      '4개 일치 (50,000원)': 0,
      '5개 일치 (1,500,000원)': 0,
      '5개 일치, 보너스 볼 일치 (30,000,000원)': 1,
      '6개 일치 (2,000,000,000원)': 0,
    };
    const expectedRate = '3000000.0';

    const rate = rateOfReturn(price, result);

    expect(rate).toBe(expectedRate);
  });
  it('3등 당첨일 경우', () => {
    const price = 1000;
    const result = {
      '3개 일치 (5,000원)': 0,
      '4개 일치 (50,000원)': 0,
      '5개 일치 (1,500,000원)': 1,
      '5개 일치, 보너스 볼 일치 (30,000,000원)': 0,
      '6개 일치 (2,000,000,000원)': 0,
    };
    const expectedRate = '150000.0';

    const rate = rateOfReturn(price, result);

    expect(rate).toBe(expectedRate);
  });
  it('4등 당첨일 경우', () => {
    const price = 1000;
    const result = {
      '3개 일치 (5,000원)': 0,
      '4개 일치 (50,000원)': 1,
      '5개 일치 (1,500,000원)': 0,
      '5개 일치, 보너스 볼 일치 (30,000,000원)': 0,
      '6개 일치 (2,000,000,000원)': 0,
    };
    const expectedRate = '5000.0';

    const rate = rateOfReturn(price, result);

    expect(rate).toBe(expectedRate);
  });
  it('5등 당첨일 경우', () => {
    const price = 1000;
    const result = {
      '3개 일치 (5,000원)': 1,
      '4개 일치 (50,000원)': 0,
      '5개 일치 (1,500,000원)': 0,
      '5개 일치, 보너스 볼 일치 (30,000,000원)': 0,
      '6개 일치 (2,000,000,000원)': 0,
    };
    const expectedRate = '500.0';

    const rate = rateOfReturn(price, result);

    expect(rate).toBe(expectedRate);
  });
});
