import LottoTicketGenerator from '../src/DongHangLottery/LottoTicketGenerator';
import LottoPlayer from '../src/DongHangLottery/LottoPlayer.js';
import Lotto from '../src/DongHangLottery/Lotto.js';

// describe('로또 생성 테스트', () => {
test('생성된 로또 개별 번호가 1 ~ 45 사이인 숫자인지 테스트한다.', () => {
  const Lotto = new LottoTicketGenerator().makeLotto().getLottoNumber();
  Lotto.forEach(num => {
    expect(!isNaN(num)).toBeTruthy();
    expect(num).toBeGreaterThan(0);
    expect(num).toBeLessThan(46);
  });
});

//   test('생성된 로또 개별 번호가 1 ~ 45 사이인지 테스트한다.', () => {
//     const Lotto = new LottoTicketGenerator().makeLotto();
//     expect(Lotto.getLottoNumber().length).toEqual(6);
//   });

//   test('사용자가 구매한 로또 번호들 생성 체크', () => {
//     const mokPlayer = new LottoPlayer(2000);
//     expect(mokPlayer.getUserLottoList().length).toEqual(2);
//   });

//   test('발행한 로또 중복 번호 테스트', () => {
//     const testLottoList = [
//       [8, 21, 21, 41, 42, 43],
//       [3, 11, 11, 16, 32, 38],
//       [7, 16, 16, 35, 36, 44],
//       [1, 8, 11, 11, 41, 42],
//       [13, 14, 16, 16, 42, 45],
//       [7, 11, 30, 30, 42, 43],
//       [2, 13, 22, 22, 38, 45],
//       [1, 3, 5, 5, 22, 45],
//     ];

//     testLottoList.forEach(lotto => {
//       expect(() => {
//         new Lotto(lotto);
//       }).toThrow('[ERROR]');
//     });
//   });
// });

import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = numbers => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const runException = async input => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', '7'];

  // Ensure that the input values are valid
  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.play();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

// ...

test('예외 테스트', async () => {
  await runException('1000j'); // Ensure the input value is correct
});
