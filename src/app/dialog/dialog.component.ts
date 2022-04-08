import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  freshnessList:string[]=["Brand New", "Second Hand", "Refurbished"];

  //should be like your form name
  productForm !:FormGroup;

  constructor(private formBuilder:FormBuilder, private api:ApiService, private dialogRef:MatDialogRef<DialogComponent>) { }

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
      this.api.postProductData(this.productForm.value)
      .subscribe({
        // next is the observer type
        next:(response)=>{
          alert("Product Added !!!");
          this.productForm.reset ();
        },
        error:()=>{
            alert('While Added Product !!! ');
        }
      });
    }

  }

}
