export interface AdvertisementRequest {
    createdby: string,
    ad_type: string,
    country: string,
    payment_methods: string[],
    currency: string,
    margin: number,
    limit_from: number,
    limit_to: number,
    restricted_amounts: string[],
    ad_coin : string,
    ad_coin_amount : number,
    terms: string,
    ad_details:{
      minimum_volume_steem: string,
      minimum_volume_sbd: string,
      minimum_reputation_score: string,
      new_buyer_limit_steem: string,
      new_buyer_limit_sbd: string,
      track_liquidity: Boolean
    },
    security_details:{
      identified_people_only: Boolean,
      identify_user_before_continuing_trade:Boolean,
      real_name_required:Boolean,
      sms_verification_required: Boolean,
      trusted_people_only: Boolean
    }
}

export interface AdvertisementResponse {
  _id : string  
  createdby: string,
  ad_type: string,
  country: string,
  payment_methods: string[],
  currency: string,
  margin: number,
  limit_from: number,
  limit_to: number,
  restricted_amounts: string[],
  ad_coin : string,
  ad_coin_amount : number,
  terms: string,
  __v : Number,
  ad_details:{
    minimum_volume_steem: string,
    minimum_volume_sbd: string,
    minimum_reputation_score: string,
    new_buyer_limit_steem: string,
    new_buyer_limit_sbd: string,
    track_liquidity: Boolean
  },
  security_details:{
    identified_people_only: Boolean,
    identify_user_before_continuing_trade:Boolean,
    real_name_required:Boolean,
    sms_verification_required: Boolean,
    trusted_people_only: Boolean
  }
}