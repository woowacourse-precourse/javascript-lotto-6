import { isEqualObject, isSameKeyList } from '../../src/utils/object.js';

describe('객체 유틸리티 테스트', () => {
  it.each([
    {
      obj1: { a: 'a', b: 'b' },
      obj2: { a: 'a', b: 'b' },
    },
    {
      obj1: { a: 'a', b: 'b' },
      obj2: { a: 'b', b: 'a' },
    },
  ])('isSameKeyList는 모든 키 값이 같을경우 true를 반환한다.', ({ obj1, obj2 }) => {
    // given & when
    const result = isSameKeyList(obj1, obj2);

    // then
    expect(result).toBeTruthy();
  });

  it.each([
    {
      obj1: { a: 'a', b: 'b' },
      obj2: { b: 'a', c: 'b' },
    },
    {
      obj1: { a: 'a', b: 'b' },
      obj2: { a: 'b', b: 'a', c: 'c' },
    },
  ])('isSameKeyList는 모든 키 값이 다를경우 true를 반환한다.', ({ obj1, obj2 }) => {
    // given & when
    const result = isSameKeyList(obj1, obj2);

    // then
    expect(result).toBeFalsy();
  });

  it.each([
    {
      obj1: { a: 'a', b: 'b' },
      obj2: { a: 'a', b: 'b' },
    },
    {
      obj1: { a: 'a', b: 'b' },
      obj2: { b: 'b', a: 'a' },
    },
    {
      obj1: {
        b: {
          c: 'c',
        },
        a: 'a',
      },
      obj2: {
        b: {
          c: 'c',
        },
        a: 'a',
      },
    },
  ])('isEqualObject는 모든 키와 값이 같을경우 true를 반환한다.', ({ obj1, obj2 }) => {
    // given & when
    const result = isEqualObject(obj1, obj2);

    // then
    expect(result).toBeTruthy();
  });

  it.each([
    {
      obj1: { a: 'a', b: 'b' },
      obj2: { a: 'a', b: 'a' },
    },
    {
      obj1: { a: 'a', b: 'b' },
      obj2: { a: 'a', b: 'b', c: 'c' },
    },
  ])('isEqualObject는 모든 키와 값이 다를경우 false를 반환한다.', ({ obj1, obj2 }) => {
    // given & when
    const result = isEqualObject(obj1, obj2);

    // then
    expect(result).toBeFalsy();
  });
});
