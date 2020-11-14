import { Component, OnInit } from "@angular/core";
import { Prescription } from "src/app/models/prescription";

@Component({
  selector: "app-detalle-prescripcion",
  templateUrl: "./detalle-prescripcion.component.html",
  styleUrls: ["./detalle-prescripcion.component.scss"],
})
export class DetallePrescripcionComponent implements OnInit {
  prescriptionList: Prescription[] = [];
  descripcion: string;

  constructor() {}

  ngOnInit() {}
  agregaralista() {
    var aux = {
      prescriptionId: 0,
      prescriptionName: "",
      prescriptionDetail: "",
      prescriptionQuantity: 0,
    };
    this.prescriptionList.push(aux);
  }
  eliminardelista(listaid: number) {
    console.log(listaid);
    this.prescriptionList.splice(listaid, 1);
  }
  enviarprescripcion() {
    console.log(this.descripcion);
    this.prescriptionList.forEach((element) => {
      console.log(
        element.prescriptionName +
          " " +
          element.prescriptionDetail +
          " " +
          element.prescriptionQuantity
      );
    });
  }
}
