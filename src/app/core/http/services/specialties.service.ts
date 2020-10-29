import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpecialtyModel } from 'src/app/models/specialty-model';

@Injectable({
  providedIn: 'root'
})
export class SpecialtiesService {

  constructor(private  _http: HttpClient) { }
  URL = "http://localhost:8080/api/v1/specialties";

  listaSpeciality(){
    return this._http.get<SpecialtyModel[]>(this.URL+"/");
  }
}
