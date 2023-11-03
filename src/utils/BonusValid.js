class BonusValid {
    BonusIsValid(number) {
        if (number.includes('')){
            throw new Error('[ERROR]'); // 임시
        }
        return true;
    }
}

export default BonusValid;