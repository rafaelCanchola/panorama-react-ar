#import <Foundation/Foundation.h>
#import <EXUpdates/EXUpdatesAppController.h>
#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>

#import <UMCore/UMAppDelegateWrapper.h>

@interface AppDelegate : UMAppDelegateWrapper <UIApplicationDelegate, RCTBridgeDelegate, EXUpdatesAppControllerDelegate>{
  NSDictionary *options;
  UIViewController *viewController;
}

@property (nonatomic, strong) UIWindow *window;

- (void) goToNativeView:(NSString *)ARProducto; // called from the RCTBridge module


@end
