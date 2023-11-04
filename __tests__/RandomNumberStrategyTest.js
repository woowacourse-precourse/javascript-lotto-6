import { GAME_RULE } from '../src/constants/gameRule';
import RandomNumberStrategy from '../src/model/strategies/RandomNumberStrategy';

describe('💙 RandomNumberStrategy 클래스를 테스트합니다. ฅ^._.^ฅ', () => {
  const lottoNumberGenerator = new RandomNumberStrategy();

  test('[generateLottoNumber] 숫자 6개를 반환합니다.', () => {
    const lottoNumberLength = lottoNumberGenerator.generateLottoNumber().length;

    expect(lottoNumberLength).toBe(GAME_RULE.LOTTO_NUMBER_COUNT);
  });

  test('[generateLottoNumber] 반환한 숫자 6개는 모두 중복되지 않는다.', () => {
    const lottoNumbers = new Set(lottoNumberGenerator.generateLottoNumber())
      .size;

    expect(lottoNumbers).toBe(GAME_RULE.LOTTO_NUMBER_COUNT);
  });
});
