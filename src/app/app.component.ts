import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'finalTest';
  products: any[] = [];
  ngOnInit(): void {
    let token = "ajgjfjgjfjgjfjgjfjjgfjgjjfjjgjfj";
    // localStorage.setItem('tokenSina',token)
// let myToken = localStorage.getItem('tokenSina')
let myToken = localStorage.removeItem('tokenSina')
console.log(myToken)
    //1- برای تعریف ارایه اول باید متغیر آن تعریف شود
    //2- types of arrray
    //2-1 string[]
    // console.log(this.products);
    // this.products;
    let products2 = [
      { productId: 1, title: 'title-1' },
      { productId: 2, title: 'title-2' },
      { productId: 3, title: 'title-3' },
      { productId: 4, title: 'title-4' },
      { productId: 5, title: 'title-5' },
      { productId: 6, title: 'title-6' }
    ];
    console.log(products2)
    
  }

  sina() {}
}
