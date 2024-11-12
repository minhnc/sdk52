import * as React from 'react';

import { MyModule3ViewProps } from './MyModule3.types';

export default function MyModule3View(props: MyModule3ViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
