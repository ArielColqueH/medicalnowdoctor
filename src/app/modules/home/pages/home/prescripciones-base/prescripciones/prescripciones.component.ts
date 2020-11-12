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
      historialId: 1,
      prescripcionid: 1,
      patientName: "Ariel Colque Herrera",
      specialty: "Odontologia",
      date: "12/12/2002",
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