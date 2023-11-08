import { deepFreeze } from '../../src/utils/deepFreeze.js';

describe('deepFreeze 유틸 함수에 관한 테스트', () => {
  test('객체를 동결 시켜야 한다.', () => {
    const obj = { a: 1 };
    const frozenObj = deepFreeze(obj);
    expect(Object.isFrozen(frozenObj)).toBe(true);
  });

  test('중첩된 객체도 동결 시킬수 있어야 한다.', () => {
    const obj = { a: { b: 2 } };
    deepFreeze(obj);
    expect(Object.isFrozen(obj.a)).toBe(true);
  });

  test('중첩 객체에 관해서 수정을 하려할때 예외가 발생해야한다.', () => {
    const obj = { a: 1, b: { c: 3 } };
    deepFreeze(obj);
    expect(() => {
      obj.a = 2;
    }).toThrow();
    expect(() => {
      obj.b.c = 4;
    }).toThrow();
  });

  test('배열에 관한 값을 가진 객체들도 동결 할 수 있어야한다.', () => {
    const obj = { a: [1, 2, 3], b: { c: [4, 5, 6] } };
    deepFreeze(obj);
    expect(Object.isFrozen(obj.a)).toBe(true);
    expect(Object.isFrozen(obj.b)).toBe(true);
    expect(Object.isFrozen(obj.b.c)).toBe(true);
  });

  test('이미 동결된 객체들에 관해서는 동결할 필요가 없다.', () => {
    const obj = { a: 1 };
    Object.freeze(obj);
    expect(() => {
      deepFreeze(obj);
    }).not.toThrow();
    expect(Object.isFrozen(obj)).toBe(true);
  });
});
