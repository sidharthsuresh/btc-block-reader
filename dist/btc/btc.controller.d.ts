import { BtcService } from './btc.service';
import { GetBlocksDto } from './dto/get-blocks.dto';
export declare class BtcController {
    private btcService;
    private logger;
    constructor(btcService: BtcService);
    getBtcBlock(blockNumber: string): Promise<any>;
    getBtcBlockTransactions(blockNumber: string): Promise<any>;
    blockTransactionFee(blockNumber: string): Promise<any>;
    fetchBlocksToElastic(getBlocksDto: GetBlocksDto): Promise<any>;
}
