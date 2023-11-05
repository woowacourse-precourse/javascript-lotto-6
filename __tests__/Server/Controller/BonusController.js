import BonusController from '../../../src/Server/Spring/Annotation/@Controller/BonusController.js';
import insertSqlWinningLotto from '../../../src/Server/Spring/Annotation/@Repository/insertSqlWinningLotto.js';
import selectSqlBonusLotto from '../../../src/Server/Spring/Annotation/@Repository/selectSqlBonusLotto.js';
import { ERROR_MESSAGE } from '../../../src/Util/Message.js';
import CONSTANTS from '../../../src/Util/Constants.js';

describe('BonusController 테스트', () => {
  let bonusController;
  const bonusLotto = 8;
  const errorBonusLotto = 6;
  const { lottoMin } = CONSTANTS;
  const { lottoMax } = CONSTANTS;

  beforeEach(() => {
    const winningLotto = [1, 2, 3, 4, 5, 6];
    insertSqlWinningLotto(winningLotto);
    bonusController = new BonusController();
  });

  describe('싱글톤 테스트', () => {
    test('BonusController객체는 하나의 인스턴스만 가져야 한다.', () => {
      const newBonusController = new BonusController();
      expect(bonusController).toBe(newBonusController);
    });
  });

  describe(`컨트롤러에서 반환되는 modelAndView 테스트`, () => {
    test('requestMapping을 실행 후 반환받은 modelAndView 객체의 view값은 LottoPos다.', () => {
      // when
      const modelAndView = bonusController.requestMapping(bonusLotto);

      // then
      expect(modelAndView.view).toBe('LottoPos');
    });

    test('requestMapping을 실행 후 반환받은 modelAndView 객체의 data값은 null이다.', () => {
      // when
      const modelAndView = bonusController.requestMapping(bonusLotto);
      // then
      expect(modelAndView.model.data).toBe(null);
    });
  });

  describe('정상적인 값 입력 테스트', () => {
    test('정상적인 값을 입력했을 때에는 DB에 bonusLotto가 저장되어야 한다.', () => {
      // when
      bonusController.requestMapping(bonusLotto);
      expect(selectSqlBonusLotto()).toBe(bonusLotto);
    });
  });

  describe('에러 테스트', () => {
    test('보너스 번호가 당첨 번호(winningLotto) 안에 있는 로또 번호일 시 에러발생', () => {
      expect(() => bonusController.requestMapping(errorBonusLotto)).toThrow(
        ERROR_MESSAGE.isDuplicate,
      );
    });

    test(`보너스 번호가 ${lottoMin} 미만이거나 ${lottoMax} 초과할 때 에러 발생`, () => {
      // given
      const testCases = [0, 46, -1];

      // then
      testCases.forEach((testcase) => {
        expect(() => bonusController.requestMapping(testcase)).toThrow(ERROR_MESSAGE.isNotInRange);
      });
    });

    test(`보너스 번호가 문자일 때 에러 발생`, () => {
      // given
      const testCases = ['a', '!', '홍', '?'];

      // then
      testCases.forEach((testcase) => {
        expect(() => bonusController.requestMapping(testcase)).toThrow(ERROR_MESSAGE.isChar);
      });
    });

    test(`보너스 번호가 공백`, () => {
      // given
      const testCases = [''];

      // then
      testCases.forEach((testcase) => {
        expect(() => bonusController.requestMapping(testcase)).toThrow(ERROR_MESSAGE.isBlank);
      });
    });
  });
});
