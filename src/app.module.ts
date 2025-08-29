import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CarsModule } from './cars/cars.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { ClienteModule } from './cliente/cliente.module';
import { PrismaModule } from './prisma/prisma.module';
import { MarcasModule } from './marcas/marcas.module';


@Module({
  imports: [CarsModule, EmpleadosModule, ClienteModule, PrismaModule, MarcasModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
