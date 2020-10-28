import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-asistencia-medica",
  templateUrl: "./asistencia-medica.component.html",
  styleUrls: ["./asistencia-medica.component.scss"],
})
export class AsistenciaMedicaComponent implements OnInit {
  medicoGeneralImage: string = "assets/images/doctor.png";
  especialistaImage: string = "assets/images/stethoscope.png";
  message: String = "link";
  nombrePaciente: string = "Mariana";
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
  irMedicoGeneral() {
    console.log("medico general");
  }
  irMedicoEspecialista() {
    console.log("especialista");
    this.router.navigate(["lista-especialidades"], { relativeTo: this.route });
  }
}
