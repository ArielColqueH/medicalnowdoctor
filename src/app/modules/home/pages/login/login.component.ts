import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  mylogo: string = "assets/images/Logo.png";
  contrasenia: string;
  correo: string;
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [""],
      password: [""],
    });
    this.correo = "";
    this.contrasenia = "";
  }

  ingresar() {
    this.router.navigate(["asistencia-medica"], { relativeTo: this.route });
  }
  irRegistro() {
    this.router.navigate(["registro"]);
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.authService
      .login({
        email: this.f.email.value,
        password: this.f.password.value,
      })
      .subscribe((success) => {
        if (success) {
          this.router.navigate(["/asistencia-medica"]);
        }
      });
  }
}
