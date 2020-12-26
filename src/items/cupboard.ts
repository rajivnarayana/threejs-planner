import { BoxGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial } from "three";
import { origin } from "./constants";
import { ftToUnits } from "../conversions";

//Draw a wall.
const height = ftToUnits(9);
const width = ftToUnits(10);
const depth = ftToUnits(1);

const wall = new BoxGeometry(width, height, depth);

const material = new MeshBasicMaterial({
    color: 0xffffff,
    wireframe: false,
});
  
const mesh = new Mesh(wall, material);
mesh.position.x = width / 2;
mesh.position.y = height / 2;
mesh.position.z = depth / 2;

export default mesh;