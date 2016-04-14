'use strict';

document.addEventListener('deviceready', function () {
  navigator.notification.confirm(
    'How do you feel?',
    function (buttonIndex) {
      // Do something with the selected index..
    },
    'Welcome!',
    ['Good', 'Bad']
  );
}, false);
