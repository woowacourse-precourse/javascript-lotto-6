import { Console } from "@woowacourse/mission-utils";

class WinningNumbers {
  constructor(numbers) {
    this.validate(numbers);
    this.value = numbers;
  }
  validate(numbers){
    
    let words = String(numbers).split(',');
    const setCollection = new Set(words);
    const isDuplicate = setCollection.size < words.length;

    words.forEach(element => {
      if(isNaN(element)){
        throw new Error('[ERROR] 당첨 번호는 숫자만 가능합니다.');
      }
      if (element>45 || element<0){
        throw new Error('[ERROR] 당첨 번호는 1~45 범위 내에서만 가능합니다.');
      }
    });
    if(Object.values(words).length!=6){
      throw new Error('[ERROR] 당첨 번호는 6자리만 가능합니다.');
    }
    if(Object.values(words).includes(' ')){
      throw new Error('[ERROR] 당첨 번호는 공백을 포함할 수 없습니다.');
    }
    if(isDuplicate!=false){
      throw new Error('[ERROR] 당첨 번호는 중복을 포함할 수 없습니다.');
    }

    

  }
}
export default WinningNumbers;