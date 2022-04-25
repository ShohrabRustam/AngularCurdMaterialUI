import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  freshnessList: string[] = ["Brand New", "Second Hand", "Refurbished"];

  //should be like your form name
  productForm !: FormGroup;

  actionBtn: string = 'Save'

  constructor(private formBuilder: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
      freshness: ['', Validators.required],
      productPrice: ['', Validators.required],
      comment: ['', Validators.required]
    })
    if (this.editData) {
      this.actionBtn = 'update'
      this.productForm.controls['productName'].setValue(this.editData.productName);
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['date'].setValue(this.editData.date);
      this.productForm.controls['freshness'].setValue(this.editData.freshness);
      this.productForm.controls['productPrice'].setValue(this.editData.productPrice);
      this.productForm.controls['comment'].setValue(this.editData.comment);

    }

    // console.log(this.editData);
  }

  addProduct() {
    // console.log(this.productForm.value);Best Laptop !
    if (!this.editData) {
      if (this.productForm.valid) {
        this.api.postProductData(this.productForm.value)
          .subscribe({
            // next is the observer type
            next: (response) => {
              alert("Product Added !!!");
              this.productForm.reset();
              this.dialogRef.close("Save");
            },
            error: () => {
              alert('Error While Added Product !!! ');
            }
          });
      }
    }
    else {
      this.updateProduct();
    }


  }

  updateProduct() {
    return this.api.putProduct(this.productForm.value, this.editData.id)
      .subscribe({
        next: (response) => {
          alert("data updated Succcessfully !!");
          this.productForm.reset();
          this.dialogRef.close("update");
        },
        error: () => {
          alert("Error While Update");
        }
      });
  }

}
