[![NPM](https://nodei.co/npm/react-native-auto-scrolling.png)](https://nodei.co/npm/react-native-auto-scrolling/)

[![install size](https://packagephobia.now.sh/badge?p=react-native-auto-scrolling)](https://packagephobia.now.sh/result?p=react-native-auto-scrolling) [![dependencies](https://david-dm.org/hosseinmd/react-native-auto-scrolling.svg)](https://david-dm.org/hosseinmd/react-native-auto-scrolling.svg)

# react-native-auto-scrolling

Auto scrolling Component
need Dependencies

- "react": ">=16.8.6"
- "react-native": ">=0.59"

## install

```npm
npm i react-native-auto-scrolling --save
```

```yarn
yarn add react-native-auto-scrolling
```

---

### use

```javascript
import React from "react";
import { AutoScrolling } from "react-native-auto-scrolling";

class App extends PureComponent {
  render() {
    return (
      <View>
        ...
        <AutoScrolling>
          <Image source={myImages} />
          <Image source={myImages} />
          <Image source={myImages} />
          <Image source={myImages} />
        </AutoScrolling>
        ...
      </View>
    );
  }
}
```

## Props

- duration
- delay
- style
