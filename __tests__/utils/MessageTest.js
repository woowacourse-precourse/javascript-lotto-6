import { Console } from '@woowacourse/mission-utils';
import Message from '../../src/utils/Message';

const getConsoleSpy = () => jest.spyOn(Console, 'print');

describe('Message 클래스 테스트', () => {
  describe('error 메서드 테스트', () => {
    test('에러 객체를 받아 콘솔에 에러 메시지를 출력해야한다.', () => {
      // given
      const error = new Error('error');
      const consoleSpy = getConsoleSpy();

      // when
      Message.error(error);

      // then
      expect(consoleSpy).toHaveBeenCalledWith('error');
    });
  });

  describe('youBought 메서드 테스트', () => {
    test('구매한 로또의 개수를 콘솔에 출력해야 한다.', () => {
      // given
      const lottoCount = 5;
      const expectedMessage = '\n5개를 구매했습니다.';
      const consoleSpy = getConsoleSpy();

      // when
      Message.youBought(lottoCount);

      // then
      expect(consoleSpy).toHaveBeenCalledWith(expectedMessage);
    });
  });

  describe('array 메서드 테스트', () => {
    test('Format.array을 사용하여 배열을 문자열로 출력하여야 한다.', () => {
      // given
      const consoleSpy = getConsoleSpy();
      const arr = [1, 2, 3];
      const expectedMessage = '[1, 2, 3]';

      // when
      Message.array(arr);

      // then
      expect(consoleSpy).toHaveBeenCalledWith(expectedMessage);
    });
  });

  describe('showStatistics 메서드 테스트', () => {
    test('should print the lotto statistics and profit rate to the console', () => {
      // given
      const consoleSpy = getConsoleSpy();
      const rankCount = [0, 1, 2, 3, 4];
      const profitRate = 150;
      const expectedMessage = [
        '\n당첨 통계\n---------',
        '3개 일치 (5,000원) - 0개',
        '4개 일치 (50,000원) - 1개',
        '5개 일치 (1,500,000원) - 2개',
        '5개 일치, 보너스 볼 일치 (30,000,000원) - 3개',
        '6개 일치 (2,000,000,000원) - 4개',
        '총 수익률은 150.0%입니다.',
      ];

      // when
      Message.showStatistics(rankCount, profitRate);

      // then
      expectedMessage.forEach((message) => {
        expect(consoleSpy).toHaveBeenCalledWith(message);
      });
    });
  });
});
