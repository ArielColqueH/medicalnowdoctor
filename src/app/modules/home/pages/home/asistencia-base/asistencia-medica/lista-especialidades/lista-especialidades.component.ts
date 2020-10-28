import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ListaEspecialidades } from "src/app/models/ListaEspecialidades";
@Component({
  selector: "app-lista-especialidades",
  templateUrl: "./lista-especialidades.component.html",
  styleUrls: ["./lista-especialidades.component.scss"],
})
export class ListaEspecialidadesComponent implements OnInit {
  listaEspecialidades: ListaEspecialidades[] = [
    {
      specialty_id: 1,
      specialist_total: 20,
      specialty_name: "Pediatria",
    },
    {
      specialty_id: 2,
      specialist_total: 30,
      specialty_name: "Dermatologia",
    },
    {
      specialty_id: 3,
      specialist_total: 40,
      specialty_name: "Dentista",
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  irListaEspecialistas() {
    console.log("ir a lista de especialistas");
    this.router.navigate(["lista-especialistas"], { relativeTo: this.route });
  }
}
