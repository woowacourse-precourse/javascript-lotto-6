import { Console } from '@woowacourse/mission-utils';
// 기능6. 당첨 결과 출력
export function winningprint(output) {
  Console.print(`3개 일치 (5,000원) - ${output['5']}개`);
  Console.print(`4개 일치 (50,000원) - ${output['4']}개`);
  Console.print(`5개 일치 (1,500,000원) - ${output['3']}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${output['2']}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${output['1']}개`);
}
