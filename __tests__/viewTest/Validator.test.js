import Validator from '../../src/View/Validator';
import ERROR_CONSTANT from '../../src/Constant/ErrorConstant';
import STRING_LIST from '../test_list/StringList';
import NUMBER_LIST from '../test_list/NumberList';
import ARRAY_LIST from '../test_list/ArrayList';
import ValidationError from '../../src/Error/ValidationError';

describe('Validator assertNonEmptyString', () => {
  test('assertNonEmptyString Function type이다 ', () => {
    expect(typeof (Validator.assertNonEmptyString)).toBe('function');
  })
  test('assertNonEmptyString 인자 유효성 검사, string이 아니면 에러를 thorw한다 ', () => {
    STRING_LIST.errorStringTestCases.forEach((input) => {
      expect(() => {
        Validator.assertNonEmptyString(input)
      }).toThrow(new ValidationError(ERROR_CONSTANT.IS_NOT_STRING));
    })
    const input = '123';
    expect(() => Validator.assertNonEmptyString(input)).not.toThrow();
  });
  test('assertNonEmptyString 기능 검사, 인자가 비어있는 문자열이면 에러를 throw한다 ', () => {
    const input = '';
    expect(() =>{
      Validator.assertNonEmptyString(input)
    }).toThrow(new ValidationError(ERROR_CONSTANT.EMPTY_STRING));
  })
});

describe('Validator assertParsableAsInteger', () => {
  test('assertParsableAsInteger Function type이다 ', () => {
    expect(typeof (Validator.assertParsableAsInteger)).toBe('function');
  })
  test('assertParsableAsInteger 인자 유효성 검사, string이 아니면 에러를 thorw한다 ', () => {
    STRING_LIST.errorStringTestCases.forEach((input) => {
      expect(() => {
        Validator.assertParsableAsInteger(input)
      }).toThrow(new ValidationError(ERROR_CONSTANT.IS_NOT_STRING));
    })
    const input = '123';
    expect(() => Validator.assertParsableAsInteger(input)).not.toThrow();
  })
  test('assertParsableAsInteger 기능 검사, 2자리 문자열의 첫번째가 유효한 숫자(1 ~ 9)가 아니면 throw한다 ', () => {
    const input1 = '012';
    const input2 = ' 12';
    const input3 = '1.2';
    expect(() => {
      Validator.assertParsableAsInteger(input1)
    }).toThrow(new ValidationError(ERROR_CONSTANT.UNCONVERTIBLE_STRING));
    expect(() => {
      Validator.assertParsableAsInteger(input2)
    }).toThrow(new ValidationError(ERROR_CONSTANT.UNCONVERTIBLE_STRING));
    expect(() => {
      Validator.assertParsableAsInteger(input3)
    }).toThrow(new ValidationError(ERROR_CONSTANT.UNCONVERTIBLE_STRING));
  })
})

describe('Validator assertPositiveNumber', () => {
  test('assertPositiveNumber Function type이다 ', () => {
    expect(typeof (Validator.assertPositiveNumber)).toBe('function');
  })
  test('assertPositiveNumber 인자 유효성 검사, NaN을 제외한 number가 아니면 에러를 throw한다 ', () => {
    NUMBER_LIST.errorNumberTestCases.forEach((input) => {
      expect(() => {
        Validator.assertPositiveNumber(input)
      }).toThrow(new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER));
    })
    const input = 123;
    expect(() => Validator.assertPositiveNumber(input)).not.toThrow();
  })
  test('assertPositiveNumber 기능 검사, 인자가 양의 정수가 아니면 에러를 throw한다 ', () => {
    const input1 = -1;
    const input2 = 0;
    expect(() => {
      Validator.assertPositiveNumber(input1)
    }).toThrow(new ValidationError(ERROR_CONSTANT.NEGATIVE_AMOUNT));
    expect(() => {
      Validator.assertPositiveNumber(input2)
    }).not.toThrow();
  })
})

const assertRemainderNotEqualTestList = [
  {value1: '1', value2: 1, expectedRemainderValue: 1},
  {value1: 1, value2: '1', expectedRemainderValue: 1},
  {value1: 1, value2: 1, expectedRemainderValue: '1'},
]

describe('Validator assertRemainderNotEqual', () => {
  test('assertRemainderNotEqual Function type이다 ', () => {
    expect(typeof (Validator.assertRemainderNotEqual)).toBe('function');
  })
  test('assertRemainderNotEqual 인자 유효성 검사, NaN을 제외한 number가 아니면 에러를 throw한다 ', () => {
    assertRemainderNotEqualTestList.forEach((value1, value2, expectedRemainderValue) => {
      expect(() => {
        Validator.assertRemainderNotEqual(value1, value2, expectedRemainderValue)
      }).toThrow(new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER));
    })
    const value1 = 1;
    const value2 = 1;
    const expectedRemainderValue = 0;
    expect(() => {
      Validator.assertRemainderNotEqual(value1, value2, expectedRemainderValue)
    }).not.toThrow();
  })
  test('assertRemainderNotEqual 기능 검사, value1 % value2 !== expectedRemainderValue이면 에러를 throw한다 ', () => {
    const value1 = 1;
    const value2 = 1;
    const failExpectedRemainderValue = 1;
    const successExpectedRemainderValue = 0;

    expect(() => {
      Validator.assertRemainderNotEqual(value1, value2, failExpectedRemainderValue)
    }).toThrow(new ValidationError(ERROR_CONSTANT.REMAINDER_MISMATCH));
    expect(() => {
      Validator.assertRemainderNotEqual(value1, value2, successExpectedRemainderValue)
    }).not.toThrow();
  })
})

describe('Validator assertArraySizeEqual', () => {
  test('assertArraySizeEqual Function type이다 ', () => {
    expect(typeof (Validator.assertArraySizeEqual)).toBe('function');
  })
  test('assertArraySizeEqual 인자 유효성 검사, 첫번 쨰 인자의 타입이 배열이 아니면 에러를 리턴한다. ', () => {
    const expectedSize = 3;
    ARRAY_LIST.errorArrayTestCases.forEach((inputArray) => {
      expect(() => {
        Validator.assertArraySizeEqual(inputArray, expectedSize)
      }).toThrow(new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY));
    });
  });
  test('assertArraySizeEqual 인자 유효성 검사, 두번 쨰 인자는 NaN을 제외한 number가 아니면 에러를 throw한다 ', () => {
    const inputArray = ['1','2','3'];
    NUMBER_LIST.errorNumberTestCases.forEach((expectedSize) => {
      expect(() => {
        Validator.assertArraySizeEqual(inputArray, expectedSize)
      }).toThrow(new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER));
    });
  });
  test('assertArraySizeEqual 기능 검사, inputArray의 size와 expectedSize가 다르면 에러를 throw한다 ', () => {
    const inputArray = [1,2,3];
    const expectedSizeNotEqual = 4;
    const expectedSizeEqual = 3;
    expect(() => {
      Validator.assertArraySizeEqual(inputArray, expectedSizeNotEqual)
    }).toThrow(new ValidationError(ERROR_CONSTANT.ARRAY_SIZE_MISMATCH));
    expect(() => {
      Validator.assertArraySizeEqual(inputArray, expectedSizeEqual)
    }).not.toThrow();
  })
})

const assertValueInRangeTestList = [
  {value: '1', minValue: 1, maxValue: 1},
  {value: 1, minValue: '1', maxValue: 1},
  {value: 1, minValue: 1, maxValue: '1'},
]

describe('Validator assertValueInRange', () => {
  test('assertValueInRange Function type이다 ', () => {
    expect(typeof (Validator.assertValueInRange)).toBe('function');
  })
  test('assertValueInRange 인자 유효성 검사, NaN을 제외한 number가 아니면 에러를 throw한다 ', () => {
    assertValueInRangeTestList.forEach((value, minValue, maxValue) => {
      expect(() => {
        Validator.assertValueInRange(value, minValue, maxValue)
      }).toThrow(new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER));
    })
    const value = 1;
    const minValue = 0;
    const maxValue = 2;
    expect(() => {
      Validator.assertValueInRange(value, minValue, maxValue)
    }).not.toThrow();
  })
  test('assertValueInRange 기능 검사, value가 minValue와 maxValue 사이의 값이 아닐경우 에러를 throw한다. ', () => {
    const minValue = 0;
    const maxValue = 9;
    const valueInRange = 1;
    const valueNotInRange = 10;

    expect(() => {
      Validator.assertValueInRange(valueNotInRange, minValue, maxValue)
    }).toThrow(new ValidationError(ERROR_CONSTANT.VALUE_NOT_IN_RANGE));
    expect(() => {
      Validator.assertValueInRange(valueInRange, minValue, maxValue)
    }).not.toThrow();
  })
})

describe('Validator assertNotInDuplicateValueInArray', () => {
  test('assertNotInDuplicateValueInArray Function type이다 ', () => {
    expect(typeof (Validator.assertNotInDuplicateValueInArray)).toBe('function');
  })
  test('assertNotInDuplicateValueInArray 인자 유효성 검사, 인자의 타입이 배열이 아니면 에러를 리턴한다. ', () => {
    ARRAY_LIST.errorArrayTestCases.forEach((input) => {
      expect(() => {
        Validator.assertNotInDuplicateValueInArray(input)
      }).toThrow(new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY))
    });
  });
  test('assertNotInDuplicateValueInArray 기능 검사, 배열 원소에 같은 인자가 있는 경우 에러를 리턴한다. ', () => {
    const DuplicateValueInArray = [1, 1];
    const DuplicateValueNotInArray = [1, 2];
    expect(() => {
      Validator.assertNotInDuplicateValueInArray(DuplicateValueInArray)
    }).toThrow(new ValidationError(ERROR_CONSTANT.DUPLICATE_VALUE_IN_ARRAY));
    expect(() => {
      Validator.assertNotInDuplicateValueInArray(DuplicateValueNotInArray)
    }).not.toThrow();
  });
});

describe('Validator assertNotInDuplicateInputValueInArray', () => {
  test('assertNotInDuplicateInputValueInArray Function type이다 ', () => {
    expect(typeof (Validator.assertNotInDuplicateInputValueInArray)).toBe('function');
  })
  test('assertNotInDuplicateInputValueInArray 인자 유효성 검사, 첫번 째 인자의 타입이 배열이 아니면 에러를 리턴한다. ', () => {
    const inputValue = 4;
    ARRAY_LIST.errorArrayTestCases.forEach((input) => {
      expect(() => {
        Validator.assertNotInDuplicateInputValueInArray(input, inputValue)
      }).toThrow(new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY))
    });
  });
  test('assertNotInDuplicateInputValueInArray 인자 유효성 검사, 두번 쨰 인자는 NaN을 제외한 number가 아니면 에러를 throw한다 ', () => {
    const inputArray = [];
    NUMBER_LIST.errorNumberTestCases.forEach((value) => {
      expect(() => {
        Validator.assertNotInDuplicateInputValueInArray(inputArray, value);
      }).toThrow(new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER));
    })
  })
  test('assertNotInDuplicateInputValueInArray 기능 검사, 배열 원소에 같은 인자가 있는 경우 에러를 리턴한다. ', () => {
    const Array = [1, 2];
    const DuplicateValue = 1;
    const NoDuplicateValue = 3;
    expect(() => {
      Validator.assertNotInDuplicateInputValueInArray(Array, DuplicateValue)
    }).toThrow(new ValidationError(ERROR_CONSTANT.DUPLICATE_VALUE_IN_ARRAY));
    expect(() => {
      Validator.assertNotInDuplicateInputValueInArray(Array, NoDuplicateValue)
    }).not.toThrow();
  });
});
