import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Post()
  create(@Body() createEmpleadoDto: CreateEmpleadoDto) {
    return `Aqui se van a registrar Empleados`
  }

  @Get()
  findAll() {
    return "Aqui se van a "+
   "consultar todos los empleados"
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aqui se va a consultar
          el empleado cuyo id es:${id}`
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpleadoDto: UpdateEmpleadoDto) {
     return `Aqui se va a actualizar 
            el empleado suyo id:${id}`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Aqui se va a elimar el empleado
    cuyo id es: ${id}`
  }
}
