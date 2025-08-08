import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CarsModule } from './cars/cars.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { ClienteModule } from './cliente/cliente.module';


@Module({
  imports: [CarsModule, EmpleadosModule, ClienteModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
