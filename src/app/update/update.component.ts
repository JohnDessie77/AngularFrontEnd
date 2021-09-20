import { Component, OnInit } from '@angular/core';
import { OrganiService } from '../organi.service';
import { Organi } from '../organi.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private organiService: OrganiService) { }

  Desc:string;
  MyDept:string;
  managing_department:string;

  barg: Organi[];

  ngOnInit(): void {
  }

  getManager(): void{
      let name:string = this.MyDept;
      this.organiService.getManagingStructures(name).subscribe(data=>{
        this.barg = data;
      })
      }

  update(org: Organi): void{
    this.organiService.updateStructure(org).subscribe(data=>{
    })
    
    window.location.reload()
  }
  delete(org: Organi): void{
    this.organiService.deleteStructure(org).subscribe(data=>{
    })
    
    window.location.reload()
  }
}
