#import "RNZakadi.h"

static NSString *const kInternal = @"internal";
static NSString *const kNotLinked = @"native SDK not linked";

@implementation RNZakadi

+ (NSString *)moduleName
{
  return @"ZakadiSdk";
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::NativeZakadiSpecJSI>(params);
}

- (void)create:(NSDictionary *)config
       resolve:(RCTPromiseResolveBlock)resolve
        reject:(RCTPromiseRejectBlock)reject
{
  reject(kInternal, kNotLinked, nil);
}

- (void)start:(NSString *)handle
      resolve:(RCTPromiseResolveBlock)resolve
       reject:(RCTPromiseRejectBlock)reject
{
  reject(kInternal, kNotLinked, nil);
}

- (void)cancel:(NSString *)handle reason:(NSString *_Nullable)reason
{
}

- (void)perform:(NSString *)handle action:(NSString *)action
{
}

- (void)dispose:(NSString *)handle
{
}

- (void)provideAttestation:(NSString *)handle
                 requestId:(NSString *)requestId
                      kind:(NSString *_Nullable)kind
                     token:(NSString *_Nullable)token
{
}

- (void)invalidate
{
}

@end
