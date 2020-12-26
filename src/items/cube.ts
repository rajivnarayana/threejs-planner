import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";

const material = new MeshStandardMaterial({
    color: 0xcccccc,
    wireframe: false,
  });
  
  // create a box and add it to the scene
  const box = new Mesh(new BoxGeometry(2, 2, 2), material);
  box.position.x = 0;
  box.position.y = 0;
  box.position.z = 0;
export default box;  