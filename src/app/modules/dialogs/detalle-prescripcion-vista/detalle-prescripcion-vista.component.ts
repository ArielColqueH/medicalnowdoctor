import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { PrescriptionListDetailService } from "src/app/core/http/services/prescription-list-detail.service";
import { PrescriptionJSON } from "src/app/models/prescription-json";

@Component({
  selector: "app-detalle-prescripcion-vista",
  templateUrl: "./detalle-prescripcion-vista.component.html",
  styleUrls: ["./detalle-prescripcion-vista.component.scss"],
})
export class DetallePrescripcionVistaComponent implements OnInit {
  descriptionDetail = new PrescriptionJSON();
  aux = this.data.prescriptionId;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _service: PrescriptionListDetailService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ObtenerDatos();
  }

  ObtenerDatos() {
    this._service
      .getPrescriptionDetail(this.aux)
      .subscribe((data) => (this.descriptionDetail = data));
  }
}
