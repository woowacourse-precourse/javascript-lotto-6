import validateCommon from '../../src/validator/CommonValidator.js';
import { LOTTO_ERROR_MESSAGE } from '../../src/constants/LottoMessage.js';

describe('공통 유효성 검사 테스트', () => {
  test.each([{ input: '' }, { input: ' ' }, { input: '  ' }])(
    '공백 및 스페이스 입력 테스트',
    ({ input }) => {
      expect(() => validateCommon(input)).toThrow(
        LOTTO_ERROR_MESSAGE.emptyInput
      );
    }
  );
});
