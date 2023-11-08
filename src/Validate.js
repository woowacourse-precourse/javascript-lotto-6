class Validate {
    WARNING = Object.freeze({
        AMOUNT : '[ERROR] 잘못된 입력입니다. 1000원 단위의 금액을 입력하시오.',
        BONUS : '[ERROR] 잘못된 입력입니다. 보너스 번호는 1~45 안의 자연수입니다.'
    });

    amountInput = (input) => {
            if (isNaN(input)) throw new Error(this.WARNING.AMOUNT);
            if ((input % 1000) !== 0) throw new Error(this.WARNING.AMOUNT);
            if (input === 0 || '') throw new Error(this.WARNING.AMOUNT);
    }

    bonusInput = (bonus, numbers) => {
            if (isNaN(bonus)) throw new Error(this.WARNING.BONUS);
    if (bonus > 45 || bonus < 1) throw new Error(this.WARNING.BONUS);
    if (!Number.isInteger(bonus)) throw new Error(this.WARNING.BONUS);
    if (numbers.includes(bonus)) throw new Error(this.WARNING.BONUS);        
    }
}

export default Validate;