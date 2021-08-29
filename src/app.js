import { LightningElement } from 'lwc';

export default class DynamicUI extends LightningElement {


    text = '';

    onChangeHandler(event){
      this.text = event.target.value;
    }

}