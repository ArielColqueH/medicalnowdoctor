import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { MensajeAEspecialistaComponent } from "src/app/modules/dialogs/mensaje-a-especialista/mensaje-a-especialista.component";

@Component({
  selector: "app-consulta-individual",
  templateUrl: "./consulta-individual.component.html",
  styleUrls: ["./consulta-individual.component.scss"],
})
export class ConsultaIndividualComponent implements OnInit {
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
