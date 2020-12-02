import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LaboratoryService } from "src/app/core/http/services/laboratory.service";
import { Laboratory } from "src/app/models/Laboratory";
import { ListEspecialist } from "src/app/models/ListaEspecialista";

@Component({
  selector: "app-laboratorios",
  templateUrl: "./laboratorios.component.html",
  styleUrls: ["./laboratorios.component.scss"],
})
export class LaboratoriosComponent implements OnInit {
  //listlaboratory: Laboratory[];

  listlaboratory: Laboratory[] = [
    // {
    //   laboratoryExamsId: "1",
    //   laboratoryName: "Electrocardiograma",
    //   doctorFirstName: "Mario",
    //   doctorFirstSurname: "Rojas",
    //   specialtyName: "Lopez",
    //   laboratoryOrderDate: "2020/1/12",
    //   labExamOrder: "5",
    // },
    // {
    //   laboratoryExamsId: "2",
    //   laboratoryName: "Electrocardiograma 2",
    //   doctorFirstName: "Mariana",
    //   doctorFirstSurname: "Lucero",
    //   specialtyName: "Justina",
    //   laboratoryOrderDate: "2020/1/13",
    //   labExamOrder: "6",
    // },
  ];

  constructor(private _service: LaboratoryService, private _router: Router) {}

  ngOnInit() {
    this.ObtenerDatos();
  }

  ObtenerDatos() {
    this._service
      .listLaboratory()
      .subscribe((data) => (this.listlaboratory = data));
  }
}
