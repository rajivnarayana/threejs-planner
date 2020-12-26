import { Camera, Scene } from "three";

export default interface IScene {
  getScene(): Scene;
  getCamera(): Camera;
}
