import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MedicalHistoryListDetailService } from "src/app/core/http/services/medical-history-list-detail.service";
import { MedicalHistoryDetailJson } from "src/app/models/medical-history-detail-json";

@Component({
  selector: "app-historial-lista-detalle",
  templateUrl: "./historial-lista-detalle.component.html",
  styleUrls: ["./historial-lista-detalle.component.scss"],
})
export class HistorialListaDetalleComponent implements OnInit {
  listMedicalHistory = new MedicalHistoryDetailJson();
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _service: MedicalHistoryListDetailService
  ) {}
  ngOnInit() {
    this.ObtenerDatos();
  }
  HistorialMedicoDetalle(consultid: number) {
    this._router.navigate(["historial-completo/" + consultid], {
      relativeTo: this._route,
    });
  }
  ObtenerDatos() {
    this._service
      .getMedicalHistoryPatientsDetail(this._route.snapshot.paramMap.get("id"))
      .subscribe((data) => (this.listMedicalHistory = data));
  }
}
