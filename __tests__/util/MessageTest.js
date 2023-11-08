import { MESSAGE_MAKE_FN, MESSAGE_MATCHING } from '../../src/constants/message.js';

describe('메시지를 생성하는 메서드가 정상적으로 메시지를 생성하는지 확인합니다.', () => {
  test('당첨 통계를 정상적으로 생성하는지 확인합니다.', () => {
    // given
    const cases = [
      { number: 2, message: '3개 일치 (5,000원) - 2개' },
      { number: 1, message: '4개 일치 (50,000원) - 1개' },
      { number: 4, message: '5개 일치 (1,500,000원) - 4개' },
      { number: 5, message: '5개 일치, 보너스 볼 일치 (30,000,000원) - 5개' },
      { number: 0, message: '6개 일치 (2,000,000,000원) - 0개' },
    ];

    const { three, four, five, fiveAndBonus, six } = MESSAGE_MATCHING;

    const testFn = [three, four, five, fiveAndBonus, six];

    cases.forEach(({ number, message }, index) => {
      // when
      const result = testFn[index](number);

      // then
      expect(result).toMatch(message);
    });
  });

  test('총 구매 복권 개수 메시를 정확히 생성하는지 확인합니다.', () => {
    // given
    const number = 8;
    const message = '8개를 구매했습니다.';

    // when
    const result = MESSAGE_MAKE_FN.makeNumberOfLottoMessageFn(number);

    // then
    expect(result).toMatch(message);
  });

  // given
  const rateCases = [
    { rate: 80.346, message: '총 수익률은 80.3%입니다.' },
    { rate: 10.566, message: '총 수익률은 10.6%입니다.' },
    { rate: 15, message: '총 수익률은 15.0%입니다.' },
    { rate: 5, message: '총 수익률은 5.0%입니다.' },
    { rate: 1000, message: '총 수익률은 1,000.0%입니다.' },
    { rate: 1000000, message: '총 수익률은 1,000,000.0%입니다.' },
  ];
  test.each(rateCases)('수익률 메시지를 정확히 생성하는지 확인합니다.', ({ rate, message }) => {
    // when
    const result = MESSAGE_MAKE_FN.makeRateOfReturnMessageFn(rate);

    // then
    expect(result).toMatch(message);
  });
});
