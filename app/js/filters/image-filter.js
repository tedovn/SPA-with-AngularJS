softUniApp.filter('searchResultImg', function(){
   return function (input) {
       if (typeof(input) == "undefined" || (!input)) {
           return 'imgs/no_image.gif';
       } else {
           return input;
       }
   }
});