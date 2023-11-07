import * as MissionUtils from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#duplicate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  #duplicate(numbers){
    const set = new Set(numbers);
    if(numbers.length>set.size){
      throw new Error("[ERROR]");
    }
  }
  
  async compare(oneLotto,bonus,result){
    const inter = this.#numbers.filter(x=>oneLotto.includes(x));
    switch(inter.length){
      case 3:
        result[4]++;
        break;
      case 4:
        result[3]++;
        break;
      case 5:
        if(oneLotto.includes(bonus)) result[1]++;
        else result[2]++;
        break;
      case 6:
        result[0]++;
        break;
    }
  }

  async printResult(result){
    var printArr = ["6개 일치 (2,000,000,000원)","5개 일치, 보너스 볼 일치 (30,000,000원)","5개 일치 (1,500,000원)","4개 일치 (50,000원)","3개 일치 (5,000원)"];
    MissionUtils.Console.print("\n당첨 통계\n---");
    for(let i =4;i>=0;i--){
      MissionUtils.Console.print(printArr[i]+" - "+result[i]+"개");
    }
  }

  lottoSum(result){
    let sum =0;
    for(let i =0;i<result.length;i++){
      switch(i){
        case 0:
          sum+=(2000000000*result[i]);
          break;
        case 1:
          sum+=(30000000*result[i]);
          break;
        case 2:
          sum+=(1500000*result[i]);
          break;
        case 3:
          sum+=(50000*result[i]);
          break;
        case 4:
          sum+=(5000*result[i]);
          break;
      }
    }
    return sum;
  }

  printPrice(sum,price){
    let number = sum/price*100;
    let a = parseFloat(number.toFixed(2));
    MissionUtils.Console.print("총 수익률은 "+a+"%입니다.");
  }

}

export default Lotto;
