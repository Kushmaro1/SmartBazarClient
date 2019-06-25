import { Component, OnInit } from '@angular/core';
import { BazarService } from '../bazar.service';
import { FormControl, Validators} from '@angular/forms'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private service: BazarService) {}
    GetProductList(){
      this.service.GetAllProducts()
      .subscribe(data => console.log(data));
    }

  ngOnInit() {
  }

}
export class FormFieldErrorExample {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}
