import { Component, OnInit } from '@angular/core';
import {NgForm,FormGroup} from '@angular/forms';
import { Datos } from 'src/app/models/datos';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

public form! : FormGroup;
datos : Datos = 
  {
    nombre:'',
    correo:'',
    mensaje:''
}
;

  ngOnInit():void{
  }

  guardar(){
    console.log(this.datos)
    const data = this.datos.nombre;

    const pdfDef: any = {
      content:[
        {
          text: 'Nombre'
        },
        {
          
          text: this.datos.nombre
        },
        {
          text: 'Correo'
        },
        {
          text: this.datos.correo
        },
        {
          text: 'Mensaje'
        },
        {
          text: this.datos.mensaje
        }
      ]
    }

    const pdf = pdfMake.createPdf(pdfDef);
   pdf.print();
  }
}
