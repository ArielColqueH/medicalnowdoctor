import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { PrescriptionItem } from "src/app/models/prescription-item";
import { DetallePrescripcionComponent } from "src/app/modules/dialogs/detalle-prescripcion/detalle-prescripcion.component";

@Component({
  selector: "app-recetas",
  templateUrl: "./recetas.component.html",
  styleUrls: ["./recetas.component.scss"],
})
export class RecetasComponent implements OnInit {
  listPrescriptionItem: PrescriptionItem[] = [
    {
      prescriptionItemId: 1,
      diagnosisName: "Lorem Ipsum",
      doctorName: "Richard Lups",
      prescriptionDate: "12/12/2020",
      prescriptionId: 1,
    },
    {
      prescriptionItemId: 2,
      diagnosisName: "Lorem Ipsum",
      doctorName: "Maria Delagado",
      prescriptionDate: "11/12/2020",
      prescriptionId: 2,
    },
  ];
  constructor(public dialog: MatDialog) {}

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
