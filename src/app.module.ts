import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BtcModule } from './btc/btc.module';
import { ScheduleModule } from '@nestjs/schedule';


@Module({
  imports: [ScheduleModule.forRoot(),BtcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
