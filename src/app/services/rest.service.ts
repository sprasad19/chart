


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class RestService {




  constructor(private http: HttpClient) { }



  get(link: string) {
    return this.http.get(link).toPromise();
  }

  temprature(): Observable<any> {
    return this.http.get('https://gitlab.com/snippets/1872645/raw')
    .map((response: Response) => <any>response);
  }
  pressure(): Observable<any>   {
    return this.http.get('https://gitlab.com/snippets/1872662/raw')
    .map((response: Response) => <any>response);

  }

}
