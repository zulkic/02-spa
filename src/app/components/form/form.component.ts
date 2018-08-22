import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('coordenate1') coordenada1;
  @ViewChild('coordenate2') coordenada2;
  @ViewChild('coordenate3') coordenada3;
  @ViewChild('coordenate4') coordenada4;
  @ViewChild('coordenate5') coordenada5;
  @ViewChild('coordenate6') coordenada6;
  @ViewChild('coordenate7') coordenada7;
  @ViewChild('coordenate8') coordenada8;
  public button1: boolean = true;

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
      console.log("el valor es", e.target.value);
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

  focusNext(index) {
    if (index != 4 ) {
      console.log('el index es', index);
      this[`coordenada${Number(index) + 1}`].nativeElement.focus();
    }
    console.log(this[`coordenada${index}`].nativeElement.value);
    if (this.coordenada1.nativeElement.value && this.coordenada2.nativeElement.value && this.coordenada3.nativeElement.value && this.coordenada4.nativeElement.value) {
      this.validateOptions();
    }
  }

  focusStep(index) {
    if (index != 8 ) {
      console.log('el index es', index);
      this[`coordenada${Number(index) + 1}`].nativeElement.focus();
    }
    console.log(this[`coordenada${index}`].nativeElement.value);
  }

  validateOptions() {
    this.button1 = false;
    this.coordenada5.nativeElement.focus();
    console.log('valido opciones', this.coordenada1.nativeElement.value, this.coordenada2.nativeElement.value, this.coordenada3.nativeElement.value, this.coordenada4.nativeElement.value);

  }

  clearValue(index) {
    this[`coordenada${index}`].nativeElement.value = null;
    console.log(this[`coordenada${index}`].nativeElement.value);
  }

  recoverInfo() {

  }
}
