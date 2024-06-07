import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from 'src/app/model/products';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class ProductFormComponent implements OnInit {

  formGroup!:FormGroup

  constructor(public dialogRef: MatDialogRef<ProductListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private formBuilder:FormBuilder) {

   }

  ngOnInit(): void {
    this.initForm
  }

  initForm(){
    if(!this.data) {
      this.formGroup=this.formBuilder.group({
        name:["", Validators.required],
        code:["", Validators.required],
        category:["", Validators.required],
        description:["", Validators.required],
        price:["", Validators.required],
        amount:["", Validators.required]
      });

    }else{
      this.formGroup=this.formBuilder.group({
        name:[this.data.name|| "", Validators.required ],
        code:[this.data.name|| "", Validators.required ],
        category:[this.data.name|| "", Validators.required ],
        description:[this.data.name|| "", Validators.required ],
        price:[this.data.name|| "", Validators.required ],
        amount:[this.data.name|| "", Validators.required ],
      })
    }
  }

}
