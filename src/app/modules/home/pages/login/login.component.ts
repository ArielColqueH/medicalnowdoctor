import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  mylogo: string = "assets/images/Logo.png";
  contrasenia: string;
  correo: string;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  ingresar() {
    this.router.navigate(["asistencia-medica"], { relativeTo: this.route });
  }
  irRegistro() {
    this.router.navigate(["registro"], { relativeTo: this.route });
  }
}
