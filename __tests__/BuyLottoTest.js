// import User from "../src/User.js";
// import LottoManager from "../src/LottoManager.js";
// import { Console } from "@woowacourse/mission-utils";
// import { ERRORS } from "../src/libs/message.js";

// const mockQuestions = (inputs) => {
//   Console.readLineAsync = jest.fn();

//   Console.readLineAsync.mockImplementation(() => {
//     const input = inputs.shift();

//     return Promise.resolve(input);
//   });
// };

// describe("구입 금액 입력 테스트", () => {
//   test("공백 입력", async () => {
//     // given
//     mockQuestions([]);

//     // when
//     const user = new User();

//     // then
//     await expect(user.buyLotto()).rejects.toThrow(ERRORS.EMPTY_INPUT);
//   });

//   test("문자열 입력", async () => {
//     // given
//     mockQuestions(["hi"]);

//     // when
//     const user = new User();

//     // then
//     await expect(user.buyLotto()).rejects.toThrow(ERRORS.NOT_NUMBER);
//   });

//   test("구입 금액이 1000원 단위가 아닌 경우", async () => {
//     // given
//     mockQuestions(["1500"]);

//     // when
//     const user = new User();

//     // then
//     await expect(user.buyLotto()).rejects.toThrow(
//       ERRORS.INVALID_PURCHASE_AMOUNT
//     );
//   });

//   test("로또 개수 테스트", async () => {
//     // given
//     mockQuestions(["8000"]);

//     // when
//     const user = new User();
//     const lottoManager = new LottoManager();
//     lottoManager.setUser(user);

//     await user.buyLotto();
//     lottoManager.calculateLottoCount();

//     // then
//     expect(lottoManager.lottoCount).toBe(8);
//   });
// });
