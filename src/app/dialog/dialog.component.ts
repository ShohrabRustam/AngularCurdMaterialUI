import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { group } from 'console';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  freshnessList:string[]=["Brand New", "Second Hand", "Refurbished"];

  productForm!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
    productName: ['',Validators.required],
    category:['',Validators.required],
    freshness:['',Validators.required],
    productPrice:['',Validators.required],
    comment:['',Validators.required],
    date:['',Validators.required]
    });
  }

}
