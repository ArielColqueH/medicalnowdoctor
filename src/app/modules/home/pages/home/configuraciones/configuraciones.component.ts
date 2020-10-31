import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
@Component({
  selector: "app-configuraciones",
  templateUrl: "./configuraciones.component.html",
  styleUrls: ["./configuraciones.component.scss"],
})
export class ConfiguracionesComponent implements OnInit {
  selectedValueCombobox: string;
  ciudad_combo: String[] = ["La Paz", "Cochabamba", "Santa Cruz"];
  user = new User();
  constructor() {}

  ngOnInit() {}
}
