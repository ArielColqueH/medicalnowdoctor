import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

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
  contrasenia: string;
  correo: string;
  mylogo: string = "assets/images/Logo.png";

  selectedValueCombobox: string;

  ciudad_combo: String[] = ["La Paz", "Cochabamba", "Santa Cruz"];
  hide = true;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
  registrarUsuario() {
    console.log("registrar");
    console.log(this.nombre);
    console.log(this.apellidoPaterno);
    console.log(this.apellidoMaterno);
    console.log(this.celular);
    console.log(this.fechaNacimiento);
    console.log(this.selectedValueCombobox);
    console.log(this.correo);
    console.log(this.contrasenia);

    this.router.navigate(["asistencia-medica"], { relativeTo: this.route });
  }
}
