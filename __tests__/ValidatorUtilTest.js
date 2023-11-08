import ValidatorUtil from '../src/validators/ValidatorUtil';

describe('예외처리 도구 테스트', () => {
  test.each([[['a'], ['1000j']]])(
    '숫자가 아닌 입력값에 대해 예외처리한다.',
    (inputs) => {
      expect(() => {
        ValidatorUtil.isNumberValidate(inputs);
      }).toThrow('[ERROR]');
    }
  );

  test.each([[['0'], ['-1']]])(
    '양수가 아닌 입력값에 대해 예외처리한다.',
    (inputs) => {
      expect(() => {
        ValidatorUtil.isPositiveNumberValidate(inputs);
      }).toThrow('[ERROR]');
    }
  );

  test.each([[['10'], ['1004']]])(
    '1000의 배수가 아닌 입력값에 대해 예외처리한다.',
    (inputs) => {
      expect(() => {
        ValidatorUtil.isMultiplesOf1000Validate(inputs);
      }).toThrow('[ERROR]');
    }
  );

  test.each([[['0'], ['1004']]])(
    '1~45가 아닌 입력값에 대해 예외처리한다.',
    (inputs) => {
      expect(() => {
        ValidatorUtil.isNumberInRangeValidate(inputs);
      }).toThrow('[ERROR]');
    }
  );

  test.each([
    [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5, 6, 7],
    ],
  ])('입력값 갯수가 6개가 아닌 경우에 대해 예외처리한다.', (inputs) => {
    expect(() => {
      ValidatorUtil.lengthValidate(inputs);
    }).toThrow('[ERROR]');
  });

  test.each([[[1, 2, 3, 4, 5, 5, 7]], [[1, 2, 3, 4, 5, 6, 6]]])(
    '로또 숫자와 보너스 숫자의 중복 관련하여 예외처리한다.',
    (inputs) => {
      expect(() => {
        ValidatorUtil.duplicationValidate(inputs);
      }).toThrow('[ERROR]');
    }
  );
});
