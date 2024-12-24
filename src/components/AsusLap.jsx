import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, useVideoTexture, VideoTexture } from '@react-three/drei'
import { useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
export function AsusLap(props) {
  const group = useRef();
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [laptopOpen, setLaptopOpen] = useState(false);
  const videoRef = useRef(null);

  // Load the GLTF model
  const { nodes, materials, animations } = useGLTF('/models/asus_rog_flow_x16/scene.gltf');
  const { actions } = useAnimations(animations, group);

  // Load the video texture
  const videoTexture = useVideoTexture(props.texture?props.texture:'/textures/project/project1.mp4', {
    loop: true,
    muted: true,
    autoplay: true,
  });

  useEffect(() => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [videoPlaying]);

  const handleLaptopClick = () => {
    setLaptopOpen(!laptopOpen);
    if (laptopOpen) {
      actions['Animation']?.stop();
    } else {
      actions['Animation']?.play();
    }
    setVideoPlaying(!videoPlaying);
  };

  useGSAP(
    ()=>{
      gsap.from(group.current.rotation,{
        y:Math.PI/2,
        duration:1,
        ease:'power3.out'

      })
    },[txt]
  )

  useEffect(
    ()=>{
      if(videoTexture){
        videoTexture.flipY=false
      }
    },[videoTexture]
  )
  return (
    <group ref={group} onClick={handleLaptopClick} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Armature002_11"
                position={[0, -0.122, -1.257]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.body}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.motif}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.blacc}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.motif_non}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.kaki}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.text}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.light_on}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_14"
                    geometry={nodes.Object_14.geometry}
                    material={materials.off_light}
                    skeleton={nodes.Object_14.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials['usb.001']}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_16"
                    geometry={nodes.Object_16.geometry}
                    material={materials['Material.005']}
                    skeleton={nodes.Object_16.skeleton}
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials.metal_lagi}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    name="Object_18"
                    geometry={nodes.Object_18.geometry}
                    material={materials.metal}
                    skeleton={nodes.Object_18.skeleton}
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials.plasct}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name="Object_20"
                    geometry={nodes.Object_20.geometry}
                    material={materials.pendingin_keknya}
                    skeleton={nodes.Object_20.skeleton}
                  />
                  <skinnedMesh
                    name="Object_21"
                    geometry={nodes.Object_21.geometry}
                    material={materials.pendingin_keknya}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <skinnedMesh
                    name="Object_22"
                    geometry={nodes.Object_22.geometry}
                    material={materials.pendingin_keknya}
                    skeleton={nodes.Object_22.skeleton}
                  />
                  <skinnedMesh
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={materials.pendingin_keknya}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <skinnedMesh
                    name="Object_24"
                    geometry={nodes.Object_24.geometry}
                    material={materials.pendingin_keknya}
                    skeleton={nodes.Object_24.skeleton}
                  />
                  <skinnedMesh
                    name="Object_25"
                    geometry={nodes.Object_25.geometry}
                    material={materials['blacc.001']}
                    skeleton={nodes.Object_25.skeleton}
                  />
                  <skinnedMesh
                    name="Object_26"
                    geometry={nodes.Object_26.geometry}
                    material={materials.material}
                    skeleton={nodes.Object_26.skeleton}
                  />
                  <skinnedMesh
                    name="Object_27"
                    geometry={nodes.Object_27.geometry}
                    material={materials.material_16}
                    skeleton={nodes.Object_27.skeleton}
                  />
                  <skinnedMesh
                    name="Object_28"
                    geometry={nodes.Object_28.geometry}
                    material={materials.motif_v23}
                    skeleton={nodes.Object_28.skeleton}
                  />
                  <skinnedMesh
                    name="Object_29"
                    geometry={nodes.Object_29.geometry}
                    material={materials.Material}
                    skeleton={nodes.Object_29.skeleton}
                  />
                  <skinnedMesh
                    name="Object_31"
                    geometry={nodes.Object_31.geometry}
                    material={materials.body}
                    skeleton={nodes.Object_31.skeleton}
                  />
                  <skinnedMesh
                    name="Object_33"
                    geometry={nodes.Object_33.geometry}
                    material={materials.body}
                    skeleton={nodes.Object_33.skeleton}
                  />
                  <skinnedMesh
                    name="Object_34"
                    geometry={nodes.Object_34.geometry}
                    material={materials.motif}
                    skeleton={nodes.Object_34.skeleton}
                  />
                  <skinnedMesh
                    name="Object_35"
                    geometry={nodes.Object_35.geometry}
                    material={materials.motif_2}
                    skeleton={nodes.Object_35.skeleton}
                  />
                  <skinnedMesh
                    name="Object_36"
                    geometry={nodes.Object_36.geometry}
                    material={
                      <meshBasicMaterial map={videoTexture} />
                    }
                    skeleton={nodes.Object_36.skeleton}
                  />
                  <skinnedMesh
                    name="Object_37"
                    geometry={nodes.Object_37.geometry}
                    material={materials.display_mirror}
                    skeleton={nodes.Object_37.skeleton}
                  />
                  <skinnedMesh
                    name="Object_38"
                    geometry={nodes.Object_38.geometry}
                    material={materials.layar}
                    skeleton={nodes.Object_38.skeleton}
                  />
                  <skinnedMesh
                    name="Object_39"
                    geometry={nodes.Object_39.geometry}
                    material={materials.Material}
                    skeleton={nodes.Object_39.skeleton}
                  />
                  <skinnedMesh
                    name="Object_40"
                    geometry={nodes.Object_40.geometry}
                    material={materials['Material.012']}
                    skeleton={nodes.Object_40.skeleton}
                  />
                  <skinnedMesh
                    name="Object_41"
                    geometry={nodes.Object_41.geometry}
                    material={materials['Material.013']}
                    skeleton={nodes.Object_41.skeleton}
                  />
                  <group name="body_8" />
                  <group name="engsel_9" />
                  <group name="monitor_10" />
                </group>
              </group>
              <group
                name="Empty002_12"
                position={[0, 1.402, 0]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={1.103}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/asus_rog_flow_x16/scene.gltf')


