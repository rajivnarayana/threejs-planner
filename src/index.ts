// add styles
import "./style.css";

import { WebGLRenderer } from "three";

import kitchenScene from "./scenes/kitchen";
import battleShipScene from "./scenes/battleship";

const renderer = new WebGLRenderer();

// set size
renderer.setSize(window.innerWidth, window.innerHeight);

// add canvas to dom
document.body.appendChild(renderer.domElement);

function animate(): void {
  requestAnimationFrame(animate);
  render();
}

const defaultScene = kitchenScene;
const scene = defaultScene.getScene()
// const scene = battleShipScene;

function render(): void {
  renderer.render(scene, defaultScene.getCamera());
}

animate();
// render();
