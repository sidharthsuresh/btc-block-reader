import { Module } from '@nestjs/common';
import { BtcController } from './btc.controller';
import { BtcService } from './btc.service';

@Module({
  imports:[BtcModule],
  controllers: [BtcController],
  providers: [BtcService]
})
export class BtcModule {}
