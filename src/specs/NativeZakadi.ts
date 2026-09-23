// src/specs/NativeZakadi.ts
import type { TurboModule, CodegenTypes } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export type NativeStateChange = {
  handle: string;
  from: string;
  to: string;
  sessionId?: string;
  consentRecord?: string;
};

/** The flat event record of 8.0 item 10. */
export type NativeSessionEvent = {
  handle: string;
  type: string;
  camera?: boolean;
  microphone?: boolean;
  region?: string;
  rttMs?: number;
  phase?: string;
  outcome?: string;
  reason?: string;
  code?: string;
  message?: string;
  recoverable?: boolean;
  retryAfterS?: number;
  closeCode?: number;
  sessionId?: string; // 8.0 item 10, on every record once known
  consentRecord?: string;
};

export type NativeAttestationRequest = {
  handle: string;
  requestId: string;
  sessionId: string;
  nonce: string;
  requestHash: string;
  requestHashHex: string; // nonce and requestHash in base64
};
export type NativeTelemetry = {
  handle: string;
  name: string;
  sessionId?: string;
  tMs: number;
  fieldsJson: string;
};

export interface Spec extends TurboModule {
  create(config: CodegenTypes.UnsafeObject): Promise<string>;
  start(handle: string): Promise<void>;
  cancel(handle: string, reason: string | null): void;
  perform(handle: string, action: string): void; // 'repeat' | 'more_time' | 'cancel' | 'redial' | 'close'
  dispose(handle: string): void;
  provideAttestation(
    handle: string,
    requestId: string,
    kind: string | null,
    token: string | null
  ): void;
  readonly onState: CodegenTypes.EventEmitter<NativeStateChange>;
  readonly onEvent: CodegenTypes.EventEmitter<NativeSessionEvent>;
  readonly onAttestationRequest: CodegenTypes.EventEmitter<NativeAttestationRequest>;
  readonly onTelemetry: CodegenTypes.EventEmitter<NativeTelemetry>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('ZakadiSdk');
