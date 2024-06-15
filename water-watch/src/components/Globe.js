import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { loadData } from '../utils/loadData';
import * as THREE from 'three';

const latLongToVector3 = (lat, lon, radius, height) => {
  const phi = (lat * Math.PI) / 180;
  const theta = ((lon - 180) * Math.PI) / 180;

  const x = -(radius + height) * Math.cos(phi) * Math.cos(theta);
  const y = (radius + height) * Math.sin(phi);
  const z = (radius + height) * Math.cos(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
};

const GlobeContent = ({ dataPoints }) => {
    const globeRef = useRef();

    useFrame(() => {
        globeRef.current.rotation.y += 0.001;
    });


    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Sphere ref={globeRef} args={[5, 32, 32]} position={[0, 0, 0]}>
                <meshStandardMaterial color="blue" wireframe />
            </Sphere>
            {dataPoints.map((point, index) => (
                <Sphere key={index} args={[0.05, 32, 32]} position={point}>
                    <meshStandardMaterial color="red" />
                </Sphere>
      ))}
            <OrbitControls />
        </>
    );
};

const Globe = () => {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    loadData('/Marine protected areas.csv').then(data => {
      const points = data.map(item => {
        const { latitude, longitude } = item; // Adjust this if need to fit data
        return latLongToVector3(latitude, longitude, 5, 0.1);
      });
      setDataPoints(points);
    });
  }, []);

  return (
    <Canvas>
      <GlobeContent dataPoints={dataPoints} />
    </Canvas>
  );
};

export default Globe;