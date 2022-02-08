"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BtcController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const btc_service_1 = require("./btc.service");
let BtcController = class BtcController {
    constructor(btcService) {
        this.btcService = btcService;
        this.logger = new common_1.Logger('BtcController');
    }
    async getBtcBlock(blockNumber) {
        this.logger.verbose(`Reading BTC Block Number : ${blockNumber}`);
        return this.btcService.getBtcBlock(blockNumber);
    }
    async getBtcBlockTransactions(blockNumber) {
        this.logger.verbose(`Reading transactions in BTC Block Number : ${blockNumber}`);
        return this.btcService.getBtcBlockTransactions(blockNumber);
    }
    async blockTransactionFee(blockNumber) {
        this.logger.verbose(`Calculating total fee in Block Number : ${blockNumber}`);
        return this.btcService.blockTransactionFee(blockNumber);
    }
};
__decorate([
    common_1.Get('/getBtcBlock/:blockNumber'),
    swagger_1.ApiOperation({
        operationId: 'getBtcBlock',
        summary: 'Get the whole data in the btc block',
    }),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'failed',
    }),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.CREATED,
        description: 'Success',
    }),
    swagger_1.ApiTags('btc'),
    __param(0, common_1.Param('blockNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BtcController.prototype, "getBtcBlock", null);
__decorate([
    common_1.Get('/getBtcBlockTransactions/:blockNumber'),
    swagger_1.ApiOperation({
        operationId: 'getBtcBlockTransactions',
        summary: 'Get the entire transactions list and data in transactions',
    }),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'failed',
    }),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.CREATED,
        description: 'Success',
    }),
    swagger_1.ApiTags('btc'),
    __param(0, common_1.Param('blockNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BtcController.prototype, "getBtcBlockTransactions", null);
__decorate([
    common_1.Get('/blockTransactionFee/:blockNumber'),
    swagger_1.ApiOperation({
        operationId: 'blockTransactionFee',
        summary: 'Get the total transaction fee in the block',
    }),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'failed',
    }),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.CREATED,
        description: 'Success',
    }),
    swagger_1.ApiTags('btc'),
    __param(0, common_1.Param('blockNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BtcController.prototype, "blockTransactionFee", null);
BtcController = __decorate([
    common_1.Controller('btc'),
    __metadata("design:paramtypes", [btc_service_1.BtcService])
], BtcController);
exports.BtcController = BtcController;
//# sourceMappingURL=btc.controller.js.map