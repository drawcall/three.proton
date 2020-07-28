three.proton
======

three.proton is a magical 3d particle engine using [three.js](https://github.com/mrdoob/three.js). It is based on the [Proton](https://github.com/drawcall/Proton) Engine library. It inherited Proton's most api.<br>
I think it is the simplest three.js particle engine.Check out examples at [https://drawcall.github.io/three.proton/](https://drawcall.github.io/three.proton/)<br>

```shell
npm install three three.proton.js
```

## Features
- Four kinds of renderers
  - MeshRender 
  - SpriteRender 
  - PointsRender 
  - CustomRender 

- Three kinds of emitters which can simulate many different physical effects
  - Emitter 
  - BehaviourEmitter 
  - FollowEmitter 
  
- Perfectly compatible with the three.js library. 

## Demo

<p align="center">
  <a href="https://drawcall.github.io/three.proton/engine/example/eightdiagrams.html"><img width="274" src="https://drawcall.github.io/three.proton/images/thumb/1-min.gif" /></a>
  <a href="https://drawcall.github.io/three.proton/engine/example/customrender.html"><img width="274" src="https://drawcall.github.io/three.proton/images/thumb/2-min.gif" /></a>
  <a href="https://drawcall.github.io/three.proton/engine/example/meshrender-collision.html"><img width="274" src="https://drawcall.github.io/three.proton/images/thumb/3-min.gif" /></a>
  <a href="https://drawcall.github.io/three.proton/engine/example/spriterender-g.html"><img width="274" src="https://drawcall.github.io/three.proton/images/thumb/4-min.gif" /></a>
  <a href="https://drawcall.github.io/three.proton/engine/example/meshzone.html"><img width="274" src="https://drawcall.github.io/three.proton/images/thumb/5-min.gif" /></a>
  <a href="https://drawcall.github.io/three.proton/engine/example/spriterender-pointzone.html"><img width="274" src="https://drawcall.github.io/three.proton/images/thumb/6-min.gif" /></a>
  <a href="https://drawcall.github.io/three.proton/engine/example/helloworld.html"><img width="274" src="https://drawcall.github.io/three.proton/images/thumb/7-min.gif" /></a>
  <a href="https://drawcall.github.io/three.proton/engine/example/spriterender-snow.html"><img width="274" src="https://drawcall.github.io/three.proton/images/thumb/8-min.gif" /></a>
  <a href="https://codesandbox.io/s/three-spriterender-39rqy"><img width="274" src="https://drawcall.github.io/three.proton/images/thumb/9-min.gif" /></a>
</p>
<p align="middle">
  <i>These demos are real, you can click them! They contain the full code, too.</i>
</p>

## Installation

#### Import library

```javascript
import * as THREE from 'three';
import Proton from 'three.proton.js';
```

#### Include in html
```javascript
<script type="text/javascript" src="./js/three.min.js"></script> 
<script type="text/javascript" src="./js/three.proton.min.js"></script> 
```

## Usage
```javascript
var proton = new Proton();
var emitter = new Proton.Emitter();

//setRate
emitter.rate = new Proton.Rate(new Proton.Span(4, 16), new Proton.Span(.01));

//addInitialize
emitter.addInitialize(new Proton.Position(new Proton.PointZone(0, 0)));
emitter.addInitialize(new Proton.Mass(1));
emitter.addInitialize(new Proton.Radius(6, 12));
emitter.addInitialize(new Proton.Life(3));
emitter.addInitialize(new Proton.V(45, new Proton.Vector3D(0, 1, 0), 180));

//addBehaviour
emitter.addBehaviour(new Proton.Alpha(1, 0));
emitter.addBehaviour(new Proton.Scale(.1, 1.3));

var color1 = new THREE.Color();
var color2 = new THREE.Color();
var colorBehaviour = new Proton.Color(color1, color2);
emitter.addBehaviour(colorBehaviour);
emitter.emit();

//add emitter
proton.addEmitter(emitter);

//add renderer
proton.addRender(new Proton.SpriteRender(scene));
```

## Building three.proton
Node is a dependency, use terminal to install it with with:<br>
`git clone git://github.com/drawcall/three.proton.git`<br>
Then navigate to the build directory by running:<br>
`cd ./build`<br>
Finally run the build command:<br>
`node build.js`

## License
Proton is released under the MIT License. http://www.opensource.org/licenses/mit-license
