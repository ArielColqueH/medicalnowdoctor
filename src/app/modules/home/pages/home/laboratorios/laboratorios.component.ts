import { Component, OnInit } from "@angular/core";
import { Laboratory } from "src/app/models/Laboratory";
import { ListEspecialist } from "src/app/models/ListaEspecialista";

@Component({
  selector: "app-laboratorios",
  templateUrl: "./laboratorios.component.html",
  styleUrls: ["./laboratorios.component.scss"],
})
export class LaboratoriosComponent implements OnInit {
  laboratoryList: Laboratory[] = [
    {
      laboratoryId: 1,
      laboratoryName: "Electrocardiograma",
      laboratoryDoctor: "Tony Stark",
      laboratoryDoctorSpecialist: "Cardiologo",
      laboratoryDate: "11/12/2020",
    },
    {
      laboratoryId: 2,
      laboratoryName: "Analisis",
      laboratoryDoctor: "Rey richards",
      laboratoryDoctorSpecialist: "Dentista",
      laboratoryDate: "15/12/2020",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
