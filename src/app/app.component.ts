import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';


import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularCurdMaterialUI';

  constructor(private dialog: MatDialog, private api: ApiService) { }

//   category: "Fruits"
// comment: "a"
// date: "2022-03-07T18:30:00.000Z"
// freshness: "Brand New"
// id: 1
// productName: "a"
// productPrice: 90

  displayedColumns: string[] = ['id', 'productName', 'category', 'freshness','date','productPrice', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;




  ngOnInit():void{
    this.getAllProducts();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%',
    });
  }

  editProduct(row:any){
    this.dialog.open(DialogComponent,{
    width:'30%',
    data:row
    });
  }

  getAllProducts(){
    this.api.getProductData().
    subscribe({
      next:(response)=>{
        // console.log(response);
        this.dataSource=new MatTableDataSource(response);
        this.dataSource.paginator= this.paginator;
        this.dataSource.sort=this.sort;
      },
      error:(error)=>{
      alert("Error while fatching Records !!");
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
