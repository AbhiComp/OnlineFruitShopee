import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  private apiUrl = 'https://run.mocky.io/v3/2296c375-8e90-4822-9a30-34ee5602e6c0';

  constructor(private http: HttpClient) {}

  getFruits(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
