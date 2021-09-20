import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Organi } from './organi.model';

@Injectable({
  providedIn: 'root'
})
export class OrganiService {

  constructor(private http: HttpClient) {
  }
  getManagingStructures(name: string): Observable<any> {
    return this.http.get('http://localhost:3000/structures/query/'+name);
  }
  getAllManagingStructures(): Observable<any> {
    return this.http.get('http://localhost:3000/structures');
  }
  getSubordinateStructures(name: string): Observable<any> {
    return this.http.get('http://localhost:3000/structures/query2/'+name);
  }

  postStructure(org: Organi) {
    return this.http.post('http://localhost:3000/structures',org).subscribe(data =>{
      console.log("New Structure Created!")
    })
  }

  updateStructure(myData: Organi) {
    return this.http.put('http://localhost:3000/structures/update',myData);
  }

  deleteStructure(myData: Organi) {
    return this.http.delete('http://localhost:3000/structures/delete/'+myData.id);
  }
}
