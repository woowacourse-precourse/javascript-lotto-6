class Cash {
    #CASHDATA;
    constructor(CASHDATA) {
     this.isNumber(CASHDATA);
     this.isThousand(CASHDATA);
     
    }

    isNumber(CASHDATA) {
        if(isNaN(CASHDATA)) throw new Error("[ERROR]숫자를 입력해주세요.")
    }
    isThousand(CASHDATA) {
        if(CASHDATA % 1000 != 0) throw new Error("[ERROR]금액은 1000단위로 입력해주세요.");
    }
}

export default Cash;