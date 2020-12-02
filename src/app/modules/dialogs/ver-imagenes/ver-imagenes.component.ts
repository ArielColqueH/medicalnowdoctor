import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { ObtenerImagenService } from "src/app/core/http/services/obtener-imagen.service";

@Component({
  selector: "app-ver-imagenes",
  templateUrl: "./ver-imagenes.component.html",
  styleUrls: ["./ver-imagenes.component.scss"],
})
export class VerImagenesComponent implements OnInit {
  retrievedImage: any[] = [];
  base64Data: any[] = [];
  retrieveResonse: any[] = [];
  aux = this.data.consutlId;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _servicegetFile: ObtenerImagenService
  ) {}

  ngOnInit() {
    this.getImage();
  }
  getImage() {
    this._servicegetFile.getImage(this.aux).subscribe((res) => {
      this.retrieveResonse = res;
      console.log(this.retrieveResonse);
      if (this.retrieveResonse.length != 0) {
        for (let i = 0; i < this.retrieveResonse.length; i++) {
          this.base64Data[i] = this.retrieveResonse[i].picByte;
          this.retrievedImage[i] =
            "data:image/jpeg;base64," + this.base64Data[i];
        }
      }
    });
  }
}
