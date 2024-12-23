import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
export function ReactLogo(props) {

    const reactRef=useRef()
    const { nodes, materials } = useGLTF('/models/react.glb')
    useGSAP(()=>{
        if (reactRef.current) {
            gsap.to(reactRef.current.rotation, {
                y: Math.PI * 2,
                duration: 6,
                repeat: -1,
                ease:"linear"
            })
            gsap.to(reactRef.current.position,{
                y:"+=0.5",
                duration:2,
                repeat:-1,
                yoyo:true,
                ease:"sine.inOut"
            })
        }
    })
    return (
        <group {...props} dispose={null} ref={reactRef}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes['React-Logo_Material002_0'].geometry}
            material={materials['Material.002']}
            position={[0, 0.079, 0.181]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.392, 0.392, 0.527]}
        />
        </group>
    )
}

useGLTF.preload('/models/react.glb')