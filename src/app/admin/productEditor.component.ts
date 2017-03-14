import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductRepository} from '../model/product.repository';
import {Product} from '../model/product.model';
import {NgForm} from '@angular/forms';

@Component({
  templateUrl: 'productEditor.component.html'
})
export class ProductEditorComponent {
  editing = false;
  product: Product = new Product();

  constructor(private repository: ProductRepository,
              private router: Router,
              activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      Object.assign(this.product,
        repository.getProduct(activeRoute.snapshot.params['id']));
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}
