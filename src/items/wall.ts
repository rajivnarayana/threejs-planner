import { Mesh, Geometry, BufferGeometry, Material } from "three";
import IMesh from "../core/item";

export default class Wall implements IMesh {
    getMesh(): Mesh<Geometry | BufferGeometry, Material | Material[]> {
        throw new Error("Method not implemented.");
    }
    private width;
    private height = 9;
    private depth = 0.5;

    private windows = [];

}