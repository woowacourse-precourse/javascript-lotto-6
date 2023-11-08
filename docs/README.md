# 🎰 로또 게임

## ✨ 기능 구현 목록 설계

### 입력받기

- [x] 로또 구입 금액 입력받기 (1000원 단위로)
- [x] 당첨 번호 입력받기 (쉼표 기준으로 구분)
- [x] 보너스 번호 입력받기
- [x] 예외 발생 후 그 부분부터 다시 입력받기

### 예외

- [x] 로또 구입 금액 입력: 1000원 단위로 끊어지지 않는 경우
- [x] 당첨 번호 입력: 숫자 중복 입력
- [x] 당첨 번호 입력: 6개보다 적거나 많은 당첨번호 입력
- [x] 로또금액, 당첨번호, 보너스 번호: 입력 없음
- [x] 로또금액, 당첨번호, 보너스 번호: 숫자가 아닌 문자(알파벳, 기호 등등) 입력
- [x] 로또금액, 당첨번호, 보너스 번호: 0 이하의 수 또는 음수 입력
- [x] 당첨번호, 보너스 번호: 1 ~ 45 범위를 벗어난 숫자 입력

### 게임 진행하기

- [x] 1 ~ 45 중 중복되지 않는 6개의 숫자를 뽑기
- [x] 일치하는 번호 개수 구하기
- [x] 등수 계산하기
- [x] 수익률 계산하기

### 결과 출력하기

- [x] 구매한 로또 개수와 로또 번호 출력
- [x] 게임 종료 후, 일치하는 번호의 개수와 당첨금, 수익률 출력

## 폴더 구조

```
lotto
  ├── App.js
  ├── index.js
  ├── Lotto.js
  ├── WinningLotto.js
  ├── lottoGame
  │   ├── LottoGame.js
  │   ├── LottoGameUtils.js
  │
  ├── utils
  │   ├── UserInput.js
  │   ├── InputValidate.js
  │   ├── constants.js
  │
  ├── errors
  │   ├── InputError.js

```

📄 App.js ...게임 시작부터 종료까지 루틴을 관리하는 로직
📄 Lotto.js ... 랜덤 로또 클래스
📄 WinningLotto.js ... 당첨 로또 클래스(사용자 입력)

📂 **lottoGame** 로또 게임 진행에 필요한 파일을 관리하는 폴더  
 ㄴ📄 LottoGame.js ...로또 게임에 필요한 함수들을 관리하는 클래스  
  ㄴ➰ generateLotto() ...구입 금액에 따라 로또를 발행하는 함수  
  ㄴ➰ calculateWinners() ...최종 결과 계산하는 함수  
 ㄴ📄 lottoGameUtils.js ...LottoGame 클래스 내부의 유틸리티 함수를 관리하는 파일  
  ㄴ➰ generateRandomNumber() ...랜덤 숫자 생성하는 함수  
  ㄴ➰ ascendingSort() ...오름차순 정렬 함수

📂 **utils** 유틸들을 모아놓은 폴더  
 ㄴ📄 UserInput.js ...유저에게 입력을 받고 리턴하는 함수들이 저장된 클래스  
  ㄴ➰ getPurchaseAmount() ...구매 금액 입력  
  ㄴ➰ getLottoNumbers() ...당첨 번호 입력  
  ㄴ➰ getBonusNumber() ...보너스 번호 입력  
 ㄴ📄 InputValidate.js ...입력 받은 값을 검증 후 리턴하는 함수들이 저장된 클래스  
 ㄴ📄 constants.js ...상수값을 관리하는 함수

📂 **errors** 예외 처리 파일을 관리하는 폴더  
 ㄴ📄 InputError.js ...입력 시 발생하는 에러들을 관리하는 클래스
