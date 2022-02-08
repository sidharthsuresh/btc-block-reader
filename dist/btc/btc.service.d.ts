export declare class BtcService {
    private logger;
    getBtcBlock(blockNumber: string): Promise<any>;
    getBtcBlockTransactions(blockNumber: string): Promise<any>;
    blockTransactionFee(blockNumber: string): Promise<any>;
}
