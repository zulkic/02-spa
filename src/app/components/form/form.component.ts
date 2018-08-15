import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*   validaRut(e) {
      console.log('primer if', e.target.value.length <= 2, !/[0-9]/.test(e.target.value));
      console.log(e.target.value);
      if (!/^0*(\d{0,3}(\.?\d{3})*)\-?([\dkK])$/.test(e.target.value)) {
        console.log("entro aca");
        console.log(e.target.value);
        e.target.value = e.target.value.slice(0, -1);
        console.log(e.target.value);
      } */

  validaRut(e) {
    console.log('primer if', e.target.value.length <= 2, !/[0-9]/.test(e.target.value));
    console.log(e.target.value);
    if (e.target.value.length === 1) {
      if (!/[1-9]/.test(e.target.value)) {
        console.log(e.target.value);
        e.target.value = '';
        console.log(e.target.value);
      }
    } else if (!/^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK])$/.test(e.target.value)) {
      console.log("entro aca");
      console.log(e.target.value);
      e.target.value = e.target.value.slice(0, -1);
      console.log(e.target.value);
    }

    /*     validaRut(e) {
          console.log('primer if',e.target.value.length <= 2, !/[0-9]/.test(e.target.value) );
          console.log(e.target.value);
          if(e.target.value.length <= 2 && !/[0-9]/.test(e.target.value)){
            console.log(e.target.value);
            e.target.value = '';
            console.log(e.target.value);
          } else if (!/^0*(\d{0,3}(\.?\d{3})*)\-?([\dkK])$/.test(e.target.value)) {
            console.log("entro aca");
            console.log(e.target.value);
            e.target.value = e.target.value.slice(0, -1);
            console.log(e.target.value);
      
      
          } */

    /*     if (e.keyCode === 69) {
    
        } */
  }
}
