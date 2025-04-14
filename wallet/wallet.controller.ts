import { Controller, Get } from "@nestjs/common";
import { WalletService } from "./wallet.service";

@Controller('/user')
export class WalletController{
    constructor(private readonly walletService: WalletService) {
    }
    @Get('/wallet')
    getWallet(){
        return this.walletService.getBallance();
    }
}