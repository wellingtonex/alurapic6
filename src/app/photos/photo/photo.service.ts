import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

@Injectable({providedIn: 'root' })
export class PhotoService {

  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    return this.http
        .get<Photo[]>(`http://localhost:3000/${userName}/photos`);
  }

  listFromUserPaginated(userName: string, pagina: number, ) {
    const params = new HttpParams().append('page', pagina.toString());
    return this.http
        .get<Photo[]>(`http://localhost:3000/${userName}/photos`, {params : params});
  }
}
