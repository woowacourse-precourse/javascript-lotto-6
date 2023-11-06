import Lotto from '../src/Lotto';
import User from '../src/User';
import { MESSAGE } from '../src/constant';
import { changeArrayToStringMessage } from '../src/utils';
import { getLogSpy, mockQuestions } from '../testUtils';

describe('User 클래스 테스트', () => {
  test('로또 구매 금액 읽고  구매 금액을 숫자 타입으로 저장하기', () => {
    const questions = ['1000', ' 1000 ', '1000원', '$1000', '천원'];
    const expectedOutput = [1000, 1000, NaN, NaN, NaN];

    questions.forEach(async (v, i) => {
      mockQuestions([v]);

      const user = new User();
      await user.pay();

      expect(user.getReceipt().paymentAmount).toEqual(expectedOutput[i]);
    });
  });

  test('구매한 로또들을 저장하고 출력한다.', () => {
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

    const userLottos = user.getReceipt().lottos;

    //출력
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });

    //발행된 로또 저장
    userLottos.forEach((v, i) => {
      const isEqual =
        v.getLottoNumbers().join(',') === lottos[i].getLottoNumbers().join(',');
      expect(isEqual).toBeTruthy();
    });
  });
});
