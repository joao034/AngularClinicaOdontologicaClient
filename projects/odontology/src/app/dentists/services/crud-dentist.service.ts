import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/odontology/src/environments/environment';
import { Observable } from 'rxjs';
import { DentistModel } from '../models/dentist.model';

@Injectable({
  providedIn: 'root'
})
export class CrudDentistService {

  constructor(private http: HttpClient) { }

   //Observable esta pendiente de los cambios que ocurrene en la BD
   getDentists() : Observable<any>{
    return this.http.get<any>(`${environment.API_URL}/dentists`)
  }

  deleteDentist(id: string) : Observable<any>{
    return this.http.delete<any>(`${environment.API_URL}/dentists/${id}`)
  }

  //no pasa un objeto completo
  addDentist( user:Partial<DentistModel> ) : Observable<any>{
    return this.http.post(`${environment.API_URL}/dentists`, user)
  }

  getDentist( id : string): Observable<any>{
    return this.http.get(`${environment.API_URL}/dentists/${id}`)
  }

  updateDentist( id : string, user: Partial<DentistModel> ): Observable<any>{
    return this.http.put(`${environment.API_URL}/dentists/${id}`, user)
  }
}
