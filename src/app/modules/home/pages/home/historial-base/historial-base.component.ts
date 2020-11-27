import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MedicalHistoryListModelService } from "src/app/core/http/services/medical-history-list-model.service";
import { MedicalHistoryListModel } from "src/app/models/medical-history-list-model";

@Component({
  selector: "app-historial-base",
  templateUrl: "./historial-base.component.html",
  styleUrls: ["./historial-base.component.scss"],
})
export class HistorialBaseComponent implements OnInit {
  medicalHistoryList: MedicalHistoryListModel[] = [];
  constructor(
    private _service: MedicalHistoryListModelService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.ObtenerDatos();
  }
  ObtenerDatos() {
    this._service
      .getMedicalHistoryPatients()
      .subscribe((data) => (this.medicalHistoryList = data));
  }
}
