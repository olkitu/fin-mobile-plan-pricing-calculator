import { Component, OnInit } from '@angular/core';

export interface MoiMobiiliReilu5G {
  plan: number | string;
  dataAmount4G: number;
  dataAmount5G: number;
  calls: number;
  sms: number;
}

export interface MoiMobiiliReilu5GOutput {
  monthlyCostSummary: number;
  monthlyCostData: number;
  monthlyCostCallSMS: number;
}


@Component({
  selector: 'app-moi-mobiili-reilu5-g',
  templateUrl: './moi-mobiili-reilu5-g.component.html',
  styleUrls: ['./moi-mobiili-reilu5-g.component.css']
})
export class MoiMobiiliReilu5GComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.MoiMobileReilu5G()
  }


  formMoiMobiiliReilu5G: MoiMobiiliReilu5G = {
    plan: '400',
    dataAmount4G: 0,
    dataAmount5G: 0,
    calls: 0,
    sms: 0
  }

  formMoiMobiiliReilu5GOutput: MoiMobiiliReilu5GOutput = {
    monthlyCostSummary: 0,
    monthlyCostData: 0,
    monthlyCostCallSMS: 0,
  }


  MoiMobileReilu5G() {

    //5G data price max
    let dataPrice5G = 8;

    // 400M speed price in 4G
    let dataprice4G = 19;
    let dataMaxPrice5G = 27;
    if(this.formMoiMobiiliReilu5G.plan == 1000) {
      // 1000M speed price in 4G
      dataprice4G = 35
      dataMaxPrice5G = 43;
    }

    let monthlyCallSMSPrice = 0.055 * (this.formMoiMobiiliReilu5G.calls + this.formMoiMobiiliReilu5G.sms);

    let monthyDataPrice = dataprice4G + (dataPrice5G * (this.formMoiMobiiliReilu5G.dataAmount5G / (this.formMoiMobiiliReilu5G.dataAmount5G + this.formMoiMobiiliReilu5G.dataAmount4G)));

    if(monthyDataPrice > dataMaxPrice5G)
      monthyDataPrice = dataMaxPrice5G;

    if(this.formMoiMobiiliReilu5G.dataAmount4G == 0 && this.formMoiMobiiliReilu5G.dataAmount5G == 0)
      monthyDataPrice = dataprice4G;

    // SMS & Call price max 4€
    if(monthlyCallSMSPrice > 4)
      monthlyCallSMSPrice = 4;

    this.formMoiMobiiliReilu5GOutput = {
      monthlyCostSummary: (monthlyCallSMSPrice + monthyDataPrice),
      monthlyCostData: monthyDataPrice,
      monthlyCostCallSMS: monthlyCallSMSPrice
    }
  }

}
