import { MissionUtils } from "@woowacourse/mission-utils";

// class 나눌거면 상속으로 count 받아와야 하고 위쪽 APP에서 아래 클래스 다 진행시킬 수 있게.
// ㄴ 돌아가는 꼴을 봐서는 Lotto 쪽에 합치고 여기에서는 Lotto.js 파일을 받아와서 진행하는 방향일듯
// ㄴ 여기서 숫자 받아오는 걸 짜서 Lotto 쪽에 numbers를 건내주고 거기서 validate를 진행하는 것이 나을수도
export default class progressLotto {
    getMyLottos() {
      const arrayNumbers = [];
      
      for(let i = 0; i < this.count; i++){
        const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1,45,6)
        arrayNumbers.push(lottoNumber.sort());
      }
      this.printHowMany(this.count,arrayNumbers);
      this.getWinningLottos(arrayNumbers);
    }
  
    getWinningLottos(arrayNumbers) {
      const sameNumbersObject = {
        'three' : 0,
        'four' : 0,
        'five' : 0,
        'six' : 0,
        'bonus' : 0
      }
      for(let i = 0; i < this.count; i++){
        const newArray = [...arrayNumbers,...this.winning]
        const sameNumbers = arrayNumbers.filter(newArray);
        this.checkSameNumbers(sameNumbers,sameNumbersObject)
      }
    }
    
    checkSameNumbers(sameNumbers,sameNumbersObject) {
      switch (sameNumbers.length) {
        case 3:
          sameNumbersObject['three']++
          break;
        case 4:
          sameNumbersObject['four']++
          break;
        case 5:
          sameNumbersObject['five']++
          break;
        case 6:
          sameNumbersObject['six']++
          break;      
        default:
          return sameNumbersObject
      }
      if(sameNumbers.length === 5 && arrayNumbers.includes(checkBonusNumber)) {
        sameNumbersObject['bonus']++
      }
      return sameNumbersObject
    }
    
    printHowMany(count, arrayNumbers) {
        MissionUtils.Console.print(`${count}개를 구매했습니다.`);
        arrayNumbers.forEach(element => {
          MissionUtils.Console.print(element);
        })
    }
  }
  