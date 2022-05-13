---
title: next.config.js error handling
subtitle: Cannot use import statement outside a module
series: nextjs-dev-blog
date: 2022-05-13
tags: ['Next.js', 'blog']
excerpt:
  [
    'https://stackoverflow.com/questions/62488898/node-js-syntaxerror-cannot-use-import-statement-outside-a-module',
  ]
---

```js
// next.config.js
import { withContentlayer } from 'next-contentlayer';

export default withContentlayer({
  basePath: '/',
});
```

이때 SyntaxError: Cannot use import statement outside a module 에러를 만났다. 확장자를 `.mjs`로 바꿀 경우 에러는 사라지지만, `.js`로 쓰고 싶어서 방법을 찾아 보기로 한다.

우선 `import`는 ESModules의 improt 문법으로, package.json에 아래처럼 추가하는 방법을 시도해봤다.

```js
// package.json
{
  //
  "type": "module"
}
```

하지만 이번에는 다른 모듈에서 commonjs 방식을 따르는 경우들이 있어 이렇게 명시를 해주는 대신, require를 이용해 사용하기로 했다.

```js
// next.config.js
const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer()({});
```
