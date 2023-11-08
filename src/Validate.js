class Validate {

  DivisibleBy1000(number) {
    if(number%1000 !== 0) throw Error('[ERROR] 1000 단위로 입력해주세요')
  }

}

export default Validate