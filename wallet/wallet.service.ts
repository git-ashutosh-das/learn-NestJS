import { Injectable } from "@nestjs/common";


@Injectable()
export class WalletService{
    getBallance() {
        return { "balance" : 1000 };
    }
}