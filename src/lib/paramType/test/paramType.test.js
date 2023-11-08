import { ReferenceTypeError } from '../src/errorTypes/index.js';
import paramType from '../src/paramType.js';

describe('function paramType Test', () => {
  class SuperClass {}
  class SubClass extends SuperClass {
    constructor() {
      super();
    }
  }
  const string = '학생 왕돈까스 먹어';
  const number = 4885;
  const boolean = true;
  const array = ['다들', '점심', '먹고', '와요오옼!!'];
  const obj = { name: '현영', age: 2 };
  const superClass = new SuperClass();
  const subClassInstance = new SubClass();
  const funcFoo = () => {};

  const testCases = [
    {
      type: 'string',
      invalidValues: [
        number,
        boolean,
        undefined,
        null,
        array,
        obj,
        funcFoo,
        superClass,
      ],
    },
    {
      type: 'number',
      invalidValues: [
        string,
        boolean,
        undefined,
        null,
        array,
        obj,
        funcFoo,
        superClass,
      ],
    },
    {
      type: 'boolean',
      invalidValues: [
        string,
        number,
        undefined,
        null,
        array,
        obj,
        funcFoo,
        superClass,
      ],
    },
    {
      type: 'undefined',
      invalidValues: [string, number, null, array, obj, funcFoo, superClass],
    },
    {
      type: 'null',
      invalidValues: [
        string,
        number,
        undefined,
        array,
        obj,
        funcFoo,
        superClass,
      ],
    },
    {
      type: Array,
      invalidValues: [
        string,
        number,
        boolean,
        undefined,
        null,
        obj,
        funcFoo,
        superClass,
      ],
    },
    {
      type: Object,
      invalidValues: [
        string,
        number,
        boolean,
        undefined,
        null,
        array,
        funcFoo,
        superClass,
      ],
    },
    {
      type: Function,
      invalidValues: [
        string,
        number,
        boolean,
        undefined,
        null,
        array,
        obj,
        superClass,
        subClassInstance,
      ],
    },
    {
      type: SuperClass,
      invalidValues: [
        string,
        number,
        boolean,
        undefined,
        null,
        array,
        obj,
        funcFoo,
      ],
    },
  ];

  testCases.forEach(({ type, invalidValues }, idx) => {
    test(`매개변수가 ${type}일때 비교할 type에 같지않은 형이 들어왔을때 throw `, () => {
      invalidValues.forEach((value) => {
        const foo = (param, _0 = paramType(param, type)) => {};
        expect(() => foo(value)).toThrow();
      });
    });
  });

  test('매개변수가 sub class인데 Super Class로 검사했을때 not throw', () => {
    const foo = (param, _0 = paramType(param, SuperClass)) => {};

    expect(() => foo(subClassInstance)).not.toThrow(ReferenceTypeError);
  });

  test('매개변수가 super class인데 sub Class로 검사했을때 throw', () => {
    const foo = (param, _0 = paramType(param, SubClass)) => {};

    expect(() => foo(superClass)).toThrow(ReferenceTypeError);
  });

  test('argments 가 2개가 아닐때 throw', () => {
    expect(() => paramType('target')).toThrow(
      '2개의 argments를 입력주세요 arg[0] : 검사할 값, arg[1] : 타입',
    );
  });

  test('target이 null인데 검증할 type이 따옴표 "null"이 아닌 null로 체크했을때 throw', () => {
    const 널 = null;

    expect(() => {
      paramType(널, null);
    }).toThrow();
  });

  test('target이 null이고 제대로 "null"로 검증했을때 not throw ', () => {
    const 널 = null;

    expect(() => {
      paramType(널, 'null');
    }).not.toThrow();
  });
});
