import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to MyModule3.web.ts
// and on native platforms to MyModule3.ts
import MyModule3Module from './src/MyModule3Module';
import MyModule3View from './src/MyModule3View';
import { ChangeEventPayload, MyModule3ViewProps } from './src/MyModule3.types';

// Get the native constant value.
export const PI = MyModule3Module.PI;

export function hello(): string {
  return MyModule3Module.hello();
}

export async function setValueAsync(value: string) {
  return await MyModule3Module.setValueAsync(value);
}

const emitter = new EventEmitter(MyModule3Module ?? NativeModulesProxy.MyModule3);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { MyModule3View, MyModule3ViewProps, ChangeEventPayload };
