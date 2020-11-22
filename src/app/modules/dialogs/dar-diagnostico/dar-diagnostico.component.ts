import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ObtenerdiagnosticoService } from "src/app/core/http/services/obtenerdiagnostico.service";
import { DiagnosisModel } from "src/app/models/diagnosis-model";
import { MAT_DIALOG_DATA } from "@angular/material";
import { Inject } from "@angular/core";
import { MandardiagnosticoService } from "src/app/core/http/services/mandardiagnostico.service";
@Component({
  selector: "app-dar-diagnostico",
  templateUrl: "./dar-diagnostico.component.html",
  styleUrls: ["./dar-diagnostico.component.scss"],
})
export class DarDiagnosticoComponent implements OnInit {
  diagnostico = new DiagnosisModel();
  diagnosticoAux = new DiagnosisModel();
  consultId: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _router: Router,
    private _route: ActivatedRoute,
    private _service: ObtenerdiagnosticoService,
    private _servicediagnostico: MandardiagnosticoService
  ) {}

  ngOnInit() {
    //console.log("id : " + this.data.datakey);
    this.ObtenerDiagnostico();
  }

  enviardiagnostico() {
    this.diagnosticoAux = {
      diagnosis: this.diagnostico.diagnosis,
    };
    console.log(this.data.datakey);
    this._servicediagnostico
      .enviarDiagnostico(this.data.datakey, this.diagnosticoAux)
      .subscribe((data) => (this.diagnostico = data));
    //this.mensaje = "";
  }

  ObtenerDiagnostico() {
    this._service
      .getDiagnostico(this.data.datakey)
      .subscribe((data) => (this.diagnostico = data));
  }
}
