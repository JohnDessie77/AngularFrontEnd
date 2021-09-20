import { Component, OnInit } from '@angular/core';
import { Organi } from '../organi.model';
import { OrganiService } from '../organi.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  constructor(private organiService: OrganiService) { }

  name: string;
  description: string;
  managing_department: string;

  ngOnInit(): void {
  }

  insertStructure(): void{
    const org: Organi = {
      name:this.name,
      description:this.description,
      managing_department:this.managing_department,
    }
    this.organiService.postStructure(org);
    window.location.reload()
  }



}
