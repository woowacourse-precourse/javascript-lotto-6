import selectSqlBonusLotto from '../../../src/Server/Spring/Annotation/@Repository/selectSqlBonusLotto.js';
import insertSqlBonusLotto from '../../../src/Server/Spring/Annotation/@Repository/insertSqlBonusLotto.js';

describe('selectSqlBonusLotto 테스트', () => {
  test('selectSqlBonusLotto를 실행하면 DB에 insert한 BonusLotto가 select되어야 한다.', () => {
    // given
    const bonusLotto = '5';

    // when
    insertSqlBonusLotto(bonusLotto);

    // then
    expect(selectSqlBonusLotto()).toBe(bonusLotto);
  });
});
