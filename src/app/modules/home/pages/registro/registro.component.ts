import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
interface Ciudad {
  nombre_ciudad: string;
}

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.scss"],
})
export class RegistroComponent implements OnInit {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  celular: string;
  ciudad: string;
  fechaNacimiento: string;
  contraseña: string;
  mylogo: string = "assets/images/Logo.png";

  selectedValue: string;

  ciudad_combo: Ciudad[] = [
    { nombre_ciudad: "La Paz" },
    { nombre_ciudad: "Cochabamba" },
    { nombre_ciudad: "Santa Cruz" },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
  registrarUsuario() {
    console.log("registrar");
    this.router.navigate(["asistencia-medica"], { relativeTo: this.route });
  }
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);
}
