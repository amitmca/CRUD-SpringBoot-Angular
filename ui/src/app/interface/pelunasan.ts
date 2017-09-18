import { Nasabah } from "./nasabah";

export class Pelunasan {
    id:number;
    nasabah:Nasabah;
    kodePelunasan:string;
    tglPelunasan:string;
    jmlPelunasan:number;
    status:string;
}