import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserConfigurationService } from "src/app/core/http/services/user-configuration.service";
import { UserConfigurationModel } from "src/app/models/user-configuration-model";
@Component({
  selector: "app-configuraciones",
  templateUrl: "./configuraciones.component.html",
  styleUrls: ["./configuraciones.component.scss"],
})
export class ConfiguracionesComponent implements OnInit {
  ciudad_combo: String[] = ["La Paz", "Cochabamba", "Santa Cruz"];
  configuraciones: UserConfigurationModel[];
  aux: any;
  datos = new UserConfigurationModel();

  constructor(
    private _service: UserConfigurationService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.Obtenerdatos();
  }

  Obtenerdatos() {
    this._service
      .obtenerDatosConfiguration()
      .subscribe((data) => (this.configuraciones = data));
    this.aux = this.configuraciones;
  }

  @HostListener("window:beforeunload", ["$event"])
  clearLocalStorage(event) {
    localStorage.clear();
  }

  datosActualizados(){
    this._service.datosActualizadosFromRemote(this.datos).subscribe(
      (data) => {
        console.log("actualizados");
        this._router.navigate(['asistencia-medica/:id'])
      },
      (error) => {
        console.log("exception ocurred");
      }
    )
  }
}
