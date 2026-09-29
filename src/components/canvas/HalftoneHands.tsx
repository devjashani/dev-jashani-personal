"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface HalftoneHandsProps {
  mouse: { x: number; y: number };
  scrollProgress?: number;
}

const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uScroll;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // As user scrolls through first viewport (uScroll: 0 -> 1), hands move closer
    // Left hand (x < 0) shifts slightly to right (+x), Right hand (x > 0) shifts to left (-x)
    float handConvergence = clamp(uScroll, 0.0, 1.0) * 0.35;
    if (pos.x < -0.2) {
      pos.x += handConvergence;
    } else if (pos.x > 0.2) {
      pos.x -= handConvergence;
    }

    // Subtle wave & mouse reaction
    float mouseDist = distance(uv, uMouse);
    pos.z += (1.0 - smoothstep(0.0, 0.5, mouseDist)) * 0.15;
    pos.z += sin(pos.x * 2.5 + uTime * 1.8) * 0.04;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform float uHasTexture;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uScroll;
  varying vec2 vUv;

  // 4x4 Bayer Dither Matrix
  float dither4x4(vec2 position, float brightness) {
    int x = int(mod(position.x, 4.0));
    int y = int(mod(position.y, 4.0));
    int index = x + y * 4;
    float threshold = 0.0;
    if (index == 0) threshold = 0.0625;
    else if (index == 1) threshold = 0.5625;
    else if (index == 2) threshold = 0.1875;
    else if (index == 3) threshold = 0.6875;
    else if (index == 4) threshold = 0.8125;
    else if (index == 5) threshold = 0.3125;
    else if (index == 6) threshold = 0.9375;
    else if (index == 7) threshold = 0.4375;
    else if (index == 8) threshold = 0.25;
    else if (index == 9) threshold = 0.75;
    else if (index == 10) threshold = 0.125;
    else if (index == 11) threshold = 0.625;
    else if (index == 12) threshold = 1.0;
    else if (index == 13) threshold = 0.5;
    else if (index == 14) threshold = 0.875;
    else if (index == 15) threshold = 0.375;
    return brightness < threshold ? 0.0 : 1.0;
  }

  void main() {
    vec3 baseColor;

    if (uHasTexture > 0.5) {
      vec4 tex = texture2D(uTexture, vUv);
      baseColor = tex.rgb;
    } else {
      // Procedural dithered fallback gradient
      float grad = length(vUv - 0.5);
      float pattern = sin(vUv.x * 40.0) * cos(vUv.y * 40.0) * 0.1;
      baseColor = vec3(0.06, 0.07, 0.08) + vec3(0.12, 0.11, 0.14) * (1.0 - grad + pattern);
    }

    // Halftone dot overlay
    vec2 screenPos = gl_FragCoord.xy;
    float luma = dot(baseColor, vec3(0.299, 0.587, 0.114));
    float ditherVal = dither4x4(screenPos * 0.5, luma);
    baseColor = mix(baseColor * 0.8, baseColor * 1.25, ditherVal);

    // Spark between fingertips (centered around uv (0.5, 0.505))
    vec2 sparkPos = vec2(0.5, 0.505);
    float sparkDist = distance(vUv, sparkPos);

    // Spark ignites and pulses as scroll advances
    float scrollFactor = clamp(uScroll * 1.5, 0.2, 2.2);
    float pulse = (sin(uTime * 9.0) * 0.25 + 0.75) * (cos(uTime * 4.0) * 0.2 + 0.8);
    float sparkCore = (1.0 - smoothstep(0.0, 0.038 * scrollFactor, sparkDist)) * pulse * 2.8;
    float sparkGlow = (1.0 - smoothstep(0.0, 0.16 * scrollFactor, sparkDist)) * 0.9 * scrollFactor;

    // Palette: Gold (#C8A96A) and Ember (#D4633A)
    vec3 gold = vec3(0.784, 0.662, 0.415);
    vec3 ember = vec3(0.831, 0.388, 0.227);
    vec3 sparkColor = mix(ember, gold, clamp(sparkCore * 0.7, 0.0, 1.0));

    baseColor += sparkColor * (sparkCore + sparkGlow);

    // Vignette
    float vig = 1.0 - length(vUv - 0.5) * 0.65;
    baseColor *= clamp(vig, 0.2, 1.0);

    gl_FragColor = vec4(baseColor, 1.0);
  }
`;

export function HalftoneHands({ mouse, scrollProgress = 0 }: HalftoneHandsProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [hasTexture, setHasTexture] = useState(false);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      "/assets/hero-hands.png",
      (loadedTexture) => {
        loadedTexture.minFilter = THREE.LinearFilter;
        loadedTexture.generateMipmaps = false;
        setTexture(loadedTexture);
        setHasTexture(true);
      },
      undefined,
      () => {
        // Fallback gracefully to procedural gradient
        setHasTexture(false);
      }
    );
  }, []);

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uHasTexture: { value: hasTexture ? 1.0 : 0.0 },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uScroll: { value: scrollProgress }
    }),
    [texture, hasTexture, scrollProgress]
  );

  useEffect(() => {
    uniforms.uHasTexture.value = hasTexture ? 1.0 : 0.0;
    if (texture) uniforms.uTexture.value = texture;
  }, [hasTexture, texture, uniforms]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    uniforms.uTime.value += delta;
    uniforms.uScroll.value = THREE.MathUtils.lerp(
      uniforms.uScroll.value,
      scrollProgress,
      0.08
    );

    // Smoothly track mouse
    const targetX = (mouse.x + 1) * 0.5;
    const targetY = (1 - mouse.y) * 0.5;
    uniforms.uMouse.value.lerp(new THREE.Vector2(targetX, targetY), 0.06);

    // Subtle 3D mesh perspective reaction
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      mouse.x * 0.06,
      0.05
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      -mouse.y * 0.06,
      0.05
    );
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[7.2, 4.05, 48, 48]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
