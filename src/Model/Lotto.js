class Lotto {
  #numbers

  constructor(numbers) {
    this.#validate(numbers)
    this.#numbers = numbers
  }

    #validate(numbers) {
        this.#checkLength(numbers)
        this.#checkDuplicate(numbers)
        this.#checkElements(numbers)
    }

    #checkLength(array){
        if(array.length !== 6) throw new Error('[ERROR] 로또 번호는 6개여야 합니다.')
    }

    #checkDuplicate(array){
        const set = new Set(array)
        if(set.size !== array.length) throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.')
    }

    #checkElements(array){
        array.forEach(element => {
            if(isNaN(element)) throw new Error('[ERROR]')
        })
    }

    getNumbers(){
        return this.#numbers
    }
}

export default Lotto;
