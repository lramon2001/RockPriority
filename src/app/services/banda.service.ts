
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Banda } from '../objetos/Banda';

@Injectable({
  providedIn: 'root'
})
export class BandaService {
  private readonly API = `${environment.API}bandas`;
  constructor(private $http: HttpClient) { }

  listar(){
    return this.$http.get<Banda[]>(`${this.API}`);
  }

  excluir(id:any){
    return this.$http.delete(`${this.API}/${id}`);
  }

  adicionar(banda: Banda){
    return this.$http.post(this.API,banda);
  }

  atualizar(banda: Banda){
    return this.$http.put(`${this.API}/${banda.id}`,banda);
  }

  buscarPorId(id:any){
    return this.$http.get<Banda>(`${this.API}/${id}`);
  }
}
