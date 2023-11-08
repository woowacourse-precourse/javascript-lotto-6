class Lotto {

    #numbers;
    // 복권 티켓의 숫자를 초기화하고 유효성을 검사
    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }
    // 복권 번호 배열을 유효성 검사하는 비공개 메서드
    #validate(numbers) {
        const LOTTO_LENGTH = 6;
        const set = new Set(numbers);
        // 중복된 숫자가 제거되고 유일한 숫자만 포함
        const newNumbers = [...set];
        // 예외처리 숫자 6개가 아니라면
        if(newNumbers.length !== LOTTO_LENGTH) {
            throw new Error("[ERROR] 로또 번호는 중복되지 않는 숫자 6개여야 합니다.")
        }
    }

    // 이 메서드를 통해 숫자 배열을 외부에서 읽을 수 있게 됩니다.
    getNumbers() {
        return this.#numbers;
    }
}

export default Lotto;