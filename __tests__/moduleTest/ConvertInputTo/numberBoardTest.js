// import ConvertInputTo from '../../../src/modules/ConvertInputTo';
// import { Console } from '@woowacourse/mission-utils';

// const ERROR_FORMAT = '[ERROR]';

// const MISS_STATE = 0;
// const BONUS_STATE = 0.5;
// const HIT_STATE = 1;

// const LOTTO_UPPER_NUMBER = 45;

// const mockQuestions = inputs => {
//   let nowIndex = 0;
//   Console.readLineAsync = jest.fn();
//   Console.readLineAsync.mockImplementation(() => {
//     const input = inputs[nowIndex++];

//     return Promise.resolve(input);
//   });
// };

// const linearBoardMaker = winningNumbers => {
//   const board = [MISS_STATE];
//   for (let number = 1; number <= LOTTO_UPPER_NUMBER; number++) {
//     if (winningNumbers.includes(number)) board[number] = HIT_STATE;
//     if (!winningNumbers.includes(number)) board[number] = MISS_STATE;
//   }

//   return Object.freeze(board);
// };

// describe('lottoBoard()', () => {
//   test.each([
//     [['1,2,3,4,5,6'], linearBoardMaker([1, 2, 3, 4, 5, 6])],
//     [['4,5,6,7,8,9'], linearBoardMaker([4, 5, 6, 7, 8, 9])],
//   ])('정상작동', async (input, expectedValue) => {
//     //given
//     mockQuestions(input);

//     //when
//     const result = await ConvertInputTo.lottoBoard();
//     //then
//     expect(result).toEqual(expectedValue);
//   });

//   test.each([
//     [['1,2,3,4,5']],
//     [['1,2,3,4,5']],
//     [['1,2,3,4,5,6,7']],
//     [['0,1,2,3,4,5,6']],
//     [['46,45,44,43,42,41']],
//     [['1,1,1,1,1,1']],
//     [[',,,,,']],
//   ])('예외처리', async input => {
//     //given
//     mockQuestions(input);

//     //then
//     await expect(ConvertInputTo.lottoBoard()).toThrow(ERROR_FORMAT);
//   });
// });
