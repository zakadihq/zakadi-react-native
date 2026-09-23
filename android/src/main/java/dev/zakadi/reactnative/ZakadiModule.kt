package dev.zakadi.reactnative

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = ZakadiModule.NAME)
class ZakadiModule(reactContext: ReactApplicationContext) :
  NativeZakadiSpec(reactContext) {

  override fun getName() = NAME

  override fun create(config: ReadableMap, promise: Promise) {
    promise.reject(INTERNAL, NOT_LINKED)
  }

  override fun start(handle: String, promise: Promise) {
    promise.reject(INTERNAL, NOT_LINKED)
  }

  override fun cancel(handle: String, reason: String?) {}

  override fun perform(handle: String, action: String) {}

  override fun dispose(handle: String) {}

  override fun provideAttestation(
    handle: String,
    requestId: String,
    kind: String?,
    token: String?
  ) {}

  companion object {
    const val NAME = "ZakadiSdk"
    private const val INTERNAL = "internal"
    private const val NOT_LINKED = "native SDK not linked"
  }
}
