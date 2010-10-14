#import "jasmine-uiautomation.js"
#import "jasmine-uiautomation-reporter.js"

#import "github-keys.js"

var logger, target, app, window;

jasmine.getEnv().beforeEach(function(){
  target  = UIATarget.localTarget();
  app     = target.frontMostApp();
  window  = app.mainWindow();
  logger  = UIALogger;
  this.addMatchers({
    toExist: function(){
      return this.actual.toString() != '[object UIAElementNil]';
    },
    toInclude: function(){
      logger.logWarning(this.actual.indexOf(expected));
      return this.actual.indexOf(expected) != -1;
    }
  });
});

// Import your JS spec files here.
#import "login-window.js"

jasmine.getEnv().addReporter(new jasmine.UIAutomation.Reporter());
jasmine.getEnv().execute();
