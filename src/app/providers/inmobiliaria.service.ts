import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from '../models/Property';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { PaginationProperty } from '../models/PaginationProperty';

@Injectable({
  providedIn: 'root'
})
export class InmobiliariaService {
  api: string = environment.api;

  constructor(private http: HttpClient) { }

  getProperties(): Observable<PaginationProperty> {
    return this.http.get<PaginationProperty>(`${this.api}/new-search?tipo=10`);
  }
}
