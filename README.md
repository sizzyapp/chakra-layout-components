<h1 align="center">Welcome to chakra-layout-components 👋</h1>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<p>
  <a href="https://www.npmjs.com/package/chakra-layout-components" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/chakra-layout-components.svg">
  </a>
  <a href="https://github.com/sizzyapp/chakra-layout-components/blob/master/README.md" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://twitter.com/@sizzyapp" target="_blank">
    <img alt="Twitter: sizzyapp" src="https://img.shields.io/twitter/follow/sizzyapp.svg?style=social" />
  </a>
</p>

> chakra-ui Layout Helper Components

This project simplify uses `horizontal`, `grid`,`vertical` and `space` for [`Chakra UI`](https://chakra-ui.com/).

## Props

| Prop            |     Type      |
| --------------- | :-----------: |
| wrap            |    boolean    |
| spaceBetween    |    boolean    |
| spaceAround     |    boolean    |
| justifyEnd      |    boolean    |
| justifyStart    |    boolean    |
| flex            |    number     |
| spaceFirst      |    number     |
| spacing         |    number     |
| spaceBottom     |    boolean    |
| alignStart      |    boolean    |
| alignItemsStart |    boolean    |
| center          |    boolean    |
| centerV         |    boolean    |
| centerH         |    boolean    |
| noShrink        |    boolean    |
| styles          | CSSProperties |
| invert          |    boolean    |
| reverse         |    boolean    |
| fullW           |    boolean    |
| fullH           |    boolean    |
| debug           |    boolean    |

## Example

See [example/index.tsx](./example/index.tsx).

```js
const App = () => {
  return (
    <div>
      <Horizontal spacing={10} centerV>
        <div>Hello</div>
        <div>World</div>
      </Horizontal>

      <hr />

      <Vertical center>
        <div>Goodbye</div>
        <div>World</div>
      </Vertical>
    </div>
  );
};
```

Produces:

![ScreenShot](./ScreenShot.png)

## Install

```sh
yarn install && yarn watch
```

## Usage

```sh
cd examples && yarn start
```

See it in browser at http://localhost:1234

## Run tests

```sh
yarn run test
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/kitze/layout-styled-components/issues).

## Show your support

Give a ⭐️ if this project helped you!

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://praneet.dev"><img src="https://avatars.githubusercontent.com/u/23721710?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Praneet Rohida</b></sub></a><br /><a href="#infra-praneetrohida" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/sizzyapp/chakra-layout-components/commits?author=praneetrohida" title="Tests">⚠️</a> <a href="https://github.com/sizzyapp/chakra-layout-components/commits?author=praneetrohida" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!