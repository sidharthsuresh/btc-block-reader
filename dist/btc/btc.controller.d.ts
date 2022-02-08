import { BtcService } from './btc.service';
export declare class BtcController {
    private btcService;
    private logger;
    constructor(btcService: BtcService);
    getBtcBlock(blockNumber: string): Promise<any>;
    getBtcBlockTransactions(blockNumber: string): Promise<any>;
    blockTransactionFee(blockNumber: string): Promise<any>;
}
