describe("내장함수 테스트", () => {
  test("문자열을 split했을 때 리스트 원소 타입 확인", () => {
  const input = "1,2,3,4,5,6";
  const list = input.split(",");
  const result = list[1] + list[2]

  expect(result).toEqual("23");
  });

  test("문자열을 split했을 때 숫자로 인식", () => {
    const input = "1,2,3,4,5,6";
    const list = input.split(",").map(str => parseInt(str));
    const result = list[1] + list[2]
  
    expect(result).toEqual(5);
    });

  test("리스트 합치기", () => {
    const input1 = [1,2,3,4];
    const input2 = 5;
    const result = [...input1, input2];

    expect(result).toContainEqual(1,2,3,4,5);
  });
});