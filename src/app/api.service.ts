import { Injectable } from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'

const backendUrl = 'https://127.0.0.1:8000/'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public sendFeedback(feedback): Observable<any> {
    const body = JSON.stringify(feedback)
    const myHeaders = new HttpHeaders().set('Content-type', 'application/json')
    return this.http.post(backendUrl + 'api/feedback', body, {headers: myHeaders})
  }
}
