import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCurdMaterialUI';

  constructor(private dialog:MatDialog, private api :ApiService)
  {}

  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%'
    });
  }

  getAllProducts(){
    this.api.getProductData().subscribe({
      next:(response)=>{
        console.log(response);
      },
      error:(error)=>{
        alert('Error while fatching Records !!');
      }
    })
  }

}
