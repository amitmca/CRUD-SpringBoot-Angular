import { Nasabah } from "./nasabah";

export class Gadai {
 id:number;
 berat:number;
 bunga:number;
 harga:number;
 jmlAngsuran:number;
 karat:number;
 kodeGadai:string;
 lamaAngsuran:number;
 pinjaman:number;
 tglGadai:string;
 tgljatuhTempo:string;
 totalTebusan:number;
 nasabah:Nasabah;   
}