[![NPM](https://nodei.co/npm/react-native-auto-scroller.png)](https://nodei.co/npm/react-native-auto-scroller/)

[![install size](https://packagephobia.now.sh/badge?p=react-native-auto-scroller)](https://packagephobia.now.sh/result?p=react-native-auto-scroller) [![dependencies](https://david-dm.org/hosseinmd/react-native-auto-scroller.svg)](https://david-dm.org/hosseinmd/react-native-auto-scroller.svg)

# react-native-auto-scroller

Auto scrolling Component
need Dependencies

There are many solutions, but I prefer this one for the best performance. The animations are using `useNativeDriver`, so they will be send to native and will be perform on the UI thread instead of JS thread.

- "react": ">=16.8.6"
- "react-native": ">=0.59"

## Installation

    npm install --save react-native-auto-scroller

_or_

    yarn add react-native-auto-scroller

## Properties

| Prop           | Description                                         | Default |
| -------------- | --------------------------------------------------- | ------- |
| **`style`**    | `View` style                                        | \_      |
| **`duration`** | Time to finish a round                              | 10      |
| **`delay`**    | Delay time before start auto scroll animation (ms). | 1000    |

## install

```npm
npm i react-native-auto-scroller --save
```

```yarn
yarn add react-native-auto-scroller
```

---

### use

```javascript
import React from "react";
import { AutoScroller } from "react-native-auto-scroller";

class App extends PureComponent {
  render() {
    return (
      <View>
        ...
        <AutoScroller>
          <Image source={myImages} />
          <Image source={myImages} />
          <Image source={myImages} />
          <Image source={myImages} />
        </AutoScroller>
        ...
      </View>
    );
  }
}
```
