/* eslint-disable prettier/prettier */
import WinningLottoController from '../../src/Server/Spring/Annotation/@Controller/WinningLottoController.js';
import selectSqlWinningLotto from '../../src/Server/Spring/Annotation/@Repository/selectSqlWinningLotto.js';
import CONSTANTS from '../../src/Util/Constants.js';
import { ERROR_MESSAGE } from '../../src/Util/Message.js';

describe('WinningLottoController 테스트', () => {
  let winningLottoController;
  const passedWinningNumber = '1,2,3,4,5,6';

  beforeEach(() => {
    winningLottoController = new WinningLottoController();
  });

  describe('싱글톤 테스트', () => {
    test('WinningLottoController객체는 하나의 인스턴스만 가져야 한다.', () => {
      const newWinningLottoController = new WinningLottoController();
      expect(winningLottoController).toBe(newWinningLottoController);
    });
  });

  describe(`컨트롤러에서 반환되는 modelAndView 테스트`, () => {
    test('requestMapping을 실행 후 반환받은 modelAndView 객체의 view값은 LottoPos다.', () => {
      // when
      const modelAndView = winningLottoController.requestMapping(passedWinningNumber);

      // then
      expect(modelAndView.view).toBe('LottoPos');
    });

    test('requestMapping을 실행 후 반환받은 modelAndView 객체의 data값은 null이다.', () => {
      // when
      const modelAndView = winningLottoController.requestMapping(passedWinningNumber);
      // then
      expect(modelAndView.model.data).toBe(null);
    });
  });

  describe('정상적인 값 입력 테스트', () => {
    test('정상적인 값을 입력했을 때에는 DB에 winningNumber가 저장되어야 한다.', () => {
      // when
      winningLottoController.requestMapping(passedWinningNumber);
      const expectResult = [1, 2, 3, 4, 5, 6];

      // then
      expect(selectSqlWinningLotto()).toEqual(expectResult);
    });
  });

  describe('에러값 입력 테스트', () => {
    test(`로또 당첨 번호 범위가 ${CONSTANTS.lottoMin} 미만 이거나 ${CONSTANTS.lottoMax} 초과 일때 에러가 발생해야한다.`, () => {
      // given
      const notInRangeTestCase = [
        '0, 1, 2, 3, 4, 5',
        '1, 2, 3, 4, 5, 46',
        '-1, 1, 2, 3, 4, 5',
      ];

      // then
      notInRangeTestCase.forEach((testcase) => {
        expect(() => winningLottoController.requestMapping(testcase)).toThrow(
          ERROR_MESSAGE.isNotInRange,
        );
      });
    });

    test(`로또 당첨 번호에 문자가 있을 경우 에러가 발생해야 한다.`, () => {
      // given
      const notInRangeTestCase = [
        'a, 1, 2, 3, 4, 5',
        '홍, 2, 3, 4, 5, 46',
        '?, 1, 2, 3, 4, 5',
      ];

      // then
      notInRangeTestCase.forEach((testcase) => {
        expect(() => winningLottoController.requestMapping(testcase)).toThrow(
          ERROR_MESSAGE.isChar,
        );
      });
    });

    test(`로또 당첨 번호가 ${CONSTANTS.lottoCount}가 아닌 경우 에러가 발생해야 한다.`, () => {
      // given
      const notInRangeTestCase = [
        '1, 2, 3, 4, 5',
        '1, 2, 3, 4, 5, 6, 7',
        '1, 2, 3',
        ''
      ];

      // then
      notInRangeTestCase.forEach((testcase) => {
        expect(() => winningLottoController.requestMapping(testcase)).toThrow(
          ERROR_MESSAGE.isNotLength,
        );
      });
    });

    test(`로또 당첨 번호가 중복될 경우 에러가 발생해야 한다.`, () => {
      // given
      const notInRangeTestCase = [
        '1, 2, 3, 4, 5, 5',
        '1, 2, 3, 4, 5, 4',
        '1, 2, 3, 3, 3, 3',
      ];

      // then
      notInRangeTestCase.forEach((testcase) => {
        expect(() => winningLottoController.requestMapping(testcase)).toThrow(
          ERROR_MESSAGE.isDuplicate,
        );
      });
    });
  });
});
