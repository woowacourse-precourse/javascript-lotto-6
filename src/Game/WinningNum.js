import { winningrule } from './WinningRule.js';
// 기능5. 당첨 갯수 저장
export function winningnum(arrary, bonusnum) {
  // prettier-ignore
  const result = { '5': 0, '4': 0, '3': 0, '2': 0, '1': 0 };
  for (let i = 0; i < arrary.length; i++) {
    winningrule(arrary, bonusnum, i, result);
  }
  return result;
}
