import { MissionUtils } from '@woowacourse/mission-utils';

import { validateNumber, isIncludedBonusNumbers, validatedPrice, parsedNumber } from '../src/utils/validation/validation';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('숫자 확인 함수 테스트', () => {
  test.each([[['1ㄷㅁ']], [['ㅇ3ㅎ']], [['    ']], [['0000100']], [['1000j']]])('숫자가 아닌 것에 대한 예외 처리', inputs => {
    mockQuestions(inputs);

    expect(() => validateNumber(inputs[0])).toThrowError('[ERROR]');
  });
});
