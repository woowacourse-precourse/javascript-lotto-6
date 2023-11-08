import { ERROR_MESSAGE } from '../../src/constants/Messages.js';
import handleValidationError from '../../src/utils/error/index.js';
import checkEmptyString from '../../src/utils/validators/index.js';

// 모의(mock) handleValidationError 함수를 생성
jest.mock('../../src/utils/error/index.js', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

describe('checkEmptyString 함수', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('빈 문자열을 입력하면 handleValidationError 함수가 호출되어야 합니다', () => {
    checkEmptyString('');

    expect(handleValidationError).toHaveBeenCalledTimes(1);

    expect(handleValidationError).toHaveBeenCalledWith(ERROR_MESSAGE.emptyString);
  });

  test('비어 있지 않은 문자열을 입력하면 handleValidationError 함수가 호출되지 않아야 합니다', () => {
    checkEmptyString('테스트 문자열');

    expect(handleValidationError).not.toHaveBeenCalled();
  });
});
