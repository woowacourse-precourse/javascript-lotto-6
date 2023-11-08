# 기능 목록 정리

---

## 구매 금액과 총 구매 개수

> [x] 구매 금액 입력을 묻기
> [x] 구매 금액 입력을 배열에 저장하기
> [x] 구매 금액 입력을 출력하기
> [] 구매 금액 입력을 활용해서 몇 개 구매가 가능한 지 계산하기
> [] 몇 개가 구매가 가능한 지 저장하기
> [] 구매가 가능한 횟수 만큼 구매했다는 메시지 출력

## 구매 로또 번호 생성

> [] 1~45 중 중복되지 않는 번호 6개를 생성하는 클래스 생성
> [] 구매한 횟수에 해당하는 로또 번호 생성
> [] 로또 번호 생성된 값을 저장
> [] 그 값들을 출력

## 당첨 로또 번호 생성

> [] 당첨 로또 번호를 입력받음
> [] 당청 로또 번호 저장
> [] 위의 로또 번호를 제외한 숫자 중 하나를 보너스 숫자로 입력받음

## 로또 당첨 확인

> [] 1등 확인을 위해 보너스 숫자를 제외한 로또 당첨 번호와 플레이어의 번호를 비교
> [] 2등 확인 : 5개 일치 && 보너스 볼 일치
> [] 3~5등 확인 : 5개, 4개 3개 일치 한지 확인

## 당첨 통계

> [] 당첨 통계라는 문구 출력
> [] '---'라는 문구로 줄 나눔
> [] 3개 일치 개수 출력
> [] 4개 일치 개수 출력
> [] 5개 일치 개수 출력
> [] 5개 일치, 보너스 볼 일치 개수 출력
> [] 6개 일치 개수 출력

## 수익률 계산

> [] 전체 번 금액을 합계
> [] 전체 번 금액을 저장
> [] 수익율을 계산 후 저장
> [] 수익율 출력

---

## 클래스 정리

### App.js

### Lotto.js

> [x] Purchase 클래스 : 구매금액 묻고, 입력받고, 저장하고, 출력까지
> [] 로또 번호 생성 클래스 : 몇개를 구매했는지를 참고하여 그 개수에 맞게 로또 번호를 생성시킴
> [] 당첨 통계 클래스 : 몇개를 맞췄는지 확인하고, 그에 따라 분류하고 출력
> [] 수익률 계산 클래스 : 전체 번 금액, 수익율 계산
