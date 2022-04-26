---
title: Window, Mac 사용자가 함께 일하기 - Git autocrlf
subtitle: Window, Mac, CRLF, LF
date: 2022-04-18
tags: ['Window', 'Mac OS', 'Git']
excerpt:
  [
    'https://simsimjae.medium.com/vscode%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%A0%EB%95%8C-%EC%9C%88%EB%8F%84%EC%9A%B0%EC%9D%98-crlf%EC%99%80-%EB%A7%A5%EC%9D%98-lf-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0-51ba3fb76cc3',
    'https://wooogy-egg.tistory.com/56',
    'https://director-joe.kr/89',
  ]
---

종종 Mac, Window 사용자가 함께 작업할 때 자주 마주칠 수 있는 대표적인 문제로 개행 이슈가 있다.

Window에서는 CR(Carriage-Return, \r)과 LF(Line Feed, \n)을 모두 사용하고, Mac OS 또는 Unix는 LF만 사용하기 때문이다.

매번 코드를 최신화할 때마다 개행 차이로 코드가 서로 다르다고 인식하는 일을 방지하기 위해 또 설정해둔 eslint로부터 자동 에러 감지를 피하기 위해 몇 가지 설정을 맞춰줄 필요가 있다.

팀에서 대다수가 Mac 환경을 쓰고 있어, Window 사용자의 Git 설정을 바꿔주는 방식으로 해결할 수 있었다.

`core.autocrlf`는 git object에 체크인할 때 개행 문자를 처리하는 옵션으로, 아래의 세 가지 설정이 가능하다.

- `core.autocrlf = false(default)`
- `core.autocrlf = true`
- `core.autocrlf = input`

## `core.autocrlf = false(default)`

Line ending과 관계 없이 git object에 파일 내용을 그대로 반영하는 것으로, 기본값이므로 사용자가 서로 다른 환경에서 작업할 경우 해당 설정일 것이다.

## `core.autocrlf = true`

Git object 체크인 시 CRLF -> LF 로 변경한다. 반대로 체크아웃 시 LF -> CRLF 로 변경해준다. 따라서 윈도우 사용자는 위 명령어로 Window 유저는 새로 pull 받은 코드(mac 기준, LF)를 윈도우의 개행 법칙(CRLF)대로 바꿀 수 있다. 또, 반대로 코드를 push할 때는 CRLF -> LF로 변경하도록 한다.

```
git config --global core.autocrlf true
```

## `core.autocrlf = input`

Git object 체크인 시 CRLF 가 있다면 LF로 변경하며, 체크아웃 시 별도의 개행 바꿈 없이 텍스트를 그대로 받아온다. Mac OS, Linux, Unix 사용자는 LF만 사용하므로 Git 체크인 시 텍스트를 LF로 변경할 수 있도록 input으로 설정한다.

```
git config --global core.autocrlf input
```
