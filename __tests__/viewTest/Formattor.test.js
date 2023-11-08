import { Random } from "@woowacourse/mission-utils";
import STRING_LIST from "../test_list/StringList";
import ARRAY_LIST from "../test_list/ArrayList";
import NUMBER_LIST from "../test_list/NumberList";
import Formattor from "../../src/View/Formattor";
import ValidationError from "../../src/Error/ValidationError";
import ERROR_CONSTANT from "../../src/Constant/ErrorConstant";

describe('Formattor formatStringToInteger', () => {
  test('FormatParseAmountToNumber Function type이다 ', () => {
    expect(typeof (Formattor.formatStringToInteger)).toBe('function');
  })
  test('formatStringToInteger 인자 유효성 검사, string이 아니면 에러를 thorw한다 ', () => {
    STRING_LIST.errorStringTestCases.forEach((input) => {
      expect(() => {
        Formattor.formatStringToInteger(input)
      }).toThrow(new ValidationError(ERROR_CONSTANT.IS_NOT_STRING));
    })
    const input = "123";
    expect(() => Formattor.formatStringToInteger(input)).not.toThrow();
  });
  const testCases = [
    { input: "2000", expected: 2000 },
    { input: "abc", expected: NaN },
    { input: "", expected: 0 },
    { input: "-1", expected: -1 },
    { input: "1.2", expected: 1.2 },
  ];
  test('formatStringToInteger 기능 검사, 문자열을 숫자로 파싱한다 ', () => {
    testCases.forEach (({input, expected}) => {
      expect(Formattor.formatStringToInteger(input)).toStrictEqual(expected);
    });
  });
});

const getDivisionQuotientTestList = [
  { inputString: null, value2: 1 },
  { value1: undefined, value2: 1 },
  { value1: true, value2: 1 },
  { value1: '123', value2: 1 },
  { value1: 1, value2: null },
  { value1: 1, value2: undefined },
  { value1: 1, value2: true },
  { value1: 1, value2: '123' },
]

describe('Formattor getDivisionQuotient', () => {
  test('FormatParseAmountToNumber Function type이다 ', () => {
    expect(typeof (Formattor.getDivisionQuotient)).toBe('function');
  })
  test('getDivisionQuotient 인자 유효성 검사, NaN을 제외한 number가 아니면 에러를 throw한다 ', () => {
    getDivisionQuotientTestList.forEach((value1, value2) => {
      expect(() => {
        Formattor.getDivisionQuotient(value1, value2)
      }).toThrow(new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER));
    })
    const value1 = 1;
    const value2 = 1;
    expect(() => Formattor.getDivisionQuotient(value1, value2)).not.toThrow();
  });
  const testCases = [
    { value1: 2000, expected: 2 },
    { value1: 3000, expected: 3 },
    { value1: 0, expected: 0 },
    { value1: -1, expected: -0.001 },
    { value1: 1.2, expected: 0.0012 },
  ];
  const value2 = 1000;
  test(`getDivisionQuotient 기능 검사, 입력받은 숫자를 조건에 따라 횟수로 파싱한다 `, () => {
    testCases.forEach (({value1, expected}) => {
      expect(Formattor.getDivisionQuotient(value1, value2)).toStrictEqual(expected);
    });
  });
});

const splitStringToArrayTestList = [
  {inputString: '1', delimiter: 1},
  {inputString: 1, delimiter: '1'},
]

describe('Formattor splitStringToArray', () => {
  test('FormatParseAmountToNumber Function type이다 ', () => {
    expect(typeof (Formattor.splitStringToArray)).toBe('function');
  })
  test('splitStringToArray 인자 유효성 검사, string이 아니면 에러를 thorw한다 ', () => {
    splitStringToArrayTestList.forEach((inputString, delimiter) => {
      expect(() => {
        Formattor.splitStringToArray(inputString, delimiter)
      }).toThrow(new ValidationError(ERROR_CONSTANT.IS_NOT_STRING));
    })
    const inputString = '1';
    const delimiter = '1';
    expect(() => Formattor.splitStringToArray(inputString, delimiter)).not.toThrow();
  });
  const testCases = [
    {inputString: '1,2,3', delimiter: ',', expected: ['1','2','3']},
  {inputString: '1!23!4', delimiter: '!', expected: ['1','23','4']},
  ];
  test(`splitStringToArray 기능 검사, 입력받은 inputString를 delimiter 기준으로 split한 배열을 리턴한다. `, () => {
    testCases.forEach (({inputString, delimiter, expected}) => {
      expect(Formattor.splitStringToArray(inputString, delimiter)).toStrictEqual(expected);
    });
  });
});

describe('Formattor formatStringArrayToNumberArray', () => {
  test('FormatParseAmountToNumber Function type이다 ', () => {
    expect(typeof (Formattor.formatStringArrayToNumberArray)).toBe('function');
  })
  test('formatStringArrayToNumberArray 인자 유효성 검사, 인자의 타입이 배열이 아니면 에러를 리턴한다. ', () => {
    ARRAY_LIST.errorArrayTestCases.forEach((input) => {
      expect(() => {
        Formattor.formatStringArrayToNumberArray(input)
      }).toThrow(new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY));
    });
  });
  const testCases = [
    {input: ['1','2','3'] , expected: [1, 2, 3]},
    {input: ['1','23','4'], expected: [1, 23, 4]},
  ];

  test(`formatStringArrayToNumberArray 기능 검사, 인자로 받은 문자열 배열의 원소를 정수로 하는 배열을 생성하여 리턴한다. `, () => {
    testCases.forEach (({input, expected}) => {
      expect(Formattor.formatStringArrayToNumberArray(input)).toStrictEqual(expected);
    });
  });
});

const getUniqueRandomNumbersTestList = [
  {minValue: '1', maxValue: 1, count: 1},
  {minValue: 1, maxValue: '1', count: 1},
  {minValue: 1, maxValue: 1, count: '1'},
]

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

describe('Formattor getUniqueRandomNumbers', () => {
  test('FormatParseAmountToNumber Function type이다 ', () => {
    expect(typeof (Formattor.getUniqueRandomNumbers)).toBe('function');
  })
  test('getUniqueRandomNumbers 인자 유효성 검사, NaN을 제외한 number가 아니면 에러를 throw한다 ', () => {
    getUniqueRandomNumbersTestList.forEach((minValue, maxValue, count) => {
      expect(() => {
        Formattor.getUniqueRandomNumbers(minValue, maxValue, count)
      }).toThrow(new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER));
    });
  });
  test(`getUniqueRandomNumbers 기능 검사, 최소값과 최대값 사이의 겹치지 않는 랜덤한 값을 count만큼 배열에 할당한 후 배열을 리턴한다 `, () => {
    const minValue = 1 
    const maxValue = 10
    const count = 3
    const array = [2, 3, 4];
    mockRandoms([array]);
    expect(Formattor.getUniqueRandomNumbers(minValue, maxValue, count)).toStrictEqual(array);
  });
});

describe('Formattor sortAscendingArray', () => {
  test('sortAscendingArray Function type이다 ', () => {
    expect(typeof (Formattor.sortAscendingArray)).toBe('function');
  })
  test('sortAscendingArray 인자 유효성 검사, 인자의 타입이 배열이 아니면 에러를 리턴한다. ', () => {
    ARRAY_LIST.errorArrayTestCases.forEach((input) => {
      expect(() => {
        Formattor.sortAscendingArray(input)
      }).toThrow(new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY));
    });
  });
  test(`sortAscendingArray 기능 검사, 인자로 받은 array를 오름차순으로 정렬하고 리턴한다 `, () => {
    const input = [3,2,1];
    const expected = [1,2,3];
      expect(Formattor.sortAscendingArray(input)).toStrictEqual(expected);
  });
});

describe('Formattor getEqulsElementsCount', () => {
  test('getEqulsElementsCount Function type이다 ', () => {
    expect(typeof (Formattor.getEqulsElementsCount)).toBe('function');
  })
  test('getEqulsElementsCount 인자 유효성 검사, 인자의 타입이 배열이 아니면 에러를 리턴한다. ', () => {
    ARRAY_LIST.errorArrayTestCases.forEach((input) => {
      const input_dup = input;
      expect(() => {
        Formattor.getEqulsElementsCount(input, input_dup);
      }).toThrow(new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY));
    });
  });
  test(`getEqulsElementsCount 기능 검사, 두 배열 간 값이 동일한 원소 갯수을 리턴한다. `, () => {
    const input1 = [3,2,1];
    const input2 = [3,2,1];
    const expected = 3;
      expect(Formattor.getEqulsElementsCount(input1, input2)).toStrictEqual(expected);
  });
});


