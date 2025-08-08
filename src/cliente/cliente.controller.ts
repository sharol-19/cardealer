import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
      return `Aqui se van a registrar clientes`
  }

  @Get()
  findAll() {
    return "Aqui se van a "+
   "consultar todos los cliente"
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aqui se va a consultar
          el cliente cuyo id es:${id}`
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
   return `Aqui se va a actualizar 
            el cliente suyo id:${id}`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
   return `Aqui se va a elimar el cliente
    cuyo id es: ${id}`
  }
}
