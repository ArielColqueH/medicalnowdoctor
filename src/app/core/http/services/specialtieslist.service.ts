import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialtieslistService {

  constructor(private  _http: HttpClient) { }

  URL="http://localhost:8008/api/v1/specialties"

  listSpecialties(id){
    return this._http.get<any>(this.URL+"/"+id);
  }
}
