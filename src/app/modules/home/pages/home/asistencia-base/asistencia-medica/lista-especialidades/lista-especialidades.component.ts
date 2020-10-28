import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-lista-especialidades",
  templateUrl: "./lista-especialidades.component.html",
  styleUrls: ["./lista-especialidades.component.scss"],
})
export class ListaEspecialidadesComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  irListaEspecialistas() {
    console.log("ir a lista de especialistas");
    this.router.navigate(["lista-especialistas"], { relativeTo: this.route });
  }
}
