import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/auth.service";
import { Avatar } from "src/app/models/avatar";
import { AvatarService } from "src/app/core/http/services/avatar.service";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
<<<<<<< HEAD
  isSidebarOpen2: boolean = true;
  contentMargin = 25;
  aux: any;
  avatar: Avatar[];
=======
  avatar = new Avatar();
>>>>>>> ca600d1bee620c9b9b908a497a910c409af94026
  constructor(
    private _service: AvatarService,
    private _location: Location,
    private _router: Router,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.ObtenerDatos();
  }
  ObtenerDatos() {
<<<<<<< HEAD
    this._service.listAvatar().subscribe(
      data => this.avatar=data);
      this.aux = this.avatar; 
=======
    this._service.listAvatar().subscribe((data) => (this.avatar = data));
    //this.aux = this.listaEspecialidades;
    //console.log("avatar : " + this.avatar);
>>>>>>> ca600d1bee620c9b9b908a497a910c409af94026
  }
  signout(): void {
    this.authService.doLogoutUser();
    this._router.navigate(["/login"]);
  }
}
