import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { ConsultasArchivadasService } from "src/app/core/http/services/consultas-archivadas.service";
import { StoredConsultModel } from "src/app/models/stored-consult-model";
import { ActivarConsultaComponent } from "src/app/modules/dialogs/activar-consulta/activar-consulta.component";

@Component({
  selector: "app-lista-archivadas",
  templateUrl: "./lista-archivadas.component.html",
  styleUrls: ["./lista-archivadas.component.scss"],
})
export class ListaArchivadasComponent implements OnInit {
  listaArchivados: StoredConsultModel[] = [];

  consultId: number = 1;
  constructor(
    public dialog: MatDialog,
    private _route: ActivatedRoute,
    private _service: ConsultasArchivadasService
  ) {}

  ngOnInit() {
    this.ObtenerDatos();
  }

  activarchat() {
    const dialogRef = this.dialog.open(ActivarConsultaComponent, {
      width: "600px",
      data: {
        dataconsultid: this.consultId,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ObtenerDatos() {
    this._service
      .getChatArchivados()
      .subscribe((data) => (this.listaArchivados = data));
  }
}
