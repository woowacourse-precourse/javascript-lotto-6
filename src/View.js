import { Console } from "@woowacourse/mission-utils";

class View {

  static async inputAmountOfMoney() {
    const inputAmount = await Console.readLineAsync('구입 금액을 입력해 주세요.\n')
    return inputAmount;
  } 

  static async outputUserLottosList(list, count){
    Console.print(`\n${count}개를 구매했습니다.`)
    list.forEach(lottos => {
        Console.print(lottos.sort((a,b)=>a - b));
    });
  }
}

export default View;