import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  freshnessList:string[]=["Brand New", "Second Hand", "Refurbished"];


  constructor() { }

  ngOnInit(): void {

  }

}
