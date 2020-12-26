import {
  Scene,
  Camera,
  PerspectiveCamera,
  AxesHelper,
  DirectionalLight,
} from "three";
import IScene from "../core/i-scene";
import item from "../items/cupboard";

export class Kitchen implements IScene {
  // add lights
  addLights(scene) {
    const light = new DirectionalLight(0xffffff, 1.0);

    light.position.set(100, 100, 100);

    scene.add(light);

    const light2 = new DirectionalLight(0xffffff, 1.0);

    light2.position.set(-100, 100, -100);

    scene.add(light2);
  }

  // create the scene
  getScene(): Scene {
    const scene = new Scene();

    // add axis to the scene
    const axis = new AxesHelper(10);
    scene.add(axis);

    scene.add(item);

    return scene;
  }

  getCamera(): Camera {
    // create the camera
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.x = 10;
    camera.position.y = 10;
    camera.position.z = 20;

    // camera.lookAt(10, 10, 10);
    camera.lookAt(10, 10, 0);
    return camera;
  }
}

const scene = new Kitchen();
export default scene;
