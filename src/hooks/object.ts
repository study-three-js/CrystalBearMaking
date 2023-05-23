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
    // 将物体的scale属性设置为两倍
    model.scale.set(2, 2, 2)
    scene.add(model)
  })

  // 加载底盘
  const circleGeometry = new THREE.CircleGeometry(1, 32);
  // 加载平面纹理
  const circleTexture = textureLoder.load('/src/assets/imgs/1.png')
  const circleMaterial = new THREE.MeshBasicMaterial({
    map: circleTexture,
    side: THREE.DoubleSide,
    // 设置透明
    transparent: true
  });
  const plane = new THREE.Mesh(circleGeometry, circleMaterial);
  plane.rotation.x = -Math.PI / 2
  scene.add(plane);



  // 加载一个圆柱，形成光束
  const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 20, 32, 1, true, 0, Math.PI * 2);
  const cylinderTexture = textureLoder.load('/src/assets/imgs/n7.png')
  cylinderTexture.rotation = - Math.PI / 4
  cylinderTexture.center.set(0.5, 0.5)
  const cylinderMaterial = new THREE.MeshStandardMaterial({
    map: cylinderTexture,
    side: THREE.DoubleSide,
    // 设置透明
    transparent: true,
  });
  const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  scene.add(cylinder);


  const objectRender = () => {
    plane && (plane.rotation.z += .01);
    cylinder && (cylinder.rotation.y += .01);
  }

  return {
    objectRender
  }
}

export default objectFun