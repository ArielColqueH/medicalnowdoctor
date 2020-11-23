import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HistorialMedicoService } from "src/app/core/http/services/historial-medico.service";
import { MedicalHistoryListModel } from "src/app/models/medical-history-list-model";

@Component({
  selector: "app-historial-lista",
  templateUrl: "./historial-lista.component.html",
  styleUrls: ["./historial-lista.component.scss"],
})
export class HistorialListaComponent implements OnInit {
  medicalHsitoryListModel: MedicalHistoryListModel[] = [];
  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _service: HistorialMedicoService
  ) {}

  ngOnInit() {
    //this.ObtenerDatos();
  }
  irHistorialGeneral(medicalHistoryId: number) {
    this._router.navigate(["historial-lista-detalle/" + medicalHistoryId], {
      relativeTo: this.route,
    });
  }
}
