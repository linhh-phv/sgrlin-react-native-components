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
