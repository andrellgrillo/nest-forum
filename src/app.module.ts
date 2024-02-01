import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { CreateAccountnController } from './controllers/create-account.controller'

@Module({
  imports: [],
  controllers: [CreateAccountnController],
  providers: [PrismaService],
})
export class AppModule {}
