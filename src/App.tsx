import { useRef, useEffect } from 'react'
import './App.css'

import * as THREE from 'three'
import initFun from './hooks/init'
import bgFun from './hooks/bg'
import objectFun from './hooks/object'

function App() {
  const { scene, renderer, render } = initFun(THREE)
  const { textureLoder, bgTexture } = bgFun(THREE, scene)
  objectFun(THREE, scene, bgTexture, textureLoder)


  // 初始化dom
  const containerRef = useRef<HTMLDivElement>(null); // 通过泛型指定 `containerRef` 是一个 `HTMLDivElement`
  // 挂载完毕后获取dom 
  useEffect(() => {
    if (!containerRef.current) {
      throw new Error("containerRef.current is not valid");
    }
    containerRef.current?.appendChild(renderer.domElement)

    // 调用渲染函数
    render()
  }, [])
  return (
    <>
      <div className="container" ref={containerRef}></div>
    </>
  )
}

export default App
