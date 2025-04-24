import { Controller, Get, Scope } from "@nestjs/common";
import { WalletService } from "./wallet.service";

@Controller('/user') 
export class WalletController{
    constructor(private readonly walletService: WalletService) { // types of injection constructor(@Inject(WalletService) walletser: WalletService) 
    // @Inject can be used can npt be used , in case of when we are providing string or some different provide value from provieds:[{provide:"SERVICE",useClass:WalletService}] we can use @Inject( SERVICE)
    // if we want to use instance of different class we can use - useClass: differentClass and the instance will be created
    }
    @Get('/wallet')
    getWallet(){
        return this.walletService.getBallance();
    }
}