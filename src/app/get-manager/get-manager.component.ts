import { Component, OnInit } from '@angular/core';
import { Organi } from '../organi.model';
import { OrganiService } from '../organi.service';

@Component({
  selector: 'app-get-manager',
  templateUrl: './get-manager.component.html',
  styleUrls: ['./get-manager.component.scss']
})
export class GetManagerComponent implements OnInit {

  barg: Organi[];
  all: Organi[];
  subord: Organi[];
 /* barg: Organi[]= [
    {Name: "Adugna", Description:"Student", Managing_Department:"The CEO"},
  ]; */
  Myid: string;
  status: boolean;
  showbtn: boolean;
  constructor(private organiServices: OrganiService) {}

  ngOnInit(): void {
  }

  getManagers(): void{
      let name:string = this.Myid;
      this.organiServices.getManagingStructures(name).subscribe(data=>{
        this.barg = data;
      })
      }

  getAllManagers(): void{
      this.organiServices.getAllManagingStructures().subscribe(data=>{
        this.all = data;
      })

      if(this.showbtn==true){
      this.showbtn=false;
    }else{
      this.showbtn=true;
    }
      }
  showManager():void{
    if(this.status==true){
      this.status=false;
    }else{
      this.status=true;
    }
  }

  getSubordinates(): void{
    let name:string = this.Myid;
      this.organiServices.getSubordinateStructures(name).subscribe(data=>{
        this.subord = data;
      })
      }
  }


