import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable() // servicio
export class EditarService {
  constructor(private readonly _httpClient: HttpClient) {}

  metodoGet(url: string) {
    return this._httpClient.get(url);
  }

  metodoPost(url: string, datos) {
    return this._httpClient.post(url, datos);
  }

  metodoPut(url: string, dataAEditar) {
    return this._httpClient.put(url, dataAEditar);
  }

  metodoDelete(url: string) {
    return this._httpClient.delete(url);
  }

  editarCredenciales(datosCredencialesEditar){
      const url = 'http://localhost:1337/usuario?idusu='
      return this._httpClient.post(url, datosCredencialesEditar);
  }
}