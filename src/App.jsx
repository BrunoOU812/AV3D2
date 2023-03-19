import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Car from "./components/Car";
import Fallout from "./components/Fallout";
import "./App.css";

function App() {
  const [model, setModel] = React.useState(true);
  return (
    <div className="flex items-center">
      <div className="w-full h-screen bg-slate-600">
        <Suspense>
          <Canvas className="h-full bg-gray-300">
            <OrbitControls target={[0, 0, 0]}></OrbitControls>
            <PerspectiveCamera
              makeDefault
              fov={35}
              position={[3, 2, 5]}
            ></PerspectiveCamera>
            <spotLight
              color={[1, 1, 1]}
              intensity={1.5}
              angle={0.6}
              penumbra={0.5}
              position={[5, 5, 0]}
              castShadow
              shadow-bias={-0.0001}
            />
            {model ? <Car></Car> : <Fallout></Fallout>}
            <Car></Car>
            <ambientLight intensity={0.5} color={"#ffffff"} />
            <spotLight
              color={[1, 1, 1]}
              intensity={2}
              angle={0.6}
              penumbra={1}
              position={[-5, 5, 0]}
              castShadow
              shadow-bias={-0.0001}
            />
            <color args={[0.05, 0.05, 0.05]} attach="background"></color>
          </Canvas>
        </Suspense>
      </div>
      <button
        onClick={() => setModel((prev) => !prev)}
        className="fixed bottom-0 left-0 right-0 w-[300px] h-[100px] mx-auto mb-10 p-2 border border-spacing-2 border-white border-3 bg-slate-400 text-white font-bold w-300 h-100 rounded-lg hover:bg-slate-500 active:bg-slate-300 shadow-sm hover:shadow-md active:shadow-sm"
      >
        Change
      </button>
    </div>
  );
}

export default App;
