import { numberSort } from "../src/App.js";

test("구매한 로또 번호를 오름차순으로 출력한다.", () => {
  const INPUT = [21, 8, 23, 42, 43, 41];
  const OUTPUT = [8, 21, 23, 41, 42, 43];

  const result = numberSort(INPUT);

  expect(result).toEqual(OUTPUT);
});