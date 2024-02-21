<script setup>
import Modal from '@/@core/components/Modal.vue'

import {
  IconMenu2,
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarRightCollapse,
} from '@tabler/icons-vue'


import { Paginas } from '@/mocks/Paginas.js'

import { ref, onMounted } from 'vue';
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js'
// import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

let camera, scene, renderer, controls, directionalLight, labelRenderer, root;

const appContainer = ref(null);

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

async function init() {

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setAnimationLoop( render );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;
  renderer.useLegacyLights = false;
  appContainer.value.appendChild( renderer.domElement );

  scene = new THREE.Scene();
  // scene.background = new THREE.Color( 0x212121 );

  camera = new THREE.PerspectiveCamera( 3, window.innerWidth / window.innerHeight, 0.03, 1000);
  camera.position.set( - 0.01, 0.11, 0.38 );

  //Labels
  labelRenderer = new CSS2DRenderer();
  labelRenderer.setSize( window.innerWidth, window.innerHeight );
  labelRenderer.domElement.style.position = 'absolute';
  labelRenderer.domElement.style.top = '0px';
  labelRenderer.domElement.style.pointerEvents = 'none';
  appContainer.value.appendChild( labelRenderer.domElement);

  controls = new OrbitControls( camera, renderer.domElement, labelRenderer.domElement );
  controls.enableDamping = true;
  // controls.enablePan = false;
  controls.update();

  // lights
  const dirLight1 = new THREE.DirectionalLight( 0xccccff, 2 );
  dirLight1.position.set( -100, -100, -200 );
  scene.add( dirLight1 );

  directionalLight = new THREE.DirectionalLight( 0xccccff, 2 );
  directionalLight.position.set( 10, 10, 10 );
  scene.add( directionalLight );

  const dirLight2 = new THREE.DirectionalLight( 0xccccff, 3 );
  dirLight2.position.set( - 1, -0.75, - 0.5 );
  scene.add( dirLight2 );

  //Load background texture
  const loaderBack = new THREE.TextureLoader();
  loaderBack.load('models/textures/dark2.jpg' , function(texture)
  {
    scene.background = texture;  
  });

  // const rgbeLoader = new RGBELoader().setPath( 'models/textures/' );
  const gltfLoader = new GLTFLoader();

  gltfLoader.load(
    'https://evoluir-fund2-dev.s3.sa-east-1.amazonaws.com/album/models/humanbody/muscles.gltf',
    function (gltf) {
       
        scene.add(gltf.scene)

        let object3D = gltf.scene.children[0].children[0];

        const labelMusculos = [
          {description: 'Esternocleidomastóideo', position: [11, 6, 59]},
          {description: 'Peitoral Maior', position: [11, 2, 55]},
        ]

        labelMusculos.map((item)=>{
          let text = document.createElement( 'div' );
          text.className = 'label';
          text.textContent = item.description;

          const label = new CSS2DObject( text );
          label.position.set( item.position[0], item.position[1], item.position[2]);
          object3D.add(label);
        })

        // function onMouseClick(event) {
  
        //   // Normaliza as coordenadas do mouse entre -1 e 1
        //   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        //   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
          
        //   // Atualiza o raio com base na posição do mouse
        //   raycaster.setFromCamera(mouse, camera);

        //   // Encontra todos os objetos intersectados pelo raio
        //   var intersects = raycaster.intersectObjects(object3D, true);

        //   console.log('aqui', object3D, intersects)

        //   if (intersects.length > 0) {
        //     // Se houver interseção, imprime as coordenadas do objeto clicado
        //     const intersection = intersects[0];
        //     const position = intersection.point;
        //     console.log('Position of GLTF object:', position);
        //   }
        // }

        // window.addEventListener('click', onMouseClick, false);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
  )


  render();
  window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
  labelRenderer.setSize( window.innerWidth, window.innerHeight );
  render();
}

function animate() {

  requestAnimationFrame( animate );

  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();

  renderer.render( scene, camera );

}

function render() {
  controls.update();
  renderer.render( scene, camera );
  labelRenderer.render( scene, camera );
}

onMounted(() => {
  init()
  onWindowResize()
  animate()
  render()
});

</script>

<script>
  export default {
    data () {
      return {
        dialog: false,
        dialogHeart: false,
        drawer: true,
        div1Visible: true,
        div2Visible: false,
      }
    },
    methods: {
      openDiv1() {
        this.div1Visible = true;
        this.div2Visible = false;
      },
      openDiv2() {
        this.div1Visible = false;
        this.div2Visible = true;
      },
    },
    render() {
      return h(
          // abbreviated template string for brevity
          compile('<Link href="#" class="notification-link">profile status</Link>')
      ) 
    }
  }
</script>

<template>

<v-card rounded="0">
  <v-layout>
    <v-navigation-drawer
      color="#212529"
      width="450"
      rounded="0"
      v-model="drawer"
      class="overflow-auto"
      v-for="pagina in Paginas"
      :key="pagina"
    >
      <v-card rounded="0" class="mb-4">
        <v-img
          height="200"
          :src="pagina.image"
          cover
        >
          <v-toolbar
            color="rgba(0, 0, 0, 0)"
          >
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" icon color="grey-100" variant="outlined" size="small">
                  <IconMenu2 />
                </v-btn>
              </template>

              <v-list >
                <v-list-item @click="openDiv1">Ver Conteúdo</v-list-item>
                <v-list-item @click="openDiv2">Ver Instruções</v-list-item>
                <v-divider></v-divider>
                <v-list-item @click="drawer = !drawer">Fechar Painel</v-list-item>
              </v-list>
            </v-menu>

            <v-toolbar-title class="text-h6 text-white">
              {{pagina.title}}
            </v-toolbar-title>

          </v-toolbar>
        </v-img>
        
      </v-card>

      <div v-if="div1Visible" class="pa-4 text-white text-justify font-weight-thin">
        <div v-html="pagina.content"></div>
      </div>

      <div v-if="div2Visible" class="pa-4 text-white text-justify font-weight-thin">
        <div v-html="pagina.pedagogy"></div>
      </div>
    
    </v-navigation-drawer>

    <v-main style="height: 89vh">
      <v-toolbar
        color="rgba(0, 0, 0, 0)"
        style="position: absolute; top: 10px; right: 10px; z-index: 10;"
      >
        <v-btn icon color="grey-50" variant="tonal" size="small" @click.stop="drawer = !drawer">
          <IconLayoutSidebarLeftCollapse v-if="drawer" />
          <IconLayoutSidebarRightCollapse v-if="!drawer" />
        </v-btn>

      </v-toolbar>
      <div id="appContainer" ref="appContainer"></div>
    </v-main>
  </v-layout>
</v-card>

<Modal mcolor="primary" v-model="dialog">
  <img
    :src="humanCell"
    alt="sl1"
    transition="scale-transition"
    width="1200"
    height="1200"
  >
</Modal>
   
  
</template>

<style>


.label {
  text-shadow: -1px 1px 1px rgb(0,0,0);
  color: white;
  font-size: 14px;
  background-color: rgba(32, 32, 32, 0.452);
  padding: 7px;
  border-radius: 6px;
}
</style>
