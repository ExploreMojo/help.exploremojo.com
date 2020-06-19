import Layout from '../../layouts/ChapterLayout'
import {Headline, Text, Image, Video, YouTube, Download, CTA, IFrame} from '@trendspurt/trendspurt-theme'
export default Layout




# First steps

Adding behaviors to existing HTML elements is straight forward. Generally speaking you have 2 options:

1. Using HTML attributes
1. Using the Mojo API in JavaScript

## 1. Adding a behavior with a HTML attribute

This is the simplest and fastest way to add a behavior to an element.

```html
<img src="brand.png" mojo-fx-magnet></div>
```

## 2. Adding a behavior using JavaScript

Adding the same effect with JavaScript looks like this:

```js
// Manually add behavior
var box = document.getElementById('blue');
mojo.add(box, 'hover', mojo.fx.Magnet);  
```

## Live Demo

<IFrame title="Live example" 
        src="/demos/000_architype/index.html"
        height="300px"></IFrame>

This is the markup of the demo:
```html
<div>
  
  <!-- HTML attribute -->
  <div style="width: 80px; height: 80px; left: 50px; top: 50px; background-color: lime;"
       mojo-fx-magnet></div>

  <!-- HTML attribute with effect options -->
  <div style="width: 80px; height: 80px; left: 150px; top: 50px; background-color: green;"
       mojo-fx-magnet="{scale: 1.5, duration: 2000}"></div>

  <!-- Scripted element (just an id for now) -->
  <div id="blue" style="width: 80px; height: 80px; left: 400px; top: 50px; background-color: blue;"></div>
  
  <!-- Scripted element (just an id for now) -->
  <div id="darkblue" style="width: 80px; height: 80px; left: 500px; top: 50px; background-color: darkblue;"></div>

</div>
```

And the JavaScript:
```js
  // Manually add behavior
  var blue = scene.content.querySelector('#blue');
  mojo.add(blue, 'hover', mojo.fx.Magnet);
  
  // Manually add behavior with options
  var darkblue = scene.content.querySelector('#darkblue');
  mojo.add(darkblue, 'hover', mojo.fx.Magnet, {scale: 1.5, duration: 2000});
```
