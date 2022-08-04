import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-type-filter',
  templateUrl: './home-type-filter.component.html'
})
export class HomeTypeFilterComponent implements OnInit {

  @Input() defaultFilters = [];
  @Output() applied = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      Apartment: [this.defaultFilters.includes('Apartment')],
      Room: [this.defaultFilters.includes('Room')],
      House: [this.defaultFilters.includes('House')]
    });

  }

  submit(formValue) {

    //Object.keys();//this return the keys of an array 
    //console.log("==========formValue:  "+formValue)
    //console.log("==========Object.keys(formValue):  "+Object.keys(formValue))
    const homeTypes = Object.keys(formValue).filter(item => formValue[item]);
    //console.log("=========homeType:  "+homeTypes)
    this.applied.emit(homeTypes);

  }

}
