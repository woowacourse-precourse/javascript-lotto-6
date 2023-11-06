import insertSqlWinningLotto from '../../../src/Server/Spring/Annotation/@Repository/insertSqlWinningLotto.js';
import selectSqlWinningLotto from '../../../src/Server/Spring/Annotation/@Repository/selectSqlWinningLotto.js';

describe('insertSqlWinningLotto 테스트', () => {
  test('insertSqlWinningLotto를 실행하면 DB에 winningLotto가 저장되어야 한다.', () => {
    // given
    const winningLotto = [1, 2, 3, 4, 5, 6];

    // when
    insertSqlWinningLotto(winningLotto);

    // then
    expect(selectSqlWinningLotto()).toEqual(winningLotto);
  });
});
