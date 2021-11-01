import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CreateProductModel } from '../models/CreateProductModel';
// import CustomValidators from '../../../core/utils/customValidators';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  protected createForm;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      image: ['', [Validators.required, Validators.minLength(14), Validators.pattern('^(http|https):\/\/[a-zA-Z0-9]+.*$')]],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  create() {
    if (this.createForm.invalid) {
      return;
    }

    const product: CreateProductModel = Object.assign({}, this.createForm.value);

    this.productsService.createProduct(product);
  }

  get name() {
    return this.createForm.get('name');
  }

  get description() {
    return this.createForm.get('description');
  }

  get image() {
    return this.createForm.get('image');
  }

  get price() {
    return this.createForm.get('price');
  }
}