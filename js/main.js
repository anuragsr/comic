var width = window.innerWidth;
var height = window.innerHeight;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var action = {}, mixer, fadeAction;
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
window.addEventListener( 'resize', onWindowResize, false );
var scene = new THREE.Scene;
/*scene.fog = new THREE.FogExp2( 0x2fc2fd, 0.0004 );*/

var loader = new THREE.JSONLoader;
var mesh, mat, mouseX, mouseY;

var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);

camera.position.y = 70;
camera.position.x = -219;
camera.position.z = 530;
/*x: -219.15387568525165, y: 70.16100350595019, z: 530.1749959986697*/
/*
loader.load( 'model/comic.json', function( geometry, materials ) {
  texloader.load('model/3.png', function(tex){
    mat = new THREE.MeshBasicMaterial({ map: tex });     
    mesh = new THREE.Mesh(geometry, mat);
    mesh.scale.set(30,30,30);
    mesh.position.z = -100;
    scene.add( mesh );
  });
});
*/

var texloader = new THREE.TextureLoader();
loader.load( 'model/comic2.json', function( geometry, materials ) {
  texloader.load('model/7.png', function(tex){
    mat = new THREE.MeshPhongMaterial({ map: tex });     
    mesh = new THREE.Mesh(geometry, mat);
    mesh.scale.set(30,30,30);
    scene.add( mesh );
  });
});
scene.add(camera);
/*controls = new THREE.OrbitControls( camera, renderer.domElement );
				//controls.addEventListener( 'change', render ); // add this only if there is no animation loop (requestAnimationFrame)
				controls.enableDamping = true;
				controls.dampingFactor = 0.25;
				controls.enableZoom = true;*/
cube = new THREE.Mesh( new THREE.CubeGeometry( 50, 50, 0.1 ), 
       new THREE.MeshBasicMaterial({color: 0x000000}) );
/*cube.position.y= 150;
cube.position.x= -50;
*/
cube.position.z= -10;
scene.add(cube);    
var skyboxGeometry = new THREE.BoxGeometry(10000, 10000, 10000);
var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
 
scene.add(skybox);/*
var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 300, 50);
scene.add(pointLight);

*/
/*pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(-100, 300, 200);
scene.add(pointLight);
*/
light = new THREE.AmbientLight( 0xe3f03b );
scene.add( light );

var clock = new THREE.Clock;
animate();
function animate(){
    requestAnimationFrame(animate);
    render();
};
function render() {
    var delta = clock.getDelta();
    if(cube)
        camera.lookAt(cube.position);
    renderer.render(scene, camera);
}
function moveCamera(arg){
    var x,y,z,tweenObj, cubePos;
    switch(arg){
        case 1 : tweenObj = {
            x : 46.66905490492998, y : 150.69038855940238, z : 195.27158051683512
        }; 
        cubePos = {
            x : -50,
            y : 170,
        }
        tweenObj.ease = Back.easeOut;
        break;
        case 2 : tweenObj = {
            x: -100.061598483607, y: 120.08769769845189, z: 196.6464331857531
        }; 
        tweenObj.ease = Back.easeOut;
        cubePos = {
            x : 50,
            y : 150,
        }
        break;
        case 3 : tweenObj = {
            x: 0.061598483607, y: 250.08769769845189, z: 100.6464331857531
        }; 
        cubePos = {
            x : 0,
            y : 150,
        }
        break;
        case 4 : tweenObj = {
            x: -4.699810259831387, y: 141.22102364573678, z: 273.69953600302156
        }; 
        cubePos = {
            x : 0,
            y : 150,
        }
        break;
        case 5 : tweenObj = {
            x: -184.7760727271059, y: -63.59648069089263, z: 238.09702294564227
        }; 
        tweenObj.ease = Back.easeOut;
        cubePos = {
            x : -100,
            y : -70,
        }
        break;
        case 6 : tweenObj = {
            x: 22.820108002231713, y: -80.9709492735579, z: 296.31039433135476
        }; 
        cubePos = {
            x : -100,
            y : -70,
        }
        break;
        case 7 : tweenObj = {
            x: -39.9860270664052, y: -142.68427771919627, z: 270.03558335059023
        }; 
        tweenObj.ease = Back.easeInOut;
        cubePos = {
            x : 50,
            y : -70,
        }
        break;
        case 8 : tweenObj = {
            x: 78.04093810057333, y: -185.87610782026582, z: 232.88749701576745
        }; 
        cubePos = {
            x : 100,
            y : -50,
        }
        break;
        case 9 : tweenObj = {
            x: 146.35880104998128, y: -21.15788351779849, z: 270.2005682165693
        }; 
        cubePos = {
            x : 100,
            y : -50,
        }
        break;
        case 10 : tweenObj = {
            x: 16.825846388608014, y: 5.418823268995511, z: 587.1213641763705
        }; 
        tweenObj.ease = SlowMo.ease.config(0.2, 0.8, false);
        cubePos = {
            x : 0,
            y : 0,
        }
        break;
       /*case 3 : x = 250, z = -70, y = 150;break;
       case 4 : x = -200, z = -200, y = 150;break;
       case 5 : x = 0, z = 400, y = 150;break;*/
    }
    /*cube.position.y = 150;
    cube.position.z = 0;
    cube.position.x = -50;*/
    TweenMax.to(camera.position, 1, tweenObj);
    TweenMax.to(cube.position, 1, cubePos);
}
function getCamera(){
    console.log(camera.position);
}
function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
  mouseX = ( event.clientX - windowHalfX ) / 2;
  mouseY = ( event.clientY - windowHalfY ) / 2;
}
TweenLite.ticker.addEventListener("tick", render);