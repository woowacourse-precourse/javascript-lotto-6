# 🚘javascript-racingcar-6🚗 #

### 작성자
프론트엔드 6기 참가자 조수민

# 📂구조
```
+ src
  + constants
    └ constants.js --- constants를 선언한 파일
  + controller
    └ Controller.js -- model과 view를 컨트롤 하는 controller
  + model
    └ Lotto.js ------------- 정답 로또 번호 객체
    └ Statistics.js -------- 결과 통계를 담당하는 객체
    └ UserLotto.js --------- 유저의 로또를 구매하고 관리하는 객체
    └ UserLottoNumber.js --- 실제 유저의 로또 번호를 저장한 객체
  + view
    └ InputView.js ---- 입력 객체
    └ OutputView.js --- 출력 객체
└ App.js --- 프로그램 실행 진입점
└ index.js -- App.play()

```

### eslint 설정
```
{
	"parserOptions": {
    "ecmaVersion": 2022
  },
	"extends": ["airbnb", "plugin:prettier/recommended"],
	"rules": {
		"class-methods-use-this": "off",
		"prettier/prettier": "error",
		"lines-between-class-members": "off",
		"import/prefer-default-export": "off",
		"import/extensions": "off",
		"no-useless-constructor": "off"
	}
}
```



# 🗂기능 구현 목록

## Lotto.js

### 🔬variable

  - #numbers - 로또 번호를 저장하는 배열

### 🛠주요 메소드

__constructor(numbers)__ 

  - 배열 numbers를 인자로 받아서 this.#numbers 초기화

__#validate(number)__

  - [x] 숫자가 아니면 에러 발생
  - [x] 1~45 사이의 숫자가 아니면 에러 발생
  - [x] 길이가 6이 아니면 에러 발생
  - [x] 중복되는 숫자가 있으면 에러 발생

___

## WinningLotto.js

### 🔬variable

  - #bonusNumber - 보너스 번호를 저장하는 변수

### 🛠주요 메소드

__constructor()__

  - Lotto.js를 상속받아서 Lotto 객체를 초기화

__getFullLottoNumber()__

  - 보너스 번호를 포함한 로또 번호를 { numbers: [], bonusNumber: number } 형태로 반환

  #bonusValidate(number)

  - [x] 보너스 번호가 숫자가 아니면 에러 발생
  - [x] 보너스 번호가 1~45 사이의 숫자가 아니면 에러 발생
  - [x] 보너스 번호가 로또 번호와 중복되면 에러 발생

---

## Statistics.js

### 🔬variable

  - #rateOfReturn - 수익률
  - #statistics - 통계 결과를 저장하는 객체

### 🛠주요 메소드

__constructor()__

  - 수익률 this.#rateOfReturn와 결과값 객체 this.#statistics를 초기화

__calculateStatistics(matchingResult, purchaseAmount)__

  - 유저의 로또와 정답 로또를 인자로 받아서 통계 결과를 this.#statistics에 저장

---

## UserLotto.js ##

### 🔬variable
  - #purchaseAmount - 구매 금액
  - #numberOfLotto - 구매한 로또의 개수
  - #userLottoNumbers - 유저의 로또를 저장하는 배열

### 🛠주요 메소드

__constructor(purchaseAmount)__

  - 구매 금액을 인자로 받아서 this.#purchaseAmount 초기화

__calculateMatchingNumber(winningLotto)__

  - 정답 로또를 객체를 인자로 받아서 결과에 따라 등수를 객체로 반환

__validate(purchaseAmount)__

  - [x] 구매 금액이 숫자가 아니면 에러 발생
  - [x] 구매 금액이 음수거나 40억 초과하면 에러 발생
  - [x] 구매 금액이 1000원 단위가 아니면 에러 발생

___

## UserLottoNumber.js ##

### 🔬variable
  - #lottoNumber - 로또 번호를 저장하는 배열

### 🛠주요 메소드

__constructor()__

  - generateLottoNumber()를 통해 - this.#lottoNumber를 초기화

__generateLottoNumber()__

  - pickUniqueNumberInRange()를 통해 중복되지 않는 숫자를 생성
  1~45 사이의 숫자를 랜덤으로 생성하여 this.#lottoNumber에 저장

__calculateMatchingNumber(winningLotto)__

  - 정답 로또 객체를 인자로 받아서 결과에 따라 등수를 반환


---


## Controller.js ##

### 🔬variable
  - #userLotto - UserLotto class 객체
  - #winningLotto - Lotto class 객체
  - #statistics - Statistics class 객체
  - #inputView - InputView class 객체
  - #outputView - OutputView class 객체

### 🛠주요 메소드

__constructor()__

  - inputView
  outputView
  statisitcs
  객체를 초기화

__buyLotto()__

  - 구매 금액을 입력받아서 UserLotto 객체를 만드고 유저 로또 번호를 생성

__printUserLottoNumbers()__

  - 유저의 로또 번호 생성 결과를 출력

__setWinningLottoNumbers()__

  - 정답 로또 번호를 입력받아서 Lotto 객체를 생성

__setBonusNumber()__

  - 보너스 번호를 입력받아서 Lotto 객체에 보너스 번호를 저장

__calculateStatistics()__

  - 유저의 로또와 정답 로또를 비교한 최종 통계 결과를 계산

__printStatistics(result)__

  - 최종 통계 결과를 출력

___


## InputView.js ##

  - Console.readLineAsync()를 활용해 입력을 담당하는 클래스

___

## OutputView.js ##

  - 템플릿 문자열 처리와 Console.log()를 활용해 출력을 담당하는 클래스
