Meteor.startup(function() {
  WebFontConfig = {
    google: { families: [  'Roboto+Condensed::latin','Alegreya+Sans::latin' , 'Ubuntu::latin','Voltaire::latin' ,'Poiret+One::latin', 'PT+Sans+Narrow::latin', 'Slabo+27px::latin', 'Raleway::latin', 'Open+Sans+Condensed:300:latin', 'Indie+Flower::latin', 'Yanone+Kaffeesatz::latin', 'Shadows+Into+Light::latin', 'Dancing+Script::latin', 'Kaushan+Script::latin', 'Pacifico::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
})