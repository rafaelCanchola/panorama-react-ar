//
//  ARObjModule.m
//  PanoramaAgroalimentario2020
//
//  Created by Rafael Canchola on 08/05/21.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import "AppDelegate.h"

@interface ARObjModule : NSObject <RCTBridgeModule>

- (void) changeToNativeView:(NSString *)Producto;

@end

//@interface RCT_EXTERN_MODULE(ARObj, NSObject)
//RCT_EXTERN_METHOD(printHelloWorld)
//RCT_EXTERN_METHOD(navigateTo: (NSString)destination)
@implementation ARObjModule

RCT_EXPORT_MODULE(ARObjModule);
RCT_EXTERN_METHOD(navigateTo);
RCT_EXPORT_METHOD(changeToNativeView:(NSString *)Producto) {
  printf("CARGANDO VISTA...........\n");
  dispatch_async(dispatch_get_main_queue(), ^{
  AppDelegate *appDelegate = (AppDelegate *)[UIApplication sharedApplication].delegate;
    [appDelegate goToNativeView:Producto];
        });
  
}
@end
