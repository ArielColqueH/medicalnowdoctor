import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-activar-consulta",
  templateUrl: "./activar-consulta.component.html",
  styleUrls: ["./activar-consulta.component.scss"],
})
export class ActivarConsultaComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {}
  activarChat() {
    console.log(this.data.dataconsultid);
  }
}
