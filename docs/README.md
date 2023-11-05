# 기능 구현 목록

### domain 파일

- LotteryMachine : 로또 티켓 발행기

- LottoReader : 로또 티켓, 사용자 입력정보를 읽는 역할

- LottoRankMaker : 로또 등수 계산 로직

- LottoStatistic : 로또 당첨 통계 계산 로직

<br>

### util 파일

- EarningRate : 증가율 계산기

<br>

### constants 파일

- 비즈니스 숫자들 상수화

- 로또 ui 메세지 상수화

- 에러 메세지 상수화

<br>

### ui 파일

- LottoManager : 사용자 입력 처리 

- LottoStamper : 출력 처리

<br>

### error 파일

- Validation : 사용자 입력에 대한 유효성 검증 로직 내포
- CustomError : PREFIX [ERROR] 를 위한 CustomError 클래스 구현

<br>

### App.js
프로그램 시작점
````
const lottoManager = new LottoManager();
lottoManager.startLottoSimulator(); 
````
<br>

## 예외 처리


### 구매 금액 입력
1. 0~9 이외의 숫자를 가지고 있거나
2. % 1000 = 0 이 아니거나
3. 10만원 초과시 에러

### 당첨 번호 입력
1. 0~9 와 , 이외의 모든것 에러
2. 쉼표 기준 배열 길이가 6이 아닐시 에러
3. 중복된 숫자가 있을시 에러
4. 1 ~ 45 사이의 숫자가 아닐시 에러

### 보너스 번호 입력
1. 당첨 번호와 중복시 에러
2. 1~45 이외의 숫자시 에러

### 공통
1. 공백 금지