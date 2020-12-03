import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { PrescriptionListService } from "src/app/core/http/services/prescription-list.service";
import { PrescriptionListDetailDateService } from "src/app/core/http/services/prescription-list-detail-date.service";
import { PrescriptionItem } from "src/app/models/prescription-item";
import { PrescriptionModelJSON } from "src/app/models/prescription-model-json";
import { DetallePrescripcionVistaComponent } from "src/app/modules/dialogs/detalle-prescripcion-vista/detalle-prescripcion-vista.component";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-prescripciones-detalle",
  templateUrl: "./prescripciones-detalle.component.html",
  styleUrls: ["./prescripciones-detalle.component.scss"],
})
export class PrescripcionesDetalleComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private _router: Router,
    private _route: ActivatedRoute,
    private _service: PrescriptionListDetailDateService
  ) {}
  listaPrescriptionDetail = new PrescriptionModelJSON();

  ngOnInit() {
    this.ObtenerDatos();
  }

  openDialog(prescriptionid: number) {
    const dialogRef = this.dialog.open(DetallePrescripcionVistaComponent, {
      width: "600px",
      data: { prescriptionId: prescriptionid },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ObtenerDatos() {
    this._service
      .listPrescriptionDatailDate(this._route.snapshot.paramMap.get("id"))
      .subscribe((data) => (this.listaPrescriptionDetail = data));
  }
}
