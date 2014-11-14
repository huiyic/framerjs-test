// globals
var APP = APP || {};
APP.isNavOpen = false;

PSD = Framer.Importer.load("imported/iphonedemo")

for (var layerGroupName in PSD) {
 window[layerGroupName] = PSD[layerGroupName];
}

Framer.Defaults.Animation = {
  time: 0.2,
  curve: 'spring',
  curveOptions: {
    tension: 500,
    friction: 35,
    velocity: 10
  }
};


// hamburger menu show/hide functionality
var toggleBackpage = function() {
  if (APP.isNavOpen === false) {
    Front.animate({
      properties: {x: 960},
      time: 0.4

    });
  } else {
    Front.animate({
      properties: {x: 0},
      time: 0.4
    });
  }
  APP.isNavOpen = !APP.isNavOpen;
}
Clickable.on('click', toggleBackpage);

PSD.Gift.draggable.enabled = true
PSD.pdt.scroll = true

// product hover and show details

PSD.blackdress.shadowX = 10