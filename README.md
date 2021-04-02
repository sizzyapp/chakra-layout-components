<h1 align="center">Welcome to chakra-layout-components 👋</h1>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
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

These props are applicable to both Horizontal and Vertical components.

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

In addition to this, the components also support Chakra UI's [style props](https://chakra-ui.com/docs/features/style-props).

## Example



[![Edit Chakra Layout Components Demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/chakra-layout-components-demo-vrd18?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark)

```js
const App = () => {
  return (
    <L.Vertical spacing={50}>
      <L.Vertical spacing={20} bg="teal.100">
        <Text> We </Text>
        <Text> are </Text>
        <Text> Vertical </Text>
      </L.Vertical>

      <L.Horizontal spaceBetween bg="pink.100" p={4}>
        <Text> We </Text>
        <Text> are </Text>
        <Text> Horizontal </Text>
      </L.Horizontal>

      <L.Space size={50} />

      <L.Horizontal centerV h={200} w={400} debug>
        <Text> I am centered vertically </Text>
      </L.Horizontal>

      <L.Horizontal centerH h={200} w={400} debug>
        <Text> I am centered Horizontally </Text>
      </L.Horizontal>

      <L.Horizontal center h={200} w={400} debug>
        <Text> I am just centered </Text>
      </L.Horizontal>

      <L.Vertical fullW debug>
        <Text> I will take full width </Text>
      </L.Vertical>
    </L.Vertical>
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
    <td align="center"><a href="http://kitze.io"><img src="https://avatars.githubusercontent.com/u/1160594?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kitze</b></sub></a><br /><a href="#infra-kitze" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/sizzyapp/chakra-layout-components/commits?author=kitze" title="Tests">⚠️</a> <a href="https://github.com/sizzyapp/chakra-layout-components/commits?author=kitze" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!