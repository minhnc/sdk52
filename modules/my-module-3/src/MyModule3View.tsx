import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { MyModule3ViewProps } from './MyModule3.types';

const NativeView: React.ComponentType<MyModule3ViewProps> =
  requireNativeViewManager('MyModule3');

export default function MyModule3View(props: MyModule3ViewProps) {
  return <NativeView {...props} />;
}
