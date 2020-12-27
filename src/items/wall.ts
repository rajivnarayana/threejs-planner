import { Mesh, Geometry, BufferGeometry, Material, Object3D, BoxGeometry, TextureLoader, MeshBasicMaterial } from "three";
import { ftToUnits } from "../conversions";
import IMesh from "../core/item";
import Cupboard from "./cupboard";

//Draw a wall.
const height = ftToUnits(9.25);
const width = ftToUnits(10);
const depth = ftToUnits(1);
const loader = new TextureLoader();
const cupboardDepth = ftToUnits(1.5);
const cupboardHeight = ftToUnits(3);
const cupboardWidth = width;
export class Wall implements IMesh {
    getMesh(): Mesh<Geometry | BufferGeometry, Material | Material[]> {
        const wallObject = new Object3D();
        wallObject.add(this.getWall());

        const topCupboard = new Cupboard(cupboardHeight, cupboardWidth, cupboardDepth, 0xb4b930).getItem();
        topCupboard.position.x = cupboardWidth / 2;
        topCupboard.position.y = height - ftToUnits(1) - (cupboardHeight / 2);
        topCupboard.position.z = cupboardDepth / 2;
        wallObject.add(topCupboard);

        const bottomCupboard = new Cupboard(cupboardHeight, cupboardWidth, cupboardDepth, 0x58687c).getItem();
        bottomCupboard.position.x = cupboardWidth / 2;
        bottomCupboard.position.y = cupboardHeight / 2;
        bottomCupboard.position.z = cupboardDepth / 2;
        wallObject.add(bottomCupboard);
        return wallObject;
    }

    getWall() {
        const wall = new BoxGeometry(width, height, depth);

        const material = new MeshBasicMaterial({
            color: 'white',
            // color: 0xffff00,
            // map: loader.load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg'),

            // map: loader.load('/images/Apple_Green_1010006.jpg'),
            // wireframe: true,
        });

        const mesh = new Mesh(wall, material);
        mesh.position.x = width / 2;
        mesh.position.y = height / 2;
        mesh.position.z = 0;
        return mesh;
    }
}

const wall = new Wall();
export default wall;