import { sortNumbers } from "../../src/utils/sort";

// TODO: 변수명 변경하여 가독성 개선
describe("sort util 함수 테스트", () => {
  test("정렬이 제대로 되는 지 확인한다.", () => {
    const numbersArray = [1, 31, 24, 43, 8, 29]; // 초기값 입력
    const expectedArray = [1, 8, 24, 29, 31, 43]; // 기댓값 입력
    const test = sortNumbers(numbersArray);
    expect(test).toEqual(expectedArray);
  });
});
