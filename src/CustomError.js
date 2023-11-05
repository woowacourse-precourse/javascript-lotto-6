class CustomError extends Error {
	constructor(value, ...params) {
		this.super(...params);
		this.message = [...params];
		this.name = value;
	}
}

export default CustomError;




//예외 상황들 => 입력값을 받을 때 => 3번 

1. 금액낼 때
input => (없음), 공백, 특수문자, 영어, 한글, => 모든 string
				- noInput
				blank
				specialNums
				string

2. 당첨 번호 낼 때
3. 보너스 번호 낼 때
