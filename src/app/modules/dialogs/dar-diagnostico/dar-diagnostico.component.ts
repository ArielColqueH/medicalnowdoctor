import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dar-diagnostico",
  templateUrl: "./dar-diagnostico.component.html",
  styleUrls: ["./dar-diagnostico.component.scss"],
})
export class DarDiagnosticoComponent implements OnInit {
  diagnostico: string;
  constructor() {}

  ngOnInit() {}

  enviardiagnostico() {
    console.log(this.diagnostico);
  }
}
