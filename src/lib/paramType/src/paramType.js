import {
  NullTypeError,
  PrimitiveTypeError,
  ReferenceTypeError,
} from './errorTypes/index.js';

/**
 * default parameter가 이전 매개변수를 참조할 수 있는 기능을 사용해
 * TypeScript와 같이 parameter에 특정 타입만 들어올 수 있게 만들어줍니다.
 * @link https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
 * @param {*} target : 검증하고자 하는 value
 * @param {TypeofPrimitiveValueType | ReferenceType } type - target의 타입 또는 생성자 함수
 * @typedef {'string' | 'number' | 'boolean' | 'undefined' | 'null'} PrimitiveType
 * @typedef { Object | Array | Function | Map | Set | ClassValue } ReferenceType
 * @returns {void}
 * @throws {Error}
 * @example
 * class WooTeCo {}
 * const foo (param, _0 = paramType(param, WooTeCo)) => {} // WooTeCo
 * foo('학생 왕돈까스 먹어') // [ReferenceTypeError] 매개변수: 'Stirng'는(은) <WooTeCo> 타입이 아닙니다 !
 */
export default function paramType(target, type) {
  if (arguments.length !== 2) {
    throw new Error(
      '2개의 argments를 입력주세요 arg[0] : 검사할 값, arg[1] : 타입',
    );
  }

  if (isNull(target)) {
    if (type !== 'null') {
      throw new NullTypeError(target, type);
    }
    return;
  }

  if (isPrimitive(type)) {
    if (typeof target !== type) {
      throw new PrimitiveTypeError(target, type);
    }
  } else if (isReferenceType()) {
    if (targetIsLikeArrayButCompareToObject(target, type)) {
      throw new ReferenceTypeError(target, type);
    }

    if (!(target instanceof type)) {
      throw new ReferenceTypeError(target, type);
    }
  }
}

const isNull = (target) => target === null;

const isPrimitive = (type) => typeof type === 'string';

const isReferenceType = () => true;

const targetIsLikeArrayButCompareToObject = (target, type) => {
  return type === Object && target.constructor !== Object;
};
