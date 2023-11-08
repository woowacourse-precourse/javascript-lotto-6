import { MissionUtils } from '@woowacourse/mission-utils';

import { ensureIsNumberString, ensureBonusNumberIsNotIncluded, validateLottoPurchase } from '../src/utils/validation/validation.js';

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

    expect(() => ensureIsNumberString(inputs[0])).toThrowError('[ERROR]');
  });

  test.each([[['1100']], [['1300']], [['4100']]])('1000단위가 아닌 수일 시 예외 처리', inputs => {
    mockQuestions(inputs);

    expect(() => validateLottoPurchase(inputs[0])).toThrowError('[ERROR]');
  });
});
