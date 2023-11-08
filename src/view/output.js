import { Console } from '@woowacourse/mission-utils';

export const resultPrint = (match) => {
  const keys = Object.keys(match);
  keys.forEach((key) => {
    if (key == '3개 일치') {
      Console.print(`${key} (5,000원) - ${match[key]}개`);
    }
    if (key == '4개 일치') {
      Console.print(`${key} (50,000원) - ${match[key]}개`);
    }
    if (key == '5개 일치') {
      Console.print(`${key} (1,500,000원) - ${match[key]}개`);
    }
    if (key == '5개 일치, 보너스 볼 일치') {
      Console.print(`${key} (30,000,000원) - ${match[key]}개`);
    }
    if (key == '6개 일치') {
      Console.print(`${key} (2,000,000,000원) - ${match[key]}개`);
    }
  });
  
}
