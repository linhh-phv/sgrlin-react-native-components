# sgrlin-react-native-components

simple common components of React Native project

## Installation

```sh
npm install sgrlin-react-native-components
```

## Usage

```js
import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { AppText } from 'sgrlin-react-native-components';

export default function App() {
  return (
    <View style={styles.container}>
      <AppText>hello word</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
