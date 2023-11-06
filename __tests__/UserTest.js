import Lotto from '../src/Lotto';
import User from '../src/User';
import { MESSAGE } from '../src/constant';
import { changeArrayToStringMessage } from '../src/utils';
import { getLogSpy, mockQuestions } from '../testUtils';

describe('User 클래스 테스트', () => {
  test('사용자기 입력한 금액을 숫자 형태로 읽어옮', () => {
    const questions = ['1000', ' 1000 ', '1000원', '$1000', '천원'];
    const expectedOutput = [1000, 1000, NaN, NaN, NaN];

    questions.forEach(async (v, i) => {
      mockQuestions([v]);

      const user = new User();
      const money = await user.pay();

      expect(money).toEqual(expectedOutput[i]);
    });
  });

  test('구매한 로또들을 출력한다.', () => {
    const lottosNumbers = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ];
    const lottos = lottosNumbers.map((v) => new Lotto(v));

    const logs = [
      `${lottos.length}${MESSAGE.numberOfTickets}`,
      changeArrayToStringMessage(lottosNumbers[0]),
      changeArrayToStringMessage(lottosNumbers[1]),
    ];

    const logSpy = getLogSpy();

    const user = new User();
    user.getLottos(lottos);

    //출력
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
