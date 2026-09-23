# zakadi-react-native

React Native package for Zakadi, New Architecture only: a Turbo Module for session control and a Fabric component hosting the native call view, wrapping `zakadi-android` and `zakadi-ios`. Specification: `zakadi/spec/08-cross-platform-sdk.md` Part B.

Status: scaffold. `@zakadi/react-native` (React Native 0.82 or later) carries the codegen specs of the Turbo Module `ZakadiSdk` and the Fabric component `ZakadiCallView`. Its JavaScript entry point exports nothing and its native methods reject with `internal` until the native SDKs it wraps are published.

## Development

npm only, Node 24. The example app in `example/` is a bare React Native 0.87 app and an npm workspace, so its dependencies live in the root `node_modules`.

```sh
npm ci                     # install, build lib/ and install the git hooks
npm run format             # prettier --check .
npm run lint               # eslint . && tsc --noEmit
npm test                   # jest
npm run test:integration   # build the example: Android on Linux, iOS on macOS
```

The Android build needs JDK 17 and the Android SDK; the iOS build needs Xcode and installs CocoaPods through the example's `Gemfile`. Run the example with `npm run example -- start`, `npm run example -- android` or `npm run example -- ios`.

## Licence

Zakadi SDKs and client libraries are open source under the Apache License 2.0 (see `LICENSE`; the `NOTICE` file reserves the Zakadi trademarks). They are clients for the Zakadi service, which is proprietary; using it requires an account and acceptance of the Zakadi Terms of Service. Zakadi and the Zakadi logo are trademarks and are not covered by the Apache licence.
