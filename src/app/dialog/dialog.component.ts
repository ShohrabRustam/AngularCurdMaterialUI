import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  freshnessList:string[]=["Brand New", "Second Hand", "Refurbished"];

  productForm !:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

  }

}
