import Lotto from '../src/Model/Lotto';

const goalLotto = new Lotto([1, 2, 3, 4, 5, 6]);
const bonusNumber = 7;

describe('당첨 결과 테스트', () => {
  test('맞는 번호 개수 및 보너스 번호가 포함됐는지 확인', () => {
    const lottoArray = [new Lotto([1, 2, 3, 4, 5, 6]), new Lotto([1, 2, 3, 4, 7, 8]), new Lotto([1, 2, 3, 4, 5, 8])];

    const correctArray = goalLotto.calculateCorrectNumber(lottoArray, bonusNumber);
    expect(correctArray).toEqual([
      [6, false], // 6개 맞고 보너스 번호 포함 안됨
      [5, true], // 5개 맞고 보너스 번호 포함 됨
      [5, false], // 5개 맞고 보너스 번호 포함 안됨
    ]);
  });
});
