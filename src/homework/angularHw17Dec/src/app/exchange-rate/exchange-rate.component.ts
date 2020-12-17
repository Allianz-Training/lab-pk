import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {

  form: FormGroup
  result: number = 0

  constructor(private httpClient: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({
      base: [''],
      baseMoney: ['', [Validators.min(1)]],
      convertBase: ['']
    })
  }

  ngOnInit(): void {
  }

  convert(): void {
    const base = (this.form.get('base').value).toUpperCase() || 'THB'
    const symbols = (this.form.get('convertBase').value).toUpperCase() || 'USD'
    this.httpClient.get(`https://api.exchangeratesapi.io/latest`, { params: { base, symbols } })
    .subscribe(res => {
      this.result = this.form.get('baseMoney').value * res['rates'][symbols]
    })
  }
}
