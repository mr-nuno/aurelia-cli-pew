import {bindable} from 'aurelia-framework';

export class ProfileCard {
  
  @bindable
  label = "";
  today = new Date();
}

