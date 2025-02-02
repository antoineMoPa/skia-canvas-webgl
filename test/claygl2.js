const fs = require('fs');
const clay = require('claygl');
const {createCanvas} = require('../lib');

const width = 512,
  height = 512;

const canvas = createCanvas(width, height);

let idx = 0;

// polyfill
global.document = {
  createElement() {
    return createCanvas(300, 150);
  },
};

clay.application.create(canvas, {

  width,
  height,

  init(app) {
    // Create camera
    this._camera = app.createCamera([0, 2, 5], [0, 0, 0]);

    // Create a RED cube
    this._cube = app.createCube({
      color: [1, 0, 0],
    });

    // Create light
    this._mainLight = app.createDirectionalLight([-1, -1, -1]);
    // app.createAmbientLight('#fff', 1.0);
  },
  loop(app) {
    this._cube.rotation.rotateY(16 / 1000);
    if(idx > 0) {
      console.log(`add frame ${idx}`);
    }
    idx++;
    if(idx > 197) {
      process.exit(-1);
    }
  },
});
