import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const initFun = (THREE: typeof import("three")) => {
  // 创建场景
  const scene = new THREE.Scene()

  // 创建相机
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000)
  camera.position.set(1.5, 1, 1.5)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateMatrix()
  scene.add(camera)

  // 创建渲染器
  const renderer = new THREE.WebGLRenderer({
    antialias: true
  })
  renderer.setSize(window.innerWidth, window.innerHeight)

  // 监听屏幕大小
  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  })

  // 将webgl渲染的canvas内容添加到body上
  document.body.appendChild(renderer.domElement)

  // 设置渲染函数
  const render = () => {
    // 渲染场景
    renderer.render(scene, camera);
    // 引擎自动更新渲染器
    requestAnimationFrame(render);
  }
  render()

  // 实例化控制器
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true

  // 添加环境光
  const ambient = new THREE.AmbientLight(0xffffff, 0.85)
  scene.add(ambient)

  return {
    scene,
    renderer,
    render
  }
}

export default initFun