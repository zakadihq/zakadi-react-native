package dev.zakadi.reactnative

import android.widget.FrameLayout
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.ZakadiCallViewManagerDelegate
import com.facebook.react.viewmanagers.ZakadiCallViewManagerInterface

@ReactModule(name = ZakadiCallViewManager.NAME)
class ZakadiCallViewManager : SimpleViewManager<FrameLayout>(),
  ZakadiCallViewManagerInterface<FrameLayout> {
  private val delegate =
    ZakadiCallViewManagerDelegate<FrameLayout, ZakadiCallViewManager>(this)

  override fun getDelegate(): ViewManagerDelegate<FrameLayout> = delegate

  override fun getName() = NAME

  override fun createViewInstance(context: ThemedReactContext) = FrameLayout(context)

  @ReactProp(name = "sessionHandle")
  override fun setSessionHandle(view: FrameLayout, value: String?) {}

  companion object {
    const val NAME = "ZakadiCallView"
  }
}
