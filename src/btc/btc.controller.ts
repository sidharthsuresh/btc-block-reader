import {
    Controller,
    Get,
    Logger,
    Param,
    HttpStatus
  } from '@nestjs/common';
  import { ApiResponse, ApiTags, ApiOperation } from '@nestjs/swagger';
import { BtcService } from './btc.service';

@Controller('btc')
export class BtcController {
    private logger = new Logger('BtcController');

    constructor(private btcService: BtcService) {}

    @Get('/getBtcBlock/:blockNumber')
    @ApiOperation({
    operationId: 'getBtcBlock',
    summary: 'Get the whole data in the btc block',
  })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'failed',
      })
      @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'Success',
      })
    @ApiTags('btc')
    async getBtcBlock(
        @Param('blockNumber') blockNumber:string,
      ): Promise<any> {
        this.logger.verbose(`Reading BTC Block Number : ${blockNumber}`);
        return this.btcService.getBtcBlock(blockNumber);
      }

      @Get('/getBtcBlockTransactions/:blockNumber')
        @ApiOperation({
          operationId: 'getBtcBlockTransactions',
          summary: 'Get the entire transactions list and data in transactions',
        })
      @ApiResponse({
          status: HttpStatus.BAD_REQUEST,
          description: 'failed',
        })
        @ApiResponse({
          status: HttpStatus.CREATED,
          description: 'Success',
        })
      @ApiTags('btc')
      async getBtcBlockTransactions(
          @Param('blockNumber') blockNumber:string,
        ): Promise<any> {
          this.logger.verbose(`Reading transactions in BTC Block Number : ${blockNumber}`);
          return this.btcService.getBtcBlockTransactions(blockNumber);
        }

        @Get('/blockTransactionFee/:blockNumber')
         @ApiOperation({
          operationId: 'blockTransactionFee',
          summary: 'Get the total transaction fee in the block',
        })
        @ApiResponse({
            status: HttpStatus.BAD_REQUEST,
            description: 'failed',
          })
          @ApiResponse({
            status: HttpStatus.CREATED,
            description: 'Success',
          })
        @ApiTags('btc')
        async blockTransactionFee(
            @Param('blockNumber') blockNumber:string,
          ): Promise<any> {
            this.logger.verbose(`Calculating total fee in Block Number : ${blockNumber}`);
            return this.btcService.blockTransactionFee(blockNumber);
          }

    }
