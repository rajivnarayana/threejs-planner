import { Mesh, Object3D } from "three";

export default interface IMesh {
  getMesh(): Mesh | Object3D;
}
