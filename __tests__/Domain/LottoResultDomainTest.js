import { MissionUtils } from '@woowacourse/mission-utils';
import CompareLottoController from '../../src/Server/Spring/Annotation/@Controller/CompareLottoController.js';
import insertSqlWinningLotto from '../../src/Server/Spring/Annotation/@Repository/insertSqlWinningLotto.js';
import User from '../../src/Server/Spring/VO/User.js';
import generateLottoNumber from '../../src/Server/Spring/Annotation/@Service/generateLottoNumber.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('LottoResultDomain 테스트', () => {
  let compareLottoController;
  let user;
  let modelAndView;
  beforeEach(() => {
    compareLottoController = new CompareLottoController();
    const winningLotto = [1, 2, 3, 4, 5, 6];
    insertSqlWinningLotto(winningLotto);
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    user = new User('8000', generateLottoNumber);
    modelAndView = compareLottoController.requestMapping(user);
  });

  describe('싱글톤 테스트', () => {
    test('WinningLottoController객체는 하나의 인스턴스만 가져야 한다.', () => {
      const newCompareLottoController = new CompareLottoController();
      expect(compareLottoController).toBe(newCompareLottoController);
    });
  });

  describe(`컨트롤러에서 반환되는 modelAndView 테스트`, () => {
    test('requestMapping을 실행 후 반환받은 modelAndView 객체의 view값은 LottoPos다.', () => {
      expect(modelAndView.view).toBe('LottoPos');
    });

    test('requestMapping을 실행 후 반환받은 modelAndView 객체의 data값은 compareResult프로퍼티를 가지고 있다.', () => {
      expect(modelAndView.model.data).toHaveProperty('compareResult');
    });

    test('requestMapping을 실행 후 반환받은 modelAndView 객체의 data값은 profit프로퍼티를 가지고 있다.', () => {
      expect(modelAndView.model.data).toHaveProperty('profit');
    });
  });

  describe(`응답 데이터 compareResult, profit 테스트`, () => {
    // given
    const winningLotto = [1, 2, 3, 4, 5, 6];
    insertSqlWinningLotto(winningLotto);
    test('compareResult는 몇 개 맞췄는지에 대한 데이터가 객체형태로 반환되어야 한다.', () => {
      const expectResult = { 3: 1 };
      // when
      const result = compareLottoController.requestMapping(user);

      // then
      expect(result.model.data.compareResult).toEqual(expectResult);
    });

    test('profit은 수익률이 반환되어야 한다.', () => {
      const expectResult = '62.5';
      // when
      const result = compareLottoController.requestMapping(user);

      // then
      expect(result.model.data.profit).toEqual(expectResult);
    });
  });
});
