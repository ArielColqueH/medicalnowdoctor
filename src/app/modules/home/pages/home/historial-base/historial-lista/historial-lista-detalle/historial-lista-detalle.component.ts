import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-historial-lista-detalle",
  templateUrl: "./historial-lista-detalle.component.html",
  styleUrls: ["./historial-lista-detalle.component.scss"],
})
export class HistorialListaDetalleComponent implements OnInit {
  constructor(private _router: Router, private route: ActivatedRoute) {}
  ngOnInit() {}
  HistorialMedicoDetalle(consultid: number) {
    this._router.navigate(["historial-completo/" + consultid], {
      relativeTo: this.route,
    });
  }
}
