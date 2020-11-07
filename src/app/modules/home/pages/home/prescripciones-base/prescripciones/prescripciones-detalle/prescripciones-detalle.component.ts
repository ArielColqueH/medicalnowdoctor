import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { PrescriptionItem } from "src/app/models/prescription-item";
import { DetallePrescripcionComponent } from "src/app/modules/dialogs/detalle-prescripcion/detalle-prescripcion.component";

@Component({
  selector: "app-prescripciones-detalle",
  templateUrl: "./prescripciones-detalle.component.html",
  styleUrls: ["./prescripciones-detalle.component.scss"],
})
export class PrescripcionesDetalleComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  listPrescriptionItem: PrescriptionItem[] = [
    {
      prescriptionItemId: 1,
      diagnosisName: "ads",
      doctorName: "ads",
      prescriptionDate: "12/12/12",
      prescriptionId: 1,
    },
  ];
  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open(DetallePrescripcionComponent, {
      width: "600px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
