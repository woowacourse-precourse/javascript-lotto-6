import { MESSAGE } from '../constants/message.js';
import removeTrim from './removeTrim.js';

/**
 * 문자열을 쉼표(,)를 기준으로 나눈 후 각 값의 양 공백을 제거합니다.
 * @param {string} string
 * @returns {number[]} array
 */
const chageStringtoArray = (string) => string.split(MESSAGE.COMMA).map((item) => Number(removeTrim(item)));

export default chageStringtoArray;
