import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Celular } from '../models/celulares';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CelularesService {
  API_URI = 'http://localhost:1337/api';

  constructor(private http: HttpClient) { }

  getCelulares() {
    return this.http.get(`${this.API_URI}/celulares`);
  }

  getCelular(id: string) {
    return this.http.get(`${this.API_URI}/celulares/${id}`);
  }

  deleteCelular(id: string) {
    return this.http.delete(`${this.API_URI}/celulares/${id}`);
  }

  saveCelular(celular: Celular) {
    return this.http.post(`${this.API_URI}/celulares`, celular);
  }

  updateCelular(id: string|number, updateCelular: Celular): Observable<Celular> {
    return this.http.put(`${this.API_URI}/celulares/${id}`, updateCelular);
  }
}
