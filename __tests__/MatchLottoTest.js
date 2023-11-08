import { matchLotto } from '../src/MatchLotto';

describe('로또 맞추기 테스트', () => {
  it('로또 숫자들과 보너스 번호 맟추는 기능 테스트', () => {
    const randomLottoArr = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]];
    const lotto = [1, 2, 3, 7, 8, 9];
    const bonus = 6;

    const result = matchLotto(randomLottoArr, lotto, bonus);

    // 첫 번째 로또 번호 배열에서는 3개의 번호와 일치하고, 보너스 번호는 일치하지 않습니다.
    // 두 번째 로또 번호 배열에서는 3개의 번호와 일치하고, 보너스 번호는 없습니다.
    expect(result).toEqual([{ lottoMatch: 3, bonusMatch: 0 }, { lottoMatch: 3, bonusMatch: 0 }]);
  });
});