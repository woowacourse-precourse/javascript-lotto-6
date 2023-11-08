import { MissionUtils } from '@woowacourse/mission-utils';
import { parseStringsToIntegers, lottoPurchaseCount } from '../src/utils/lottoNumber/number.js';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('number.js 함수 테스트', () => {
  test.each([[['1ㄷㅁ', '1']], [['ㅇ3ㅎ', 'sd']], [['    ']], [['0000100']], [['1000j']]])(
    '당첨번호 문자열 배열시 문자가 들어가면 throw 예외 테스트',
    inputs => {
      mockQuestions(inputs);

      expect(() => parseStringsToIntegers(inputs)).toThrowError('[ERROR]');
    },
  );
});
