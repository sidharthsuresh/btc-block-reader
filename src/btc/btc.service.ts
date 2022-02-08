import { Injectable, Logger, InternalServerErrorException, RequestTimeoutException } from '@nestjs/common';
import axios from 'axios';
import * as config from 'config';
const serverConfig = config.get('server');

@Injectable()
export class BtcService {
    
    private logger = new Logger('BtcService');

    async getBtcBlock(blockNumber: string): Promise<any> {
        let blockData;
        try {
            blockData = await axios.request({
              method: 'GET',

              url: `${serverConfig.tatumUrl}/bitcoin/block/${blockNumber}`,
              headers: {
                'Content-Type': 'application/json',
                'x-api-key': serverConfig.apiKey
              },
            });
          } catch (err) {
            throw new InternalServerErrorException('unable to read from mainnet');
          }
          return(blockData.data);


    }
    async getBtcBlockTransactions(blockNumber: string): Promise<any> {
        let blockData;
        try {
            blockData = await axios.request({
              method: 'GET',

              url: `${serverConfig.tatumUrl}/bitcoin/block/${blockNumber}`,
              headers: {
                'Content-Type': 'application/json',
                'x-api-key': serverConfig.apiKey
              },
            });
          } catch (err) {
            throw new InternalServerErrorException('unable to read from mainnet');
          }
          return(blockData.data.txs);
    }
    async blockTransactionFee(blockNumber: string): Promise<any> {
        let blockData;
        try {
            blockData = await axios.request({
              method: 'GET',

              url: `${serverConfig.tatumUrl}/bitcoin/block/${blockNumber}`,
              headers: {
                'Content-Type': 'application/json',
                'x-api-key': serverConfig.apiKey
              },
            });
          } catch (err) {
            throw new InternalServerErrorException('unable to read from mainnet');
          }
          let total = blockData.data.txs.length;
          let fee = 0;
          for( let i = 0; i< total; i++){
              fee = fee + blockData.data.txs[i].fee;
          }
          return({
              "totalFees" : fee
          });


    }
}
