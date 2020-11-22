import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { DetallePrescripcionComponent } from "src/app/modules/dialogs/detalle-prescripcion/detalle-prescripcion.component";
import { MiniChatComponent } from "src/app/modules/dialogs/mini-chat/mini-chat.component";

@Component({
  selector: "app-historial-completo",
  templateUrl: "./historial-completo.component.html",
  styleUrls: ["./historial-completo.component.scss"],
})
export class HistorialCompletoComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {}

  abrirPrescripcion(prescriptionid: number) {
    const dialogRef = this.dialog.open(DetallePrescripcionComponent, {
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
