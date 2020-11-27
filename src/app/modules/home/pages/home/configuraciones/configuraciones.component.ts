import { HostListener, ɵConsole } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { InformacionConsultasService } from "src/app/core/http/services/informacion-consultas.service";
import { InformacionGeneralService } from "src/app/core/http/services/informacion-general.service";
import { UserConfigurationService } from "src/app/core/http/services/user-configuration.service";
import { DoctorInfoModel } from "src/app/models/doctor-info-model";
import { User } from "src/app/models/user";
@Component({
  selector: "app-configuraciones",
  templateUrl: "./configuraciones.component.html",
  styleUrls: ["./configuraciones.component.scss"],
})
export class ConfiguracionesComponent implements OnInit {
  ciudad_combo: String[] = ["La Paz", "Cochabamba", "Santa Cruz"];
  user = new User();
  userConsult = new DoctorInfoModel();

  constructor(
    private _service: InformacionGeneralService,
    private _serviceConsult: InformacionConsultasService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.ObtenerdatosUsuario();
    this.ObtenerdatosConsultas();
  }

  ObtenerdatosUsuario() {
    this._service.getUserInfo().subscribe((data) => (this.user = data));
  }

  ObtenerdatosConsultas() {
    this._serviceConsult
      .getUserInfoConsult()
      .subscribe((data) => (this.userConsult = data));
  }

  actualizarGenerales() {
    this._service
      .updateUserInfo(this.user)
      .subscribe((data) => (this.user = data));
    window.location.reload();
  }

  actualizarConsultas() {
    this._serviceConsult
      .updateUserInfoConsult(this.userConsult)
      .subscribe((data) => (this.userConsult = data));
    window.location.reload();
  }
}
