#import "UIAAutomationCleaner.h"

@implementation UIAAutomationCleaner

+ (void) cleanse {
  NSLog(@"UIAAutomationCleaner.cleanse called");
#ifdef UIAAutomationRun
  NSLog(@"drop login info from NSUserDefaults");
  NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
  [defaults removeObjectForKey:kLoginDefaultsKey];
  [defaults removeObjectForKey:kTokenDefaultsKey];
  [defaults synchronize];
#endif
}

@end
