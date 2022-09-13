import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit, OnChanges {
  //#region pure edit
  // @Input() productInput: any;
  // @Output() saveChanges = new EventEmitter<any>();
  // constructor() {}
  // ngOnChanges() {
  //   // this.product2 = this.productInput;
  //   this.product2 = {...this.productInput}
  // }
  // product2: any;
  // ngOnInit(): void {
  //   // this.product2 = this.productInput;
  //   // debugger;
  // }
  // save() {
  //   this.saveChanges.emit(this.product2);
  // }
  //#endregion
  @Input() productInput: any;
  @Output() saveChanges = new EventEmitter<any>();
  constructor() {}
  // added for add mode
  title: string = '';
  description: string = '';

  ngOnChanges() {
    this.product2 = { ...this.productInput };
  }
  product2: any;
  ngOnInit(): void {
    // this.product2 = this.productInput;
    // debugger;
  }
  save() {
    if (this.productInput) {
      this.saveChanges.emit(this.product2);
    } else {
      let newProduct = { title: this.title, description: this.description };
      this.saveChanges.emit(newProduct);
    }
  }
}
