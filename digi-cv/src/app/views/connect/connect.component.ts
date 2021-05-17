import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  regForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    subject: ['', [Validators.required, Validators.minLength(2)]],
    msg: ['', [Validators.required, Validators.minLength(5)]]
  })

  onSubmit() {
    console.log(this.regForm.value);
    this.regForm.reset()
  }

  ngOnInit(): void {
  }

}
