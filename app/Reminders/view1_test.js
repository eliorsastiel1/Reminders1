'use strict';

describe('myApp.Reminders module', function() {

    beforeEach(module('myApp.Reminders'));

    describe('Reminders controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
        var view1Ctrl = $controller('RemindersCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});