import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mensaje-a-especialista",
  templateUrl: "./mensaje-a-especialista.component.html",
  styleUrls: ["./mensaje-a-especialista.component.scss"],
})
export class MensajeAEspecialistaComponent implements OnInit {
  fileToUpload: File = null;
  nombre: string = "";
  Url: string = "";
  tipoArchivo: string = "";
  nombreArchivo: string = "";
  constructor() {}

  ngOnInit() {}
  handleFileInput(file: FileList) {
    this.fileToUpload = null;
    this.nombreArchivo = "";
    this.tipoArchivo = "";

    if (this.verificarTipoTam(file.item(0).type, file.item(0).size)) {
      this.fileToUpload = file.item(0);
      //Show image preview
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.Url = event.target.result;
      };
      reader.readAsDataURL(this.fileToUpload);
      this.nombre = this.fileToUpload.name.split(".")[0];
    }
  }

  verificarTipo(tipo) {
    if (
      tipo ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      tipo ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      tipo ===
        "application/vnd.openxmlformats-officedocument.presentationml.presentation" ||
      tipo === "application/pdf"
    ) {
      return 1;
    } else if (tipo === "video/mp4") {
      return 2;
    } else if (tipo === "audio/mpeg") {
      return 3;
    } else {
      return 0;
    }
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
}
