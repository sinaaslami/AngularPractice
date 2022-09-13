import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private router: Router, private productService: ProductService) {}
  array: any[] = [];
  ngOnInit(): void {
    // for (let i = 0; i < 20; i++) {
    //   this.array.push({
    //     id: i,
    //     title: `title-${i}`,
    //     details: { price: i * 1000, discount: i / 100 },
    //     description: `title of this product is description ${i}`,
    //   });
    // }
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(
      (res) => {
        this.array = res;
      },
      (error: any) => {},
      () => {}
    );
  }
  title: string = '';
  description: string = '';
  getDetail(item: any) {
    this.title = item.title;
    this.description = item.description;
  }
  index!: number;
  getIndex(index: number) {
    this.index = index + 1;
  }
  goToDetail() {
    let product = this.array.find((p) => p.id === this.index);
    let productId = product.id;
    this.router.navigateByUrl(`products/${productId}/1`);
  }
  product: any;
  getProduct(item: any) {
    // this.product = this.array.find((p) => p.id === item.id)
    this.product = item;
    setTimeout(() => {
      document.getElementById('editProduct')?.scrollIntoView();
    }, 10);
  }
  save(event: any) {
    if (event.id) {
      //edit mode
      event; //product2
      let index = this.array.findIndex((p) => p.id === event.id);
      this.array[index] = event;
      this.product = undefined;
      document.getElementById(`product-${index}`)?.scrollIntoView();
    } else {
      //add mode
      event;
      debugger;
      let newProductId = Date.now();
      let addedProduct = {
        id: newProductId,
        title: event.title,
        description: event.description,
        details: {
          price: 1000,
          discount: 0.01,
        },
      };
      this.array.push(addedProduct);
      this.isAdd = false;
      setTimeout(() => {
        document.getElementById(`product-${newProductId}`)?.scrollIntoView();
      }, 10);
      this.productService.addProduct(addedProduct).subscribe(res=>{
        debugger
      })
    }
  }

  isAdd: boolean = false;
  add() {
    this.isAdd = true;
    setTimeout(() => {
      document.getElementById('addProduct')?.scrollIntoView();
    }, 10);
  }
}
