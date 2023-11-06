import { LottoReward } from '../../../src/domain/index.js';

import DUMMY_INPUTS from '../../constants/dummy.js';

describe('LottoReward 예외 테스트', () => {
  it.each([
    { input: { a: 1 } },
    { input: { match: 1, conus: true } },
    { input: { catch: 4, bonus: false } },
  ])(
    '인스턴스 생성 시 `rewardRequirement`에 `RewardRequirement`가 아닌 값이 입력될 시 에러가 발생한다.',
    ({ input }) => {
      // given & when
      const result = () => LottoReward.of(input, 1_000);

      // then
      expect(result).toThrow(LottoReward.ERROR_MESSAGES.invalidRequirement);
    },
  );

  it.each(DUMMY_INPUTS.withoutNumber)(
    '인스턴스 생성 시 `prize`에 숫자가 아닌 값이 입력될 시 에러가 발생한다.',
    ({ input }) => {
      // given & when
      const result = () => LottoReward.of({ match: 1, hasBonus: false }, input);

      // then
      expect(result).toThrow(LottoReward.ERROR_MESSAGES.invalidPrize);
    },
  );

  it.each([
    { input: { a: 1 } },
    { input: { match: 1, conus: true } },
    { input: { catch: 4, bonus: false } },
  ])(
    '`checkRequirement(requirement)` 호출 시 인자로 `RewardRequirement`가 아닌 값이 입력될 시 에러가 발생한다.',
    ({ input }) => {
      // given
      const reward = LottoReward.of({ match: 1, hasBonus: false }, 1_000);

      // when
      const result = () => reward.checkRequirement(input);

      // then
      expect(result).toThrow(LottoReward.ERROR_MESSAGES.invalidRequirement);
    },
  );
});
