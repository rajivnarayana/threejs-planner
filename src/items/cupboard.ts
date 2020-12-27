import { BoxGeometry, BufferGeometry, EdgesGeometry, Line, LineBasicMaterial, LineSegments, Mesh, MeshBasicMaterial, MeshLambertMaterial, MeshPhongMaterial, MeshStandardMaterial, Object3D, TextureLoader, Vector3 } from "three";
// import { origin } from "./constants";
import { ftToUnits } from "../conversions";

const loader = new TextureLoader();
export default class Cupboard {
    constructor(private height, private width, private depth = 1, private color) {
    }

    getItem() {
        const cupboardObject = new Object3D();
        const box = new BoxGeometry(this.width, this.height, this.depth);
        const material = new MeshPhongMaterial({
            // color: 'darkgray',
            // color: 'green',
            color: this.color,
            // map: loader.load('/images/Apple_Green_1010006.jpg'),
            // wireframe: true,
        });
        const boxMesh = new Mesh(box, material);

        cupboardObject.add(boxMesh);

        //Border mesh
        const edgesGeometry = new EdgesGeometry(box);
        const edgeMaterial = new LineBasicMaterial({ color: 0x000000, linewidth: 4 });
        const wireframe = new LineSegments(edgesGeometry, edgeMaterial);
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd

        cupboardObject.add(wireframe);

        return cupboardObject;
    }
}


