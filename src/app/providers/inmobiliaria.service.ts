import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from '../models/Property';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { PaginationProperty } from '../models/PaginationProperty';
import { DetailProperty } from '../models/DetailProperty';

@Injectable({
  providedIn: 'root'
})
export class InmobiliariaService {
  api: string = environment.api;

  constructor(private http: HttpClient) { }

  getProperties(page: number = 1): Observable<PaginationProperty> {
    return this.http.get<PaginationProperty>(`${this.api}/new-search?tipo=10?&page=${page}`);
  }

  getPropertyById(data: Property): Observable<DetailProperty> {
    return this.http.get<DetailProperty>(`${this.api}/get-property/10/${data.provinciaUrl}/${data.ciudadUrl}/${data.id}`);
  }
}
