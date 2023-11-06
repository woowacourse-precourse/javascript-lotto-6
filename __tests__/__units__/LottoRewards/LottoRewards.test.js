// eslint-disable-next-line object-curly-newline
import { Lotto, LottoNumber, LottoRewards, WinningLotto } from '../../../src/domain/index.js';

describe('LottoRewards 테스트', () => {
  /**
   * @type {LottoRewards}
   */
  let rewards;

  beforeEach(() => {
    // given
    const bonus = LottoNumber.valueOf(7);
    const lotto = Lotto.of([1, 2, 3, 4, 5, 6]);
    const winningLotto = WinningLotto.of(lotto, bonus);
    rewards = LottoRewards.of(winningLotto);
  });

  it('[1등 테스트] `getLottosResult(lottos)` 호출 시 입력받은 로또의 총 결과를 반환한다.', () => {
    // when
    const lottos = [Lotto.of([1, 2, 3, 4, 5, 6])];
    const results = Array.from(rewards.getLottosResult(lottos), (reward) => reward.getQuantity());

    // then
    expect(results).toEqual([1, 0, 0, 0, 0]);
  });

  it('[2등 테스트] `getLottosResult(lottos)` 호출 시 입력받은 로또의 총 결과를 반환한다.', () => {
    // when
    const lottos = [Lotto.of([1, 2, 3, 4, 5, 7])];
    const results = Array.from(rewards.getLottosResult(lottos), (reward) => reward.getQuantity());

    // then
    expect(results).toEqual([0, 1, 0, 0, 0]);
  });

  it('[3등 테스트] `getLottosResult(lottos)` 호출 시 입력받은 로또의 총 결과를 반환한다.', () => {
    // when
    const lottos = [Lotto.of([1, 2, 3, 4, 5, 8])];
    const results = Array.from(rewards.getLottosResult(lottos), (reward) => reward.getQuantity());

    // then
    expect(results).toEqual([0, 0, 1, 0, 0]);
  });

  it('[4등 테스트] `getLottosResult(lottos)` 호출 시 입력받은 로또의 총 결과를 반환한다.', () => {
    // when
    const lottos = [Lotto.of([1, 2, 3, 4, 8, 9])];
    const results = Array.from(rewards.getLottosResult(lottos), (reward) => reward.getQuantity());

    // then
    expect(results).toEqual([0, 0, 0, 1, 0]);
  });

  it('[5등 테스트] `getLottosResult(lottos)` 호출 시 입력받은 로또의 총 결과를 반환한다.', () => {
    // when
    const lottos = [Lotto.of([1, 2, 3, 8, 9, 10])];
    const results = Array.from(rewards.getLottosResult(lottos), (reward) => reward.getQuantity());

    // thenA
    expect(results).toEqual([0, 0, 0, 0, 1]);
  });

  it('[낙첨 테스트] `getLottosResult(lottos)` 호출 시 입력받은 로또의 총 결과를 반환한다.', () => {
    // when
    const lottos = [Lotto.of([1, 2, 7, 8, 9, 10])];
    const results = Array.from(rewards.getLottosResult(lottos), (reward) => reward.getQuantity());

    // then
    expect(results).toEqual([0, 0, 0, 0, 0]);
  });

  it.each([
    {
      numbers: [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6],
      ],
      result: [2, 0, 0, 0, 0],
    },
    {
      numbers: [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 6, 7],
        [1, 2, 3, 4, 6, 8],
      ],
      result: [2, 1, 1, 0, 0],
    },
    {
      numbers: [
        [11, 12, 13, 14, 15, 16],
        [11, 12, 13, 14, 15, 16],
      ],
      result: [0, 0, 0, 0, 0],
    },
  ])('`getLottosResult(lottos)`는 한번에 여러 결과를 반환한다.', ({ numbers, result }) => {
    // when
    const lottos = Array.from(numbers, Lotto.of);
    const results = Array.from(rewards.getLottosResult(lottos), (reward) => reward.getQuantity());

    // then
    expect(results).toEqual(result);
  });
});
