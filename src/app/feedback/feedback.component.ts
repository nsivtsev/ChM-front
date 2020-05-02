import {Component, OnInit} from '@angular/core'
import {ApiService} from '../api.service'
import {$} from 'jQuery';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackForm: any = {
    assortment: '0',
    processingTime: '0',
    paymentConditions: '0',
    delivery: '0',
    price: '0',
    appearance: '0',
    quality: '0',
    message: '',
    name: '',
    telephone: '',
    email: '',
    validateError: false
  }

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
  }

  validate() {
    this.feedbackForm.validateError = false
  }

  clearForm() {
    this.feedbackForm = {
      assortment: 0,
      processingTime: 0,
      paymentConditions: 0,
      delivery: 0,
      price: 0,
      appearance: 0,
      quality: 0,
      message: '',
      name: '',
      telephone: '',
      email: '',
      validateError: false
    }
  }

  submit() {
    const regexp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
    if (regexp.test(this.feedbackForm.email)) {
      // tslint:disable-next-line:radix
      this.feedbackForm.assortment = parseInt(this.feedbackForm.assortment)
      // tslint:disable-next-line:radix
      this.feedbackForm.processingTime = parseInt(this.feedbackForm.processingTime)
      // tslint:disable-next-line:radix
      this.feedbackForm.paymentConditions = parseInt(this.feedbackForm.paymentConditions)
      // tslint:disable-next-line:radix
      this.feedbackForm.delivery = parseInt(this.feedbackForm.delivery)
      // tslint:disable-next-line:radix
      this.feedbackForm.price = parseInt(this.feedbackForm.price)
      // tslint:disable-next-line:radix
      this.feedbackForm.appearance = parseInt(this.feedbackForm.appearance)
      // tslint:disable-next-line:radix
      this.feedbackForm.quality = parseInt(this.feedbackForm.quality)
      this.api.sendFeedback(this.feedbackForm).subscribe(res => {
        if (res['@id']) {
          $('#myModal').modal('show')
        }
      })
      this.clearForm()
    } else {
      this.feedbackForm.validateError = true
    }

  }
}
