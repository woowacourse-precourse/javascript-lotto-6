// import calculate from "../src/calculate";
// import matchingNumbers from "../src/matchingNumbers";

// jest.mock("../src/matchingNumbers");

// beforeEach(() => {
//   matchingNumbers.mockClear();
// });

// describe("계산 결과 합산 테스트", () => {
//   it("테스트", () => {
//     const excution = [
//       [1, 2, 3, 4, 5, 6],
//       [2, 3, 4, 5, 6, 7],
//       [1, 2, 3, 4, 5, 9],
//       [7, 8, 9, 10, 11, 12],
//     ];
//     const number = [1, 2, 3, 4, 5, 6];
//     const bonusNumber = 7;

//     matchingNumbers.mockReturnValue(["1등", "2등", "3등"]);
//     const result = calculate(excution, number, bonusNumber);
//     expect(result).toEqual(["1등", "2등", "3등"]);
//   });
// });
