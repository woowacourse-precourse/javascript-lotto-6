## [domain]

### 1. LottoSeller

- 구입한 수량만큼 로또 번호 세트 생성
- winningNumber 생성

### 2. Lotto

사용자 입력값을 받아 Lotto 객체를 만든다

### 3. Lottos

Lottos를 만들어주는 일급 컬렉션

### 4. BonusNumber

사용자 입력값을 받아 bonusNumber 객체를 만든다

### 5. LottoMachine

- 추첨기계가 로또가 당첨됐는지 비교해줌
- 당첨 번호, 보너스 번호를 받아서 생성
- 당첨 결과를 담은 객체(dto)로 반환
-

### 6. EarningRate

수익률 계산

## [dto]

1. Lotto
2. Lottos
3. WinningNumber

## [view]

1. InputView
   사용자 입력 시 보여지는 화면

2. OutputView
   데이터를 받아 랜더링 해서 출력
   출력 시 보여지는 화면

3. InputValidator
   사용자 인풋의 유효성 검증

4. InputConverter
   사용자 인풋을 배열로 변환

## [controller]

1. LottoController

# 자주 실수하는 부분

- 타입은 항상 클래스 명 -> 대문자 시작

- 변수는 항상 인스턴스명 -> 소문자 시작

- 생성자는 리턴이 없음

- 인자 순서는 항상 조심하자

- `async`는 전파되므로 호출하는 함수 내에 하나라도 `async`를 포함하고 있다면 호출자 역시 `async`가 된다.
  미션에서는 계속해서 `Console.readLineAsync`가 `async`이므로 입력이 포함되는 함수는 모두 `async`가 된다. `async`를 호출할 때 자꾸 `await`를 빼먹는 부분을 조심하자.
  `await`를 빼먹으면 빈 `promise`를 즉시 반환하고 아래 함수를 호출해버려서 예상대로 실행되지 않는다!