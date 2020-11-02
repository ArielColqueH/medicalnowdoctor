import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { SpecialtyModel } from "src/app/models/specialty-model";

@Injectable({
  providedIn: "root",
})
export class SpecialtiesService {
  constructor(private _http: HttpClient) {}
  URL = "http://localhost:8008/api/v1/specialties";
  listaSpeciality() {
    var tokenUser = localStorage.getItem("JWT_TOKEN");
    const reqHeader = new HttpHeaders({
      Authorization: "bearer " + tokenUser,
    });
    return this._http.get<SpecialtyModel[]>(this.URL, {
      headers: reqHeader,
    });
  }
}
