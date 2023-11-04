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

  it('`getPrize()` 호출 시 경품의 상금을 반환한다.', () => {
    // given
    const reward = LottoReward.of({ match: 6, hasBonus: true }, 1_000);

    // when
    const result = reward.getPrize();

    // then
    expect(result).toBe(1_000);
  });

  it('`getTotalPrize()` 호출 시 갯수와 비례한 총 상금을 반환한다.', () => {
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
    { requirement: { match: 6, hasBonus: false } },
    { requirement: { match: 3, hasBonus: false } },
  ])(
    '`checkRequirement(requirement)` 호출 시 보너스가 필요없고 `requirement`와 같을 시 갯수를 증가하고 true를 반환한다.',
    ({ requirement }) => {
      // given
      const prize = 1_000;
      const reward = LottoReward.of(requirement, 1_000);

      // when
      const result = reward.checkRequirement(requirement);

      // then
      expect(reward.getQuantity()).toBe(1);
      expect(reward.getTotalPrize()).toBe(prize * 1);
      expect(result).toBeTruthy();
    },
  );

  it.each([
    { requirement: { match: 6, hasBonus: true } },
    { requirement: { match: 3, hasBonus: true } },
  ])(
    '`checkRequirement(requirement)` 호출 시 보너스가 필요하고 `requirement`와 같을 시 갯수를 증가하고 true를 반환한다.',
    ({ requirement }) => {
      // given
      const prize = 1_000;
      const reward = LottoReward.of(requirement, 1_000);

      // when
      const result = reward.checkRequirement(requirement);

      // then
      expect(reward.getQuantity()).toBe(1);
      expect(reward.getTotalPrize()).toBe(prize * 1);
      expect(result).toBeTruthy();
    },
  );

  it.each([
    { requirement: { match: 6, hasBonus: true } },
    { requirement: { match: 3, hasBonus: true } },
  ])(
    '`checkRequirement(requirement)` 호출 시 보너스가 필요하고 `requirement.hasBonus`가 false일시 false를 반환한다.',
    ({ requirement }) => {
      // given
      const reward = LottoReward.of(requirement, 1_000);

      // when
      const result = reward.checkRequirement({ match: 6, hasBonus: false });

      // then
      expect(reward.getQuantity()).toBe(0);
      expect(reward.getTotalPrize()).toBe(0);
      expect(result).toBeFalsy();
    },
  );

  it.each([
    { requirement: { match: 6, hasBonus: false } },
    { requirement: { match: 3, hasBonus: false } },
  ])(
    '`checkRequirement(requirement)` 호출 시 보너스가 필요없고 `requirement.match`가 다르면 false를 반환한다.',
    ({ requirement }) => {
      // given
      const reward = LottoReward.of(requirement, 1_000);

      // when
      const result = reward.checkRequirement({ match: 2, hasBonus: false });

      // then
      expect(reward.getQuantity()).toBe(0);
      expect(reward.getTotalPrize()).toBe(0);
      expect(result).toBeFalsy();
    },
  );
});
