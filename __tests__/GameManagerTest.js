import GameManager from '../src/GameManager';

describe('테스트', () => {
  test('당첨번호를 입력받아 숫자로 변환해 배열로 저장한다', () => {
    expect(GameManager.splitWinNumber('1,2,3,4,5,6')).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  test('같은 숫자 개수를 랭크로 변경해준다', () => {
    expect(GameManager.changeToRank({ match: 6, bonus: false })).toEqual('one');
  });
});
