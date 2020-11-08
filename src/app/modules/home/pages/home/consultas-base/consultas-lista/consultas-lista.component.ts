import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ConsultasPacientesService } from "src/app/core/http/services/consultas-pacientes.service";
import { ConsultsDoctorModel } from "src/app/models/consults-doctor-model";

@Component({
  selector: "app-consultas-lista",
  templateUrl: "./consultas-lista.component.html",
  styleUrls: ["./consultas-lista.component.scss"],
})
export class ConsultasListaComponent implements OnInit {
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _service: ConsultasPacientesService
  ) {}

  consultasDePaciente: ConsultsDoctorModel[];

  ngOnInit() {
    this.ObtenerDatos();
  }

  irAChat(consultaId: number) {
    this._router.navigate(["consulta-individual/" + consultaId], {
      relativeTo: this._route,
    });
  }

  ObtenerDatos() {
    this._service
      .listConsultsPatients()
      .subscribe((data) => (this.consultasDePaciente = data));
  }
}
