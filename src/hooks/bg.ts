import { Scene } from "three";

const bgFun = (THREE: typeof import("three"), scene: Scene) => {
  const textureLoder = new THREE.TextureLoader()
  const bgTexture = textureLoder.load('/src/assets/imgs/050.jpg')
  // 图像将如何应用到物体（对象）上
  bgTexture.mapping = THREE.EquirectangularReflectionMapping // 设置有折射效果的全局背景

  scene.background = bgTexture
  scene.environment = bgTexture

  return {
    textureLoder,
    bgTexture
  }
}

export default bgFun;