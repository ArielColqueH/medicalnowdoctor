import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { DarprescripcionService } from "src/app/core/http/services/darprescripcion.service";
import { Prescription } from "src/app/models/prescription";
import { PrescriptionJSON } from "src/app/models/prescription-json";
import { Prescriptiondetailmodel } from "src/app/models/prescriptiondetailmodel";

@Component({
  selector: "app-detalle-prescripcion",
  templateUrl: "./detalle-prescripcion.component.html",
  styleUrls: ["./detalle-prescripcion.component.scss"],
})
export class DetallePrescripcionComponent implements OnInit {
  descripcion = new PrescriptionJSON();
  prescriptionList: Prescriptiondetailmodel[] = [];
  // descripcion: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _router: Router,
    private _route: ActivatedRoute,
    private _service: DarprescripcionService
  ) {}

  ngOnInit() {}
  agregaralista() {
    var aux = {
      productName: "",
      productDetail: "",
      productQtty: "",
    };
    this.descripcion.content.push(aux);
  }
  eliminardelista(listaid: number) {
    console.log(listaid);
    this.descripcion.content.splice(listaid, 1);
  }
  enviarprescripcion() {
    this._service
      .crearDiagnostico(this.data.datakey, this.descripcion)
      .subscribe((data) => (this.descripcion = data));
  }
}
