import { Component } from '@angular/core';
import { BookService } from '../bookservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'pm-books',
  templateUrl:'./books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  pageTitle: string = 'Book List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  books=[{
    bookId :'',
    bookName:'',
    bookCode:'',
    releaseDate:'',
    description:'',
    price:'',
    starRating:'',
    imageUrl:''}]
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private router:Router,private bookService: BookService,public _auth:AuthService){   
    
  }
  ngOnInit(): void{
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
  })
  }
 
  editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['update']);

  }
  deleteProduct(product:any)
  {
    this.productService.deleteProduct(product._id)
      .subscribe((data) => {
        this.products = this.products.filter(p => p !== product);
      })
  

  }
}
  