var Fantasy = (function () {
    
    'use strict';
    var greet = function (name) {
        console.log('Hi ' + name + '!');
    };

    return {
        greeting: function (name) {
            greet(name);
        }
    };
})();

Fantasy.greeting('code');
Fantasy.greeting('browser');