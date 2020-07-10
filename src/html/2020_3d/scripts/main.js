import * as THREE from '../scripts/threejs/three.module';
import * as gsap from '../scripts/gsap/gsap-core';






// var tl = new TimelineMax({delay:0.25});

// tl
// // .call(consoleLog, ["FRAME 01 BEGIN!!!"], "frame01")

// .to([this.mesh], 1, {scale:2}, "frame01")

// // .call(consoleLog, ["FRAME 01 END!!!"], "frame01 +=0.75")
// ;


// //tl.duration(1.5);

// console.log("timing = " + tl.duration() + " secs");






// SCENE
var scene = new THREE.Scene();


// CAMERA: THREE.PerspectiveCamera parameters = (FOV:Field of View, aspect ratio, near plane, far plane)
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
// camera.position.set = (0, 0, 5);


// LIGHT: THREE.PointLight(color:Integer, intensity:Float, distance:Number, decay:Float)
var light = new THREE.PointLight(0xFFFFFF, 1, 1000);
light.position.set(0, 0, 0);
scene.add(light);

var light2 = new THREE.PointLight(0xFFFFFF, 2, 1000);
light2.position.set(0, 0, 25);
scene.add(light2);


// RAYCASTER: THREE.Raycaster [see https://threejs.org/docs/index.html#api/en/core/Raycaster]
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();


// RENDERER: THREE.WebGLRenderer parameters = [see https://threejs.org/docs/#api/en/renderers/WebGLRenderer]
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

// GEOMETRY: THREE.SphereGeometry parameters = (radius:Float, widthSegments:Integer, heightSegments:Integer, phiStart:Float, phiLength:Float, thetaStart:Float, thetaLength:Float) [see https://threejs.org/docs/index.html#api/en/geometries/SphereGeometry]
// GEOMETRY: THREE.BoxGeometry parameters = (width:Float, height:Float, depth:Float, widthSegments:Integer, heightSegments:Integer, depthSegments:Integer) [see https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry]
// MATERIAL: THREE.MeshLambertMaterial parameters = [see https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial]
// MESH (SPHERE)
// var geometry = new THREE.SphereGeometry(1, 10, 10);
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({color: 0xF7F7F7});
// var mesh = new THREE.Mesh(geometry, material);
// // mesh.position.x = -2;
// // mesh.position.y = -2;
// // mesh.position.z = -2;
// mesh.position.set(2, 2, -2);
// mesh.rotation.set(45, 0 ,0);
// mesh.scale.set(1, 2, 1);

// scene.add(mesh);

// var geometry = new THREE.BoxGeometry(1, 1, 1);
// var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
// var mesh = new THREE.Mesh(geometry, material);
// mesh.position.set(0, 2, 0);

// scene.add(mesh);

var meshX = -10;

for (var i = 0; i < 15; i++) {
    var mesh = new THREE.Mesh(geometry, material);

    mesh.position.x = (Math.random() - 0.5) * 7.5;
    mesh.position.y = (Math.random() - 0.5) * 7.5;
    mesh.position.z = (Math.random() - 0.5) * 7.5;

    scene.add(mesh);

    // meshX += 1;
    meshX = meshX++;
}


document.body.appendChild(renderer.domElement);


// make renderer responsive
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // renderer.render(scene, camera);		// OR renderOnResize() [see below]
});


// scene.add(mesh);
// scene.add(light);
// scene.add(mesh, light);


// renderer.render(scene, camera);

var renderOnResize = function() {
    requestAnimationFrame(renderOnResize);

    // mesh.rotation.x += 0.05;
    // mesh.rotation.y += 0.01;
    // mesh.rotation.z += 0.05;

    // mesh.scale.x -= 0.01;

    renderer.render(scene, camera);
}

renderOnResize();


// this.tl = new TimelineMax().delay(0.3);

// this.tl.to(this.mesh.scale, 1, {x: 2, ease: Expo.easeOut});
// this.tl.to(this.mesh.scale, 0.5, {x: 0.5, ease: Expo.easeOut});
// this.tl.to(this.mesh.position, 0.5, {x: 1, ease: Expo.easeOut});
// this.tl.to(this.mesh.rotation, 0.5, {y: Math.PI * 0.5, ease: Expo.easeOut}, "-=1.5");

// // var tl = new TimelineMax({delay: 0.25});
// var tl = new TimelineMax({paused: true});

// this.tl
// 	.to(this.mesh.scale, 1, {x: 2, ease: Expo.easeOut}, "frame01 +=0")
// 	.to(this.mesh.scale, 0.5, {x: 0.5, ease: Expo.easeOut}, "frame01 +=0.25")
// 	.to(this.mesh.position, 0.5, {x: 1, ease: Expo.easeOut}, "frame01 +=0.5")
// 	.to(this.mesh.rotation, 0.5, {y: Math.PI * 0.5, ease: Expo.easeOut}, "frame01 +=0.75")
// ;

function onMouseMoveFn(event) {
    event.preventDefault();

    // calculate mouse position in normalized device coordinates, (-1 to +1) for both components
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // calculate objects intersecting the picking ray
    var intersects = raycaster.intersectObjects(scene.children);

    for (var i = 0; i < intersects.length; i++) {
        // intersects[i].object.material.color.set(0xff0000);

        // this.tl = new TimelineMax().delay(0.3);
        this.tl = new gsap.TimelineMax().delay(0.3);

        // this.tl.to(intersects[i].object.scale, 1, {x: 2, ease: Expo.easeOut});
        // this.tl.to(intersects[i].object.scale, 0.5, {x: 0.5, ease: Expo.easeOut});
        // this.tl.to(intersects[i].object.position, 0.5, {x: 1, ease: Expo.easeOut});
        // this.tl.to(intersects[i].object.rotation, 0.5, {y: Math.PI * 0.5, ease: Expo.easeOut}, "-=1.5");

        // this.tl.play();

        // var tl = new TimelineMax({delay: 0.25});

        // this.tl
        // 	.to(intersects[i].object.scale, 1, {x: 2, ease: Expo.easeOut}, "frame01 +=0")
        // 	.to(intersects[i].object.scale, 0.5, {x: 0.5, ease: Expo.easeOut}, "frame01 +=0.25")
        // 	.to(intersects[i].object.position, 0.5, {x: 1, ease: Expo.easeOut}, "frame01 +=0.5")
        // 	.to(intersects[i].object.rotation, 0.5, {y: Math.PI * 0.5, ease: Expo.easeOut}, "frame01 +=0.75")
        // ;

        // var tl = new TimelineMax({delay: 0.25});

        this.tl
            // .to(intersects[i].object.scale, 1, { x: 2, ease: Expo.easeOut })
            // .to(intersects[i].object.scale, 0.5, { x: 0.5, ease: Expo.easeOut })
            // .to(intersects[i].object.position, 0.5, { x: 1, ease: Expo.easeOut })
            // .to(intersects[i].object.rotation, 0.5, { y: Math.PI * 0.5, ease: Expo.easeOut }, "-=1.5")

            .to(intersects[i].object.scale, 1, { x: 2, ease: gsap.Expo.easeOut })
            .to(intersects[i].object.scale, 0.5, { x: 0.5, ease: gsap.Expo.easeOut })
            .to(intersects[i].object.position, 0.5, { x: 1, ease: gsap.Expo.easeOut })
            .to(intersects[i].object.rotation, 0.5, { y: Math.PI * 0.5, ease: gsap.Expo.easeOut }, "-=1.5")
        ;
    }
};

// document.body.addEventListener('click', () => {
// 	this.tl.play();
// });

// window.addEventListener('click', onMouseMoveFn);
window.addEventListener('mousemove', onMouseMoveFn);

