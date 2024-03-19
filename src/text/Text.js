import React, { forwardRef } from 'react';

import { NativeText } from 'react-native/Libraries/Text/TextNativeComponent';

export const Text = forwardRef((props, ref) => {
  return (
    <NativeText
      allowFontScaling={false}
      ellipsizeMode="tail"
      {...props}
      ref={ref}
    />
  );
});
