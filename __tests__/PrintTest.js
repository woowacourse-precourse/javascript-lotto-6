import { MissionUtils } from '@woowacourse/mission-utils';
import OutputView from '../src/View/OutputView';
import { ERROR_MESSAGE } from '../src/Utils/constants';

const getLogSpy = () => {
  // ApplicationTest에서 제공하는 함수 - 제공된 코드를 변형하지 않고, 검증을 위해 그대로 사용
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('PrintTest', () => {
  describe('구입 목록 출력 테스트', () => {
    test('구입 금액에 따라 구입 개수와 로또 목록을 출력한다.', () => {
      const purchasedList = [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
      ];

      const expected = [
        '2개를 구매했습니다.',
        '[1, 2, 3, 4, 5, 6] ',
        '[7, 8, 9, 10, 11, 12] ',
      ];

      const spy = getLogSpy();
      OutputView.printPurchasedList({ purchasedList });
      expect(spy).toBeCalledWith(expected.join('\n'));
    });
  });

  describe('결과 출력 테스트', () => {
    test('당첨 통계와 수익률을 출력한다.', () => {
      const prizeResultMap = new Map([
        [6, 4],
        [5, 1],
      ]);
      const earningRate = 100;
      const expected = [
        '당첨 통계',
        `-----------`,
        `3개 일치 (5,000원) - 1개`,
        `4개 일치 (50,000원) - 0개`,
        `5개 일치 (1,500,000원) - 0개`,
        `5개 일치, 보너스 볼 일치 (30,000,000원) - 0개`,
        `6개 일치 (2,000,000,000원) - 0개`,
        `총 수익률은 100.0%입니다.`,
      ];
      const spy = getLogSpy();
      OutputView.printResult({ prizeResultMap, earningRate });
      expect(spy).toBeCalledWith(expected.join('\n'));
    });
  });

  describe('에러 메시지 출력 테스트', () => {
    test('구매 범위 에러 메시지를 출력한다.', () => {
      const message = ERROR_MESSAGE.INVALID_PURCHASE_RANGE;
      const spy = getLogSpy();
      OutputView.printError({ message });
      expect(spy).toBeCalledWith(message);
    });

    test('알 수 없는 에러가 발생했을 경우, 알 수 없는 에러 메시지를 출력한다.', () => {
      const message = ERROR_MESSAGE.UNKNOWN_ERROR;
      const spy = getLogSpy();
      OutputView.printError({ message });
      expect(spy).toBeCalledWith(message);
    });
  });
});
