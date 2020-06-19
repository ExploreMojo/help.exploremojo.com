scene.on(mojo.const.SCENE_READY, function () {

  // Manually add behavior
  var blue = scene.content.querySelector('#blue');
  mojo.add(blue, 'hover', mojo.fx.Magnet);
  
  // Manually add behavior with options
  var darkblue = scene.content.querySelector('#darkblue');
  mojo.add(darkblue, 'hover', mojo.fx.Magnet, {scale: 1.5, duration: 2000});

});
