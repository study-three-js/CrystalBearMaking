import { Scene, Texture, TextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

const objectFun = (THREE: typeof import("three"), scene: Scene, bgTexture: Texture, textureLoder: TextureLoader) => {
  // 加载小熊模型
  const gltfLoader = new GLTFLoader()

  gltfLoader.load("src/assets/model/bear.gltf", (gltf) => {
    const model = gltf.scene.children[0]
    model.material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      envMap: bgTexture,
      refractionRatio: 0.7,
      reflectivity: 0.99,
      opacity: 0.5
    })
    scene.add(model)
  })

  // 加载底盘
  const geometry = new THREE.CircleGeometry(1, 32);
  // 加载平面纹理
  const texture = textureLoder.load('/src/assets/imgs/1.png')
  const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
  const plane = new THREE.Mesh(geometry, material);
  plane.rotation.x = -Math.PI / 2
  scene.add(plane);
}

export default objectFun