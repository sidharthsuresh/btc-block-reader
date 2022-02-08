import { Injectable, Logger, InternalServerErrorException, RequestTimeoutException } from '@nestjs/common';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import * as config from 'config';
const serverConfig = config.get('server');
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: `${serverConfig.elasticUrl}`,
  log: 'trace',
  apiVersion: '7.2', // use the same version of your Elasticsearch instance
});

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
    async writeBlocksToElastic(blockStart: string, blockEnd: string): Promise<any> {
        let blockData;
        let start = parseInt(blockStart);
        let end = parseInt(blockEnd);
        for(let i = start; i<= end; i++){
           try {
            blockData = await axios.request({
              method: 'GET',

              url: `${serverConfig.tatumUrl}/bitcoin/block/${blockStart}`,
              headers: {
                'Content-Type': 'application/json',
                'x-api-key': serverConfig.apiKey
              },
            });
          } catch (err) {
            throw new InternalServerErrorException('unable to read from mainnet');
          }
          blockData = await client.index({
                  index: 'btc-block-data',     //your index name for storing blocks
                  id: uuidv4(),
                  type: 'btcBlock',
                  body: blockData.data
                })
        }

        return("data stored successfully on elastic")

    }
}
