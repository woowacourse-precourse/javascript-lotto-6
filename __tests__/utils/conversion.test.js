import { SEPARATOR } from "../../src/constants/messages";
import {
  divideIntoCommas,
  stringToNumber,
  stringsToNumbers,
} from "../../src/utils/conversion";

// TODO: 변수명 변경하여 가독성 개선
describe("conversion util 함수 테스트", () => {
  test(`${SEPARATOR}를 기준으로 잘 나뉘는지 확인한다.`, () => {
    const input = "1,2,3,4,5,6"; // 초기값 입력
    const expected = ["1", "2", "3", "4", "5", "6"]; // 기댓값 입력
    const test = divideIntoCommas(input);
    expect(test).toEqual(expected);
  });

  test(`문자열이 숫자로 잘 변환되는지 확인한다.`, () => {
    const input = "200"; // 초기값 입력
    const expected = 200; // 기댓값 입력
    const test = stringToNumber(input);
    expect(test).toBe(expected);
  });

  test(`문자 배열이 숫자 배열로 잘 변환되는지 확인한다.`, () => {
    const input = ["1", "2", "3", "4", "5", "6"]; // 초기값 입력
    const expected = [1, 2, 3, 4, 5, 6]; // 기댓값 입력
    const test = stringsToNumbers(input);
    expect(test).toEqual(expected);
  });
});
