import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { ActivarConsultasService } from "src/app/core/http/services/activar-consultas.service";

@Component({
  selector: "app-activar-consulta",
  templateUrl: "./activar-consulta.component.html",
  styleUrls: ["./activar-consulta.component.scss"],
})
export class ActivarConsultaComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _router: Router,
    private _route: ActivatedRoute,
    private _service: ActivarConsultasService
  ) {}

  ngOnInit() {}
  activarChat() {
    this._service
      .activarChat(this.data.consultId)
      .subscribe((data) =>
        this._router.navigate(["consultas/" + localStorage.getItem("userId")])
      );
  }
}
