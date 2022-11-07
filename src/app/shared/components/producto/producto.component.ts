import { Router } from '@angular/router';
import { product } from './../../components/models/product.model';
import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {


  @Input() index: number = -1;
  @Input() product: product = {
    id: '',
    name: '',
    price: '',
    description: '',
    stars: 0,
    image: ''
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
