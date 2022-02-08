"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BtcService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const config = require("config");
const serverConfig = config.get('server');
let BtcService = class BtcService {
    constructor() {
        this.logger = new common_1.Logger('BtcService');
    }
    async getBtcBlock(blockNumber) {
        let blockData;
        try {
            blockData = await axios_1.default.request({
                method: 'GET',
                url: `${serverConfig.tatumUrl}/bitcoin/block/${blockNumber}`,
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': serverConfig.apiKey
                },
            });
        }
        catch (err) {
            throw new common_1.InternalServerErrorException('unable to read from mainnet');
        }
        return (blockData.data);
    }
    async getBtcBlockTransactions(blockNumber) {
        let blockData;
        try {
            blockData = await axios_1.default.request({
                method: 'GET',
                url: `${serverConfig.tatumUrl}/bitcoin/block/${blockNumber}`,
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': serverConfig.apiKey
                },
            });
        }
        catch (err) {
            throw new common_1.InternalServerErrorException('unable to read from mainnet');
        }
        return (blockData.data.txs);
    }
    async blockTransactionFee(blockNumber) {
        let blockData;
        try {
            blockData = await axios_1.default.request({
                method: 'GET',
                url: `${serverConfig.tatumUrl}/bitcoin/block/${blockNumber}`,
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': serverConfig.apiKey
                },
            });
        }
        catch (err) {
            throw new common_1.InternalServerErrorException('unable to read from mainnet');
        }
        let total = blockData.data.txs.length;
        let fee = 0;
        for (let i = 0; i < total; i++) {
            fee = fee + blockData.data.txs[i].fee;
        }
        return ({
            "totalFees": fee
        });
    }
};
BtcService = __decorate([
    common_1.Injectable()
], BtcService);
exports.BtcService = BtcService;
//# sourceMappingURL=btc.service.js.map