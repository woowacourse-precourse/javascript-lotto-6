import selectSqlWinningLotto from '../../../src/Server/Spring/Annotation/@Repository/selectSqlWinningLotto.js';
import insertSqlWinningLotto from '../../../src/Server/Spring/Annotation/@Repository/insertSqlWinningLotto.js';

describe('selectSqlWinningLotto 테스트', () => {
  test('selectSqlWinningLotto를 실행하면 DB에 insert한 winningLotto가 select되어야 한다.', () => {
    // given
    const winningLotto = [1, 2, 3, 4, 5, 6];

    // when
    insertSqlWinningLotto(winningLotto);

    // then
    expect(selectSqlWinningLotto()).toEqual(winningLotto);
  });
});
