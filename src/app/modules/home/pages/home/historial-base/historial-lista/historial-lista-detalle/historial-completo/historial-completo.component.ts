import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { HistorialMedicoService } from "src/app/core/http/services/historial-medico.service";
import { HistorialMedico } from "src/app/models/historial-medico";
import { DetallePrescripcionVistaComponent } from "src/app/modules/dialogs/detalle-prescripcion-vista/detalle-prescripcion-vista.component";
import { DetallePrescripcionComponent } from "src/app/modules/dialogs/detalle-prescripcion/detalle-prescripcion.component";
import { MiniChatComponent } from "src/app/modules/dialogs/mini-chat/mini-chat.component";
import { HistorialListaDetalleComponent } from "../historial-lista-detalle.component";

@Component({
  selector: "app-historial-completo",
  templateUrl: "./historial-completo.component.html",
  styleUrls: ["./historial-completo.component.scss"],
})
export class HistorialCompletoComponent implements OnInit {
  historialMedico = new HistorialMedico();
  constructor(
    public dialog: MatDialog,
    private _router: Router,
    private _route: ActivatedRoute,
    private _service: HistorialMedicoService
  ) {}

  ngOnInit() {
    this.ObtenerDatos();
  }

  ObtenerDatos() {
    this._service
      .getHistorial(this._route.snapshot.paramMap.get("id"))
      .subscribe((data) => (this.historialMedico = data));
  }

  abrirPrescripcion(prescriptionid: number) {
    const dialogRef = this.dialog.open(DetallePrescripcionVistaComponent, {
      width: "600px",
      data: { prescriptionId: prescriptionid },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  abrirMiniChat(consultId: number) {
    const dialogRef = this.dialog.open(MiniChatComponent, {
      width: "600px",
      data: { prescriptionId: this._route.snapshot.paramMap.get("id") },
    });
  }
}
