import LottoGame from '../../src/model/LottoGame.js';
import { LOTTO_ERROR_MESSAGE } from '../../src/constants/LottoMessage.js';

describe('로또 게임 클래스 테스트', () => {
  // given
  test.each([
    {
      seedMoney: 'a',
      expectErrorMessage: LOTTO_ERROR_MESSAGE.notAValidCharacter,
    },
    {
      seedMoney: '1010',
      expectErrorMessage: LOTTO_ERROR_MESSAGE.notAValidSeedMoney,
    },
    {
      seedMoney: '-1000',
      expectErrorMessage: LOTTO_ERROR_MESSAGE.notAValidInteger,
    },
  ])('로또 게임 유효성 검사 테스트', ({ seedMoney, expectErrorMessage }) => {
    // when & then
    expect(() => new LottoGame(seedMoney)).toThrow(expectErrorMessage);
  });

  test.each([
    { seedMoney: '3000', expectLottoAmount: 3 },
    { seedMoney: '4000', expectLottoAmount: 4 },
  ])('로또 정상 생성 테스트', ({ seedMoney, expectLottoAmount }) => {
    const lottoGame = new LottoGame(seedMoney);
    const { lottoAmount } = lottoGame.getLottoes();

    expect(lottoAmount).toBe(expectLottoAmount);
  });
});
