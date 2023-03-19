import { useLoader } from "@react-three/fiber";
import React from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Car() {
  const gltf = useLoader(GLTFLoader, "../models/fallout/scene.gltf");
  React.useEffect(() => {
    gltf.scene.scale.set(0.005, 0.005, 0.005);

    gltf.scene.position.set(0, 0.35, 0.9);
    gltf.scene.traverse;
    (object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    };
  }, [gltf]);
  return <primitive object={gltf.scene}></primitive>;
}
