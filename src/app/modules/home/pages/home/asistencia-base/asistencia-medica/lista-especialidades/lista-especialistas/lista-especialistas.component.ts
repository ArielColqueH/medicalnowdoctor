import { Component, OnInit } from "@angular/core";
import { ListEspecialist } from "src/app/models/ListaEspecialista";
import { MatDialog } from "@angular/material/dialog";
import { MensajeAEspecialistaComponent } from "src/app/modules/dialogs/mensaje-a-especialista/mensaje-a-especialista.component";

@Component({
  selector: "app-lista-especialistas",
  templateUrl: "./lista-especialistas.component.html",
  styleUrls: ["./lista-especialistas.component.scss"],
})
export class ListaEspecialistasComponent implements OnInit {
  listaEspecialista: ListEspecialist[] = [
    {
      specialist_id: 1,
      specialist_avatar: "A",
      specialist_name: "Ariel Colque Herrera",
      specialist_score: 4.2,
    },
    {
      specialist_id: 2,
      specialist_avatar: "V",
      specialist_name: "Lizbeth vania Vera",
      specialist_score: 4.8,
    },
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  openDialog() {
    const dialogRef = this.dialog.open(MensajeAEspecialistaComponent, {
      width: "600px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
