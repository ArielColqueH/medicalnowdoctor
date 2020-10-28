import { Component, OnInit } from "@angular/core";
import { ListEspecialist } from "src/app/models/ListaEspecialista";

@Component({
  selector: "app-lista-especialistas",
  templateUrl: "./lista-especialistas.component.html",
  styleUrls: ["./lista-especialistas.component.scss"],
})
export class ListaEspecialistasComponent implements OnInit {
  listaEspecialista: ListEspecialist[] = [
    {
      especialist_id: 1,
      especialist_avatar: "A",
      especialist_name: "Ariel Colque Herrera",
      especialist_score: 4.2,
    },
    {
      especialist_id: 2,
      especialist_avatar: "V",
      especialist_name: "Lizbeth vania Vera",
      especialist_score: 4.8,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
