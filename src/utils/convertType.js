import { ERROR_MESSAGE } from '../constants/messages.js';

const typeConverters = {
  number: (value) => {
    const convertedValue = Number(value);
    if (Number.isNaN(convertedValue)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }
    return convertedValue;
  },
  string: String,
};

/**
 * 타입을 변환합니다.
 * @param {any} value - 타입 변환할 값
 * @param {'number' | 'string'} convertType - 어떤 타입으로 변환할 지 (기본 값: number)
 * @return {'number' | 'string'} - 타입을 변환한 값
 */
const convertType = (value, convertType = 'number') => {
  const converter = typeConverters[convertType];

  if (!converter) {
    throw new Error(ERROR_MESSAGE.NOT_SUPPORTED_TYPE);
  }

  return converter(value);
};

export default convertType;
