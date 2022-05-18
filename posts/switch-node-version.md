---
title: NVM으로 node version 관리하기
date: 2022-05-28
tags: ['node', 'NVM']
excerpt:
  [
    'https://velog.io/@devyang97/nvm%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-Node.js-LTS-%EB%B2%84%EC%A0%84-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0',
    'https://blog.logrocket.com/how-switch-node-js-versions-nvm/',
  ]
---

## NVM 설치

가끔 node 버전이 맞지 않아 에러가 나는 경우가 있다. 특히 여러 프로젝트를 동시에 진행할 경우, 프로젝트를 스위치하며 사용할 때 다른 버전의 node가 필요해질 수 있다.

Node Version Manager(NVM)와 CLI를 통해 쉽고 빠르게 다양한 버전의 node를 관리할 수 있다. NVM은 일종의 yarn, npm 같은 node용 패키지 매니저이다.

만일 nvm 설치 여부를 확인하고 싶다면 터미널에 `nvm`을 입력해보고, `Command 'nvm' not found` 같은 문구가 보인다면, 아래 명령어를 통해 nvm을 설치해주자.

```zsh
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

`cURL`은 대부분의 리눅스 기반의 운영체제에서 사용 가능한 명령어이다. client URL을 의미하는데, 서버 사이에서 데이터를 이동시키기 위해 사용하는 CLI 툴이다.

설치가 끝나면 터미널을 종료하고 재시작한다.

아까와 같이 `nvm`을 입력하면, `Node Version Manager ~.. `와 같은 문구가 보일 것이다.

## 필요한 Node 버전 다운 받기

만일 LTS 버전이 필요하다면 아래처럼 사용 가능하다.

```zsh
nvm install --lts

nvm install --<the node version you need> # 필요한 노드 버전을 명시하고 다운 받을 수 있다.
```

## 필요한 Node 버전으로 스위치하기

해당 프로젝트에서 필요한 노드 버전이 다르다면 아래 명령어를 통해 빠르게 스위치 할 수 있다.

```zsh
nvm use <the node version you need>
```

## 필요하지 않은 Node 버전 삭제하기

```zsh
nvm uninstall <the version number you want to remove>
```

이제 아주 손쉽게 버전이 맞지 않아 생기는 이슈를 해결할 수 있게 되었다.
