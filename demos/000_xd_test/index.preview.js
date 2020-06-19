

(function() {





  return;



  //---
  // Add controls
  var previewControls = document.createElement('div');
  previewControls.innerHTML = `
    <style>
      #preview-controls {
        position: fixed;
        bottom: 20px;
        width: 500px;
        left: calc(50% - 250px);
        transform: translateZ(1px);
        padding: 10px;
        background-color: #383d46;
        border-radius: 4px;
        opacity: 0.8;
      }
      #preview-controls #previewTimeSlider {
        width: 200px;
      }
    </style>
    <div id="preview-controls">
      <input id="previewTimeSlider" type="range" min="0" max="9999" step="0.01" />
      <button id="playPauseButton">&#9658; ||</button>
      <select id="speedSelect">
        <option value="0.25">0.25x</option>
        <option value="0.5">0.5x</option>
        <option value="1" selected>1x</option>
        <option value="1.5">1.5x</option>
        <option value="2">2x</option>
        <option value="3">3x</option>
        <option value="4">4x</option>
        <option value="10">10x</option>
      </select>
    </div>
  `;
  document.body.appendChild(previewControls);

  //---
  // References
  var timeline = null;
  var duration = 0;

  //---
  // Init
  mojoOld.on('ready', function(payload) {
    timeline = mojoOld.getScene('scene1').timeline;
    duration = timeline.duration();
    previewTimeSlider.setAttribute('max', duration);
    timeline.eventCallback('onUpdate', function() {
      previewTimeSlider.value = timeline.time();
    });
  });

  //---
  // Time Slider
  var previewTimeSlider = document.getElementById('previewTimeSlider');
  previewTimeSlider.addEventListener('input', function(evt) {
    timeline.pause(evt.currentTarget.value);
  });

  //---
  // Play Button
  var playPauseButton = document.getElementById('playPauseButton');
  playPauseButton.addEventListener('click', function(evt) {
    if (timeline.time() >= timeline.duration()) {
      timeline.play(0);
    }
    else {
      timeline.paused(!timeline.paused());
    }
  });

  //---
  // Speed Select
  var speedSelect = document.getElementById('speedSelect');
  speedSelect.addEventListener('change', function(evt) {
    timeline.timeScale( evt.currentTarget.value );
  });


})();

