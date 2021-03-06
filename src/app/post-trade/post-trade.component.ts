import { Component, OnInit } from '@angular/core';
import { SteemconnectBroadcastService } from '../steemconnect/services/steemconnect-broadcast.service';
import {AdvertisementRequest} from '../module/advertisement';
@Component({
  selector: 'app-post-trade',
  templateUrl: './post-trade.component.html',
  styleUrls: ['./post-trade.component.css']
})
export class PostTradeComponent implements OnInit {

  constructor(public broadcast: SteemconnectBroadcastService) {
   }

  advertisement : AdvertisementRequest = {
    createdby: '',
    ad_type:'',
    country: '',
    payment_methods: [''],
    currency: '',
    margin: 0,
    limit_from: 0,
    limit_to: 0,
    restricted_amounts: [],
    ad_coin : '',
    ad_coin_amount : 0,
    terms: '',
    ad_details:{
      minimum_volume_sbd: '',
      minimum_volume_steem: '',
      minimum_reputation_score:'',
      new_buyer_limit_sbd: '',
      new_buyer_limit_steem: '',
      track_liquidity:true
    },
    security_details:{
      identified_people_only:true,
      identify_user_before_continuing_trade:true,
      real_name_required:true,
      sms_verification_required:true,
      trusted_people_only:true
    }
    
  };


  ngOnInit() {
  }

  onSubmit(form){
    console.log(form);
    this.broadcast.broadcastCustomJson('swapsteem','advertisement',this.advertisement)
    .subscribe(res => console.log(res));
  }

  country = ['','India','USA','South Korea','Indonesia','Nigeria'];
  ad_type = ['buy','sell'];
  ad_coin = ['STEEM','SBD'];
  payment_methods = ['Bank Transfer','Wallet Transfer', 'PayPal'];
}
