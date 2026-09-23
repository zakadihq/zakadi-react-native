// src/specs/ZakadiCallViewNativeComponent.ts
import type { HostComponent, ViewProps } from 'react-native';
import { codegenNativeComponent } from 'react-native';

export interface NativeProps extends ViewProps {
  sessionHandle: string;
}

export default codegenNativeComponent<NativeProps>(
  'ZakadiCallView'
) as HostComponent<NativeProps>;
