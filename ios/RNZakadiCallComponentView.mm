#import <React/RCTViewComponentView.h>

#import <react/renderer/components/RNZakadiSpec/ComponentDescriptors.h>
#import <react/renderer/components/RNZakadiSpec/Props.h>
#import <react/renderer/components/RNZakadiSpec/RCTComponentViewHelpers.h>

using namespace facebook::react;

@interface RNZakadiCallComponentView : RCTViewComponentView <RCTZakadiCallViewViewProtocol>
@end

@implementation RNZakadiCallComponentView

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<ZakadiCallViewComponentDescriptor>();
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const ZakadiCallViewProps>();
    _props = defaultProps;
  }

  return self;
}

@end
