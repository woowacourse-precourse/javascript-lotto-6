import insertSqlWinningLotto from '../../../src/Server/Spring/Annotation/@Repository/insertSqlWinningLotto.js';
import database from '../../../src/Server/DB/database.js';
import CONSTANTS from '../../../src/Util/Constants.js';

describe('insertSqlWinningLotto 테스트', () => {
  test('insertSqlWinningLotto를 실행하면 DB에 winningLotto가 저장되어야 한다.', () => {
    // given
    const winningLotto = [1, 2, 3, 4, 5, 6];

    // when
    insertSqlWinningLotto(winningLotto);

    // then
    expect(database.get(CONSTANTS.winningLottoColumnName)).toEqual(winningLotto);
  });
});
