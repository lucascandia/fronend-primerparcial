import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {listadatos} from "../model/datos";
import {Pais} from "../model/pais";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServicepaisService {

  private api: string ="http://181.123.253.74:8080/stock/";

  constructor(private http: HttpClient) { }

  getPaises(): Observable<listadatos<Pais>> {
    return this.http.get<listadatos<Pais>>(this.api);
  }

  agregarPais(p:Pais): Observable<Pais> {
    return this.http
      .post<Pais>(this.api, p)
      .pipe(
        tap( // Log the result or error

          data => console.log('agregado '+data),
          error => console.log("error: "+error)
        )
      );
  }


}