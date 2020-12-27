import {
  Scene,
  Camera,
  PerspectiveCamera,
  AxesHelper,
  DirectionalLight,
  MathUtils,
} from "three";
import IScene from "../core/i-scene";
import { Wall } from "../items/wall";

export class Kitchen implements IScene {
  // add lights
  addLights(scene) {
    const light = new DirectionalLight(0xffffff, 1.0);

    light.position.set(0, 0, 10);

    scene.add(light);

    // const light2 = new DirectionalLight(0xffffff, 1.0);

    // light2.position.set(-100, 100, -100);

    // scene.add(light2);
  }

  // create the scene
  getScene(): Scene {
    const scene = new Scene();
    this.addLights(scene);
    // add axis to the scene
    const axis = new AxesHelper(10);
    scene.add(axis);

    const frontWall = new Wall();
    scene.add(frontWall.getMesh());

    // const leftWall = new Wall();
    // const leftWallObject = leftWall.getMesh();
    // leftWallObject.rotation.y = MathUtils.degToRad(30);
    // leftWallObject.position.x = -1;
    // scene.add(leftWallObject);

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
