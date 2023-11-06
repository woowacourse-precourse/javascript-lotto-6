import { Console } from "@woowacourse/mission-utils"

class Compare{
  #lotto
  #bonus
  #result

  constructor(lotto, bonus){
    this.#lotto = lotto
    this.#bonus = bonus
    this.#result = {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    }
  }

  async compareLotto(array){
    array.forEach((numbers) => {
      this.#checkWinNumbers(numbers)
    })

    return this.#result

  }

  #checkWinNumbers(numbers){
    let count = 0
    let bonusCount = 0
    const isBonus = numbers.find((win) => this.#bonus === win)

    if(isBonus) bonusCount++

    this.#lotto.forEach((number) => {
      const includes = numbers.find((win) => number === win)

      if(includes) count++

    })

    if(count === 5 && bonusCount === 1){
      this.#result['2']++
      return;
    }

    switch(count){
      case 6 :
        this.#result['1']++
        break;

      case 5 :
        this.#result['3']++
        break;

      case 4 :
        this.#result['4']++
        break;

      case 3 : 
        this.#result['5']++
        break;
    }
  }
}

export default Compare