import { LottoReward } from '../../../src/domain/index.js';

describe('LottoReward 테스트', () => {
  it.each([
    { requirement: { match: 6, hasBonus: true } },
    { requirement: { match: 3, hasBonus: true } },
    { requirement: { match: 4, hasBonus: false } },
    { requirement: { match: 1, hasBonus: false } },
  ])('`getRequirement()` 호출 시 경품 조건을 반환한다.', ({ requirement }) => {
    // given
    const reward = LottoReward.of(requirement, 1_000);

    // when
    const result = reward.getRequirement();

    // then
    expect(result).toEqual(requirement);
  });

  it('`getRequirement()` 호출 시 경품 조건을 반환한다.', () => {
    // given
    const reward = LottoReward.of({ match: 6, hasBonus: true }, 1_000);

    // when
    const result = reward.getQuantity();

    // then
    expect(result).toBe(0);
  });

  it('`getTotalPrize()` 호출 시 경품 조건을 반환한다.', () => {
    // given
    const reward = LottoReward.of({ match: 6, hasBonus: true }, 1_000);

    // when
    const result = reward.getTotalPrize();

    // then
    expect(result).toBe(0);
  });

  it('`getQuantity()` 호출 시 경품 갯수을 반환한다.', () => {
    // given
    const reward = LottoReward.of({ match: 6, hasBonus: true }, 1_000);

    // when
    const result = reward.getQuantity();

    // then
    expect(result).toBe(0);
  });

  it.each([
    { requirement: { match: 6, hasBonus: true }, result: 1 },
    { requirement: { match: 3, hasBonus: true }, result: 1 },
  ])(
    '`checkRequirement(requirement)` 호출 시 `requirement`와 같을 시 갯수를 증가한다.',
    ({ requirement, result }) => {
      // given
      const prize = 1_000;
      const reward = LottoReward.of(requirement, 1_000);

      // when
      reward.checkRequirement(requirement);

      // then
      expect(reward.getQuantity()).toBe(result);
      expect(reward.getTotalPrize()).toBe(prize * result);
    },
  );

  it.each([
    {
      requirement: { match: 6, hasBonus: true },
      lottoResult: { match: 6, hasBonus: false },
      result: 0,
    },
    {
      requirement: { match: 3, hasBonus: true },
      lottoResult: { match: 6, hasBonus: true },
      result: 0,
    },
    {
      requirement: { match: 3, hasBonus: true },
      lottoResult: { match: 6, hasBonus: false },
      result: 0,
    },
  ])(
    '`checkRequirement(requirement)` 호출 시 `requirement`와 같을 시 갯수를 증가한다.',
    ({ requirement, lottoResult, result }) => {
      // given
      const prize = 1_000;
      const reward = LottoReward.of(requirement, prize);

      // when
      reward.checkRequirement(lottoResult);

      // then
      expect(reward.getQuantity()).toBe(result);
      expect(reward.getTotalPrize()).toBe(prize * result);
    },
  );
});
