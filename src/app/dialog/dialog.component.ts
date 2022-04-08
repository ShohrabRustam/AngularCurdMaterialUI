import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  freshnessList:string[]=["Brand New", "Second Hand", "Refurbished"];

  //should be like your form name
  productForm !:FormGroup;

  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.productForm=this.formBuilder.group({
      productName: ['',Validators.required],
      category:['',Validators.required],
      date:['',Validators.required],
      freshness:['',Validators.required],
      productPrice:['',Validators.required],
      comment:['',Validators.required]
    })
  }

  addProduct(){
    // console.log(this.productForm.value);
    if(this.productForm.valid){

    }
  }

}
