import {
  Mesh,
  Geometry,
  BufferGeometry,
  Material,
  BoxBufferGeometry,
  MeshPhongMaterial,
  Object3D,
} from "three";
import IMesh from "../../core/item";
export class Tank implements IMesh {
  getMesh(): Object3D {
    const tank = new Object3D();
    const carWidth = 4;
    const carHeight = 1;
    const carLength = 8;

    const bodyGeometry = new BoxBufferGeometry(carWidth, carHeight, carLength);
    const bodyMaterial = new MeshPhongMaterial({ color: 0x6688aa });
    const bodyMesh = new Mesh(bodyGeometry, bodyMaterial);
    bodyMesh.position.y = 1.4;
    bodyMesh.castShadow = true;
    tank.add(bodyMesh);

    return tank;
  }
}
