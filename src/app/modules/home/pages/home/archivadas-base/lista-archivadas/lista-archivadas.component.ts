import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { ActivarConsultaComponent } from "src/app/modules/dialogs/activar-consulta/activar-consulta.component";

@Component({
  selector: "app-lista-archivadas",
  templateUrl: "./lista-archivadas.component.html",
  styleUrls: ["./lista-archivadas.component.scss"],
})
export class ListaArchivadasComponent implements OnInit {
  consultId: number = 1;
  constructor(public dialog: MatDialog, private _route: ActivatedRoute) {}

  ngOnInit() {}

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
}
