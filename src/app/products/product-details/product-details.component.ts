import { Component, OnInit } from '@angular/core';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    public router: ActivatedRoute,
    private productService: ProductService
  ) {}
  productId: number = 0;
  userId: number = 0;
  array: any[] = [];
  ngOnInit(): void {
    this.router.params.subscribe((res) => {
      this.productId = parseInt(res['id']);
      this.userId = res['userId'];
      this.getProduct(this.productId);
      // try {
      //   this.array;
      //   debugger;
      //   for (let i = 0; i < 20; i++) {
      //     this.array.push({ id: i, title: `title-${i}` });
      //   }
      //   // this.array.push({id:this.productId, title:`title-${this.productId}`})
      //   let arrayLength = this.array.length;
      //   //filter returns an array
      //   let filteredArray = this.array.filter((x) => x.id === this.productId);
      //   debugger;
      // } catch {

      // }
      if (this.productId) {
        for (let i = 0; i < 20; i++) {
          this.array.push({ id: i, title: `title-${i}` });
        }

        // this.array.push({id:this.productId, title:`title-${this.productId}`})
        let arrayLength = this.array.length;
        //filter returns an array
        let filteredArray = this.array.filter(
          (x) => x.id === parseInt(this.productId.toString())
        );
        let filteredArray3 = this.array.filter(
          (x) => x.id === parseInt(this.productId.toString())
        )[0];
        let filteredArray2 = this.array.filter((x) => x.id >= 10);
        let filteredArray4 = this.array.findIndex((x) => x.id >= 10);
        let filteredArray6 = this.array.findIndex((x) => x.id > 20);
        let filteredArray5 = this.array.find((x) => x.id >= 10);
        let filteredArray7 = this.array.find(
          (x) => x.id >= 10 && x.title.includes('i')
        );
      }
    });




  }

product:any;


  getProduct(id: number) {
    this.productService.getProduct(this.productId).subscribe(
      (res) => {
        this.product = res;
      },
      (error: any) => {},
      () => {}
    );
    /// call services (apis) to get the response
    
  }
}
