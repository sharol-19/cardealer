import { Controller, Get, 
  Post,
  Patch,
  Delete,

    } from '@nestjs/common';
import path from 'path';


@Controller()
export class AppController {
  

  //Endpoint
 //un metodo de una clase que recibe 
 //una request y puede enviar una response
  @Get()
  getMensaje(): string {
    return "Aqui se van a consultar datos";
  }
  @Post()
  //Despues de los dos puntos ":"
  //va el tipo de dato de retorno
  //lo que va a devolver la funcion
  //con el return

  crear (): string{
    return "Aqui se van a registrar datos"



  }

  @Patch()
  actualizar(): string {
    return "Aqui va a modificar los datos"
  }
  @Delete ()
  borrar () : string {
    return "Aqui se van a modificar datos"
  }
}
