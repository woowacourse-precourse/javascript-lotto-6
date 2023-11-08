// handleValidationError.js

import handleValidationError from '../../src/utils/error/index.js';

describe('handleValidationError', () => {
  test('주어진 메시지로 ValidationError 예외를 던져야 합니다', () => {
    // given
    const errorMessage = 'This is a test error message';

    // when
    // then
    expect(() => {
      handleValidationError(errorMessage);
    }).toThrowError(`[ERROR] ${errorMessage}`);
  });
});
