import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { PrescriptionListService } from "src/app/core/http/services/prescription-list.service";
import { PrescriptionItem } from "src/app/models/prescription-item";
import { PrescriptionListModel } from "src/app/models/prescriptionlistmodel";
import { DetallePrescripcionComponent } from "src/app/modules/dialogs/detalle-prescripcion/detalle-prescripcion.component";
import { MiniChatComponent } from "src/app/modules/dialogs/mini-chat/mini-chat.component";

@Component({
  selector: "app-prescripciones",
  templateUrl: "./prescripciones.component.html",
  styleUrls: ["./prescripciones.component.scss"],
})
export class PrescripcionesComponent implements OnInit {
  listPrescriptionItem: PrescriptionListModel[];
  constructor(
    public dialog: MatDialog,
    private _router: Router,
    private _route: ActivatedRoute,
    private _service: PrescriptionListService
  ) {}

  ngOnInit() {
    this.ObtenerDatos();
  }
  openDialog(consultId: number) {
    this._router.navigate(["prescripcion-detalle/" + consultId], {
      relativeTo: this._route,
    });
  }

  ObtenerDatos() {
    this._service
      .listPrescription()
      .subscribe((data) => (this.listPrescriptionItem = data));
  }
}
