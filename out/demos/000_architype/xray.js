function htmlEntities(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function xray_process(player) {
  var id = player.scenes[0].id;
  var uid = 'uid-'+Math.round(Math.random()*10000000000);
  
  var host;
  if (window.top.document == document) {
    host = mojo.FusionHelper.appendHtml(document.body, `<div id="${uid}" class="xray" style=""></div>`);
  }
  else {
    frameElement.insertAdjacentHTML('afterend', `<div id="${uid}" class="xray" style=""></div>`);
    host = frameElement.nextSibling;
  }  

  // Load project files
  var queue = new createjs.LoadQueue();
  queue.on("complete", handleComplete, this);
  queue.loadManifest([
    {id: "markup", src: id+"/markup.html", type:createjs.Types.TEXT},
    {id: "script", src: id+"/script.js", type:createjs.Types.TEXT},
  ]);  
  function handleComplete() {
    window.top.on_xray_tab_click = function(evt, id) {
      evt.currentTarget.closest('.xray').querySelectorAll('.xray-code').forEach(function(item) {
        item.style.display = 'none';
      });
      evt.currentTarget.closest('.xray').querySelector('.xray-code.'+id).style.display = 'block';
    }    
    mojo.FusionHelper.appendHtml(host, `
      <div class="tabs">
        <div class="tab" onClick="on_xray_tab_click(event, 'markup')">Markup</div>
        <div class="tab" onClick="on_xray_tab_click(event, 'script')">Script</div>
      </div>
    `);
    mojo.FusionHelper.appendHtml(host, `<div class="xray-code markup"><pre><code>${htmlEntities(queue.getResult('markup'))}</code></pre></div>`);
    mojo.FusionHelper.appendHtml(host, `<div class="xray-code script"><pre><code>${htmlEntities(queue.getResult('script'))}</code></pre></div>`);
  }
}

function addStyles() {
  mojo.FusionHelper.appendHtml(window.top.document.body, `
    <style>
      .xray {
        width: 100%;
        overflow: hidden;
      }
      .xray .tabs {
        text-align: right;
        background-color: #000;
      }
      .xray .tabs .tab {
        display: inline-block;
        padding: 4px 18px;
        font-size: 14px;
        background-color: #444;
        color: white;
        cursor: pointer;
      }
      .xray .xray-code {
        display: none;
      }
      .xray .xray-code pre,
      .xray .xray-code pre code {
        margin-top: 0;
      }
    </style>
  `);
}

function xray(player) {
  addStyles();
  // Timeout needed in nextjs enivonrment (probably rehydration related)
  setTimeout(xray_process.bind(this, player), 500);
}