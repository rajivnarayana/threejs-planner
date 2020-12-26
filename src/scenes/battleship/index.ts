import {
  BufferGeometry,
  Camera,
  DirectionalLight,
  Light,
  Line,
  LineBasicMaterial,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  PlaneBufferGeometry,
  Scene,
  SplineCurve,
  Vector2,
} from "three";
import IScene from "../../core/i-scene";

class BattleShipScene implements IScene {
  getCamera(): Camera {
    const fov = 40;
    const aspect = 2; // the canvas default
    const zNear = 0.1;
    const zFar = 1000;
    const camera = new PerspectiveCamera(fov, aspect, zNear, zFar);
    camera.position.set(8, 4, 10).multiplyScalar(3);
    camera.lookAt(0, 0, 0);
    return camera;
  }

  getLight1(): Light {
    const light = new DirectionalLight(0xffffff, 1);
    light.position.set(0, 20, 0);
    light.castShadow = true;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;

    const d = 50;
    light.shadow.camera.left = -d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = -d;
    light.shadow.camera.near = 1;
    light.shadow.camera.far = 50;
    light.shadow.bias = 0.001;
    return light;
  }

  getLight2(): Light {
    const light = new DirectionalLight(0xffffff, 1);
    light.position.set(1, 2, 4);
    return light;
  }

  getScene(): Scene {
    const scene = new Scene();
    scene.add(this.getLight1());
    scene.add(this.getLight2());

    const groundGeometry = new PlaneBufferGeometry(50, 50);
    const groundMaterial = new MeshPhongMaterial({ color: 0xcc8866 });
    const groundMesh = new Mesh(groundGeometry, groundMaterial);
    groundMesh.rotation.x = Math.PI * -0.5;
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    scene.add(this.getSpline());
    return scene;
  }

  getSpline(): any {
    // Create a sine-like wave
    const curve = new SplineCurve([
      new Vector2(-10, 0),
      new Vector2(-5, 5),
      new Vector2(0, 0),
      new Vector2(5, -5),
      new Vector2(10, 0),
      new Vector2(5, 10),
      new Vector2(-5, 10),
      new Vector2(-10, -10),
      new Vector2(-15, -8),
      new Vector2(-10, 0),
    ]);

    const points = curve.getPoints(50);
    const geometry = new BufferGeometry().setFromPoints(points);
    const material = new LineBasicMaterial({ color: 0xff0000 });
    const splineObject = new Line(geometry, material);
    splineObject.rotation.x = Math.PI * 0.5;
    splineObject.position.y = 0.05;
    return splineObject;
  }
}

const scene = new BattleShipScene();
export default scene;
