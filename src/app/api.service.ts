import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError, flatMap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public getList() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/albums', this.httpOptions);
  }

  public getPhotoByAlbum(id: number){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/photos?albumId=' + id, this.httpOptions);
  }

}
