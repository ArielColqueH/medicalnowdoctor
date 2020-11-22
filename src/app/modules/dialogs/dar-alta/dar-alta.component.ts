import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { DarAltaService } from "src/app/core/http/services/dar-alta.service";

@Component({
  selector: "app-dar-alta",
  templateUrl: "./dar-alta.component.html",
  styleUrls: ["./dar-alta.component.scss"],
})
export class DarAltaComponent implements OnInit {
  respuesta: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _router: Router,
    private _route: ActivatedRoute,
    private _service: DarAltaService
  ) {}

  ngOnInit() {}

  darAlta() {
    this._service
      .darAlta(this.data.datacondultid)
      .subscribe((data) =>
        this._router.navigate(["consultas/" + localStorage.getItem("userId")])
      );

    //window.location.reload();
  }
}
