import { ERROR_CONVENTION } from "../src/constants/conventions.js";
import { EMPTY_LINE } from "../src/constants/messages.js";
import { COUNT } from "../src/constants/numbers.js";
import Winning from "../src/model/Winning.js";

describe("당첨 번호 클래스 테스트", () => {
  test("어떤 값도 들어오지 않았다면 예외를 발생한다.", () => {
    expect(() => {
      new Winning(EMPTY_LINE);
    }).toThrow(ERROR_CONVENTION);
  });

  test("공백만 존재한다면 예외를 발생한다.", () => {
    expect(() => {
      new Winning("   ");
    }).toThrow(ERROR_CONVENTION);
  });

  test(`배열로 만들었을 때 길이가 ${COUNT.winningNumbers}이(가) 아니라면 예외를 발생한다.`, () => {
    expect(() => {
      new Winning("1,2,3,4,5,6,7");
    }).toThrow(ERROR_CONVENTION);
  });

  test(`배열로 만들었을 때 모든 요소가 숫자가 아니라면 예외를 발생한다.`, () => {
    expect(() => {
      new Winning("1,2,3,a,5,6");
    }).toThrow(ERROR_CONVENTION);
  });

  test(`배열로 만들었을 때 중복되는 요소가 있다면 예외를 발생한다.`, () => {
    expect(() => {
      new Winning("1,2,3,5,5,6");
    }).toThrow(ERROR_CONVENTION);
  });

  test(`배열로 만들었을 때 공백이 있다면 예외를 발생한다.`, () => {
    expect(() => {
      new Winning("1,2, , ,5,6");
    }).toThrow(ERROR_CONVENTION);
  });

  test(`배열로 만들었을 때 범위에서 벗어나는 숫자가 있다면 예외를 발생한다.`, () => {
    expect(() => {
      new Winning("41,42,43,44,45,46");
    }).toThrow(ERROR_CONVENTION);
  });
});
