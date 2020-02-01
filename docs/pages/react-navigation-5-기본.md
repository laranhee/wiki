---
title: react-navigation-5-기본.md
---

# React Navigation 5 기본

## 정식 릴리즈는 아직 아니지만

4와 다르게

- 컴포넌트를 통해 Navigator와 Screen을 설정 할 수 있음
  - 네비게이터 구조 및 설정을 좀 더 직관적으로 할 수 있다
- Hooks API 제공
  - hoc에 비해 코드 파악 용이

그리고 일로 사용 하는게 아님

## Navigator 및 Screen 설정

- NavigationNativeContainer 컴포넌트 하위로 Navigator와 Screen 컴포넌트를 만들어함

```jsx
// https://reactnavigation.org/docs/en/next/hello-react-navigation.html#creating-a-stack-navigator
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

export default App;
```

## Reference

- [React Navigation - pre release docs](https://reactnavigation.org/docs/en/next/getting-started.html)
