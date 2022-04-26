---
title: React 절대 경로 사용하기
subtitle: import ? from '../../../../';
date: 2022-04-22
tags: ['React', '절대 경로']
excerpt: ['https://imkh.dev/react-absolute-path/']
---

프로젝트 루트에서 jsconfig.json 또는 tsconfig.json 에서 아래 값들을 추가해준다. "include" property에서는 src 하위의 파일들에서 절대 경로를 사용하겠다는 의미. `eslintrc.js`, `tailwind.config.js`에서도 각각 사용할 필요가 있어서 추가해주었다.

```js
{
  "compilerOptions": {
    "baseUrl": "src",
  },
  "include": ["src", ".eslintrc.js", "tailwind.config.js"]
}
```

실제 tailwind.config.js 같은 파일로 들어가보면, 아래처럼 src 바로 하단의 assets 폴더로 접근이 가능하다.

```js
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'somebackground-image': "url('assets/icons/some-icon.svg')",
      },
    },
  },
};
```
