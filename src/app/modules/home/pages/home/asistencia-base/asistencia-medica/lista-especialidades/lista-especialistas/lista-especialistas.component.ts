import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { SpecialtieslistService } from 'src/app/core/http/services/specialtieslist.service';
import { DoctorSpecialtyModel } from 'src/app/models/doctor-specialty-model';
import { ListEspecialist } from "src/app/models/ListaEspecialista";

@Component({
  selector: "app-lista-especialistas",
  templateUrl: "./lista-especialistas.component.html",
  styleUrls: ["./lista-especialistas.component.scss"],
})
export class ListaEspecialistasComponent implements OnInit {
  /*listaEspecialista: ListEspecialist[] = [
    {
      specialist_id: 1,
      specialist_avatar: "A",
      specialist_name: "Ariel Colque Herrera",
      specialist_score: 4.2,
    },
    {
      specialist_id: 2,
      specialist_avatar: "V",
      specialist_name: "Lizbeth vania Vera",
      specialist_score: 4.8,
    },
  ];*/

  listaEspecialista:DoctorSpecialtyModel[];
  aux: any;

  constructor(private _service: SpecialtieslistService, private _router: Router) {}

  ngOnInit() {
    this.ObtenerDatos();
  }

  ObtenerDatos(){
    this._service.listSpecialties(localStorage.getItem("specialtyId")).subscribe(
      data => this.listaEspecialista=data);
      this.aux = this.listaEspecialista;
  }
}
