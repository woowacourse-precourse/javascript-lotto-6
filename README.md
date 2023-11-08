# 기능 명세서

기능 명세서는 객체와 객체가 담당할 기능, 기능별 달성 목표로 이루어져 있습니다.

- 는 객체에 포함된 데이터를,

1. 는 객체가 담당할 기능을,

- [ ] 는 기능별 달성 목표(test 작성 지표)를 의미합니다.

## 도메인

(사용자로부터) 금액과 당첨 번호를 입력 받아, 로또 목록을 생성하고, 규칙에 따라 당첨금을 계산하고, 수익률을 반환한다.

## 객체

- 질문자 (input담당)
- 질문 확인자 (validator)
- 발표자 (output담당)

- 당첨 조건 (당첨 조건과 금액 정보 저장)
- 로또 규칙 (당첨 조건들 생성, 당첨 조건 목록 저장)

- 로또 (로또 정보 저장)
- 로또 목록 (로또 생성, 로또 목록 저장)

- 당첨 관리자 (규칙에 맞게 순위별 당첨 로또 개수 계산)
- 총 수익률 계산자 (수익률 계산)

## 기능

### 질문자

1. 입력 받는다.
2. 판별 후 다시 입력 받는다.
      - [ ] 판별에 실패했을 경우 다시 질문 받아야 한다.

### 질문 확인자

1. 금액 형식을 판별한다.
      - [ ] 금액은 자연수여야 한다.
      - [ ] 금액은 1000의 배수여야 한다.
2. 당첨 번호를 판별한다.
      - [ ] 당첨 번호는 ,로 나눴을 때 중복되지 않는 6개의 숫자로 이루어져 있어야 한다.
      - [ ] 각각의 번호는 1~45 사이의 숫자여야 한다.
3. 보너스 번호를 판별한다.
      - [ ] 보너스 번호는 자연수여야 한다.

### 발표자

1. 로또 목록을 출력한다.
      - [ ] 로또 목록을 올바른 형식으로 출력해야 한다.
2. 당첨 결과를 출력한다.
      - [ ] 당첨 결과를 올바른 형식으로 출력해야 한다.
3. 총 수익률을 출력한다.
      - [ ] 수익률을 올바른 형식으로 출력해야 한다.

### 당첨 조건

1. 조건에 맞는지 판별한다.
      - [ ] 일치 개수, 보너스 개수를 입력받으면 조건에 맞는지 판별해주어야한다.
2. 당첨금을 반환한다.
      - [ ] 일치 개수, 보너스 개수를 입력받아 조건에 맞으면 당첨금을 반환한다.
3. 데이터를 반환한다.

### 로또 규칙

- 순위별 당첨금

1. 당첨 조건을 생성한다.
2. 당첨 조건을 생성해 오름차순으로 목록에 저장한다.
3. 당첨 조건을 반환한다.
      - [ ] 반환된 로또 규칙은 당첨금에 대해 오름차순으로 정렬되어 있어야 한다.

### 로또 :

- 로또 번호 6자리 (배열)

1. 번호를 반환한다.
      - [ ] 번호를 반환해야 한다.
2. 번호를 오름차순으로 유지한다.
      - [ ] 반환된 번호는 오름차순이어야 한다.

### 로또 목록

- 로또 목록

1. 로또를 생성한다.
2. 로또를 생성해 목록에 저장한다.
3. 로또 목록을 반환한다.
      - [ ] 반환된 로또 목록에 올바른 로또가, 원하는 개수만큼 생성되어있어야 한다.

### 당첨 관리자

- 로또 구매 결과

1. 로또, 당첨 번호를 받으면, 몇 개가 일치하는지 판별한다.
2. 로또 규칙에 따라 로또 목록에서 로또 구매 결과를 계산한다.
      - [ ] 로또 규칙에 따라 당첨된 로또가 몇 개인지 올바르게 반환해야 한다.
3. 로또 구매 결과를 반환한다.

### 총 수익률 계산자

- 총 수익률

1. 금액, 로또 구매 결과, 로또 규칙 3가지를 이용해 총 수익률을 계산한다.
      - [ ] 로또 규칙에 명시된 금액에 맞게 수익률을 계산해야 한다.
2. 총 수익률을 반환한다.
      - [ ] 총 수익률을 형식에 맞게 반환해야 한다.
