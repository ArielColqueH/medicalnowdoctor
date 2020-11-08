import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { ChatDoctorService } from "src/app/core/http/services/chat-doctor.service";
import { ChatMensajeService } from "src/app/core/http/services/chat-mensaje.service";
import { ChatFromDoctor } from "src/app/models/chat-from-doctor";
import { DoctorMessageModel } from "src/app/models/doctor-message-model";
import { DarAltaComponent } from "src/app/modules/dialogs/dar-alta/dar-alta.component";
import { DetallePrescripcionComponent } from "src/app/modules/dialogs/detalle-prescripcion/detalle-prescripcion.component";

@Component({
  selector: "app-consulta-individual",
  templateUrl: "./consulta-individual.component.html",
  styleUrls: ["./consulta-individual.component.scss"],
})
export class ConsultaIndividualComponent implements OnInit {
  mensaje: string;
  fileToUpload: File = null;
  nombre: string = "";
  Url: string = "";
  tipoArchivo: string = "";
  nombreArchivo: string = "";

  chat = new ChatFromDoctor();
  mensajeChat = new DoctorMessageModel();
  constructor(
    public dialog: MatDialog,
    private _service: ChatDoctorService,
    private _route: ActivatedRoute,
    private _serviceMessage: ChatMensajeService
  ) {}

  ngOnInit() {
    this.ObtenerDatos();
  }

  ObtenerDatos() {
    this._service
      .listChat(this._route.snapshot.paramMap.get("id"))
      .subscribe((data) => (this.chat = data));
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = null;
    this.nombreArchivo = "";
    this.tipoArchivo = "";

    this.fileToUpload = file.item(0);
    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.Url = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
    this.nombre = this.fileToUpload.name.split(".")[0];
    this.nombreArchivo = this.fileToUpload.name;
  }

  verificarTipoTam(tipo: string, tam: number): boolean {
    console.log(tipo);
    if (
      (tipo ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        tipo ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        tipo === "video/mp4" ||
        tipo ===
          "application/vnd.openxmlformats-officedocument.presentationml.presentation" ||
        tipo === "application/pdf" ||
        tipo === "audio/mpeg") &&
      tam / 1000000 < 10
    ) {
      console.log(tam);
      return true;
    }
  }
  abrirPrescripcion() {
    const dialogRef = this.dialog.open(DetallePrescripcionComponent, {
      width: "600px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  abrirDarAlta() {
    const dialogRef = this.dialog.open(DarAltaComponent, {
      width: "600px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  enviarMensaje() {
    //console.log("ari");
    //console.log(this._route.snapshot.paramMap.get("id"));
    this.mensajeChat = {
      consultId: Number(this._route.snapshot.paramMap.get("id")),
      message: this.mensaje,
    };

    this._serviceMessage
      .sendMenssage(this.mensajeChat)
      .subscribe((data) => (this.chat = data));
    this.mensaje = "";
    window.location.reload();
  }
}
