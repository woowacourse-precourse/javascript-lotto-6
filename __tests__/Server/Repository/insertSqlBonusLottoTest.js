import insertSqlBonusLotto from '../../../src/Server/Spring/Annotation/@Repository/insertSqlBonusLotto.js';
import CONSTANTS from '../../../src/Util/Constants.js';
import database from '../../../src/Server/DB/database.js';

describe('insertSqlBonusLotto 테스트', () => {
  test('insertSqlBonusLotto를 실행하면 DB에 BonusLotto가 저장되어야 한다.', () => {
    // given
    const bonusLotto = '5';

    // when
    insertSqlBonusLotto(bonusLotto);

    // then
    expect(database.get(CONSTANTS.bonusLottoColumnName)).toBe(bonusLotto);
  });
});
