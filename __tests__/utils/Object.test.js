/* eslint-disable max-lines-per-function */
import { isEmptyObject } from '../../src/utils/object';

describe('Object 모듈 테스트', () => {
  describe('isEmptyObject 유틸리티 함수 테스트', () => {
    test('빈 객체일 때 true를 반환한다.', () => {
      const object = {};
      const result = isEmptyObject(object);
      expect(result).toBeTruthy();
    });

    test('프로퍼티가 있는 객체일 때 false를 반환한다.', () => {
      const object = { key: 'value' };
      const result = isEmptyObject(object);
      expect(result).toBeFalsy();
    });
  });
});
