(() => {

  const comp = app.project.activeItem;
  if (!(comp instanceof CompItem)) {
    alert('activate a comp')
    return;
  }

  const layers = comp.selectedLayers;
  if (!layers.length) {
    alert('select a layer');
    return;
  }

  const layer = layers[0];
  if (!(layer instanceof AVLayer || layer instanceof TextLayer || layer instanceof ShapeLayer)) {
    alert('select an av layer');
    return;
  }

  layer.effect.addProperty('CC Force Motion Blur');

})();