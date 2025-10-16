"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const FloatingDotsBackground = () => {
  const mountRef = useRef(null);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    // Handle responsive height
    const updateHeight = () => setViewportHeight(window.innerHeight);
    updateHeight();
    window.addEventListener("resize", updateHeight);

    // === Three.js Setup ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // === Galaxy Parameters ===
    const particleCount = 15000;
    const radius = 6;
    const arms = 4;
    const spin = 1.0;
    const randomness = 0.45;
    const randomnessPower = 1.8;
    const colorInside = new THREE.Color("#ff6030");
    const colorOutside = new THREE.Color("#1b3984");

    // === Geometry & Colors ===
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const r = Math.pow(Math.random(), 1.5) * radius;
      const armIndex = i % arms;
      const branchAngle = (armIndex / arms) * Math.PI * 2;
      const spinAngle = r * spin;
      const angle = branchAngle + spinAngle;

      const randomX =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        randomness *
        r;
      const randomY =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        randomness *
        r *
        0.5;
      const randomZ =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        randomness *
        r;

      positions[i3 + 0] = Math.cos(angle) * r + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(angle) * r + randomZ;

      const mixedColor = colorInside.clone().lerp(colorOutside, r / radius);
      colors[i3 + 0] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // === Material ===
    const material = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      alphaTest: 0.01,
    });

    // To avoid rectangles, use a circular texture
    const circleTexture = new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/sprites/circle.png"
    );
    material.map = circleTexture;

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // === Animation ===
let time = 0;
const animate = () => {
  requestAnimationFrame(animate);

  // Slowly rotate
  points.rotation.y += 0.0003; // reduce speed here (lower = slower)

  // Move all points gently to the right (floating effect)
  time += 0.001;
  const positions = geometry.attributes.position.array;
  for (let i = 0; i < positions.length; i += 3) {
    positions[i] += Math.sin(time + i * 0.0001) * 0.0001; // x drifting
    positions[i + 1] += Math.cos(time + i * 0.00015) * 0.00005; // gentle y movement
  }
  geometry.attributes.position.needsUpdate = true;

  renderer.render(scene, camera);
};
animate();


    // === Handle Resize ===
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // === Cleanup ===
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", updateHeight);
      mountRef.current.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: `${viewportHeight}px`,
        background:
          "radial-gradient(circle at center, #09031C 0%, #000000 100%)",
        overflow: "hidden",
      }}
    />
  );
};

export default FloatingDotsBackground;

