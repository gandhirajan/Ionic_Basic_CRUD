import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myTodo = [];
  name:string;

  constructor(public navCtrl: NavController) {

  }

  addData(){
    let obj = {
      isChecked:false,
      name: this.name
    }

    if(this.name){
      this.myTodo.push(obj);
      this.name = ""
    }else{
      alert("enter some name")
    }
  }

  delete(){
    this.myTodo = this.myTodo.filter(ev => !ev.isChecked)
  }
}
