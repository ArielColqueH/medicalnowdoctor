import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { PrescriptionItem } from "src/app/models/prescription-item";
import { DetallePrescripcionComponent } from "src/app/modules/dialogs/detalle-prescripcion/detalle-prescripcion.component";

@Component({
  selector: "app-prescripciones",
  templateUrl: "./prescripciones.component.html",
  styleUrls: ["./prescripciones.component.scss"],
})
export class PrescripcionesComponent implements OnInit {
  listPrescriptionItem: PrescriptionItem[] = [
    {
      prescriptionItemId: 1,
      diagnosisName: "ads",
      doctorName: "ads",
      prescriptionDate: "12/12/12",
      prescriptionId: 1,
    },
  ];
  constructor(
    public dialog: MatDialog,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}
  openDialog() {
    this._router.navigate(["prescripcion-detalle"], { relativeTo: this.route });
  }
}
