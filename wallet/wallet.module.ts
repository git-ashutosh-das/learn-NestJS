import { Module } from "@nestjs/common";
import { WalletService } from "./wallet.service";
import { WalletController } from "./wallet.controller";

@Module({
    imports: [],
    controllers: [WalletController],
    providers: [WalletService],  // Types of providers - class based( standard provider), value based - Value providers, Dynamic - Factory providers 
    // classbased - [WalletService] - when class name is same as providername,[{provide: WalletService, useClass: WalletService}],also possible useClass: otherClass 
    // Value Based- [{provide:"data", useValue: {map}, String, number, array etc }]
    // Factory porviders- dynamic when provider needs to be dynamic, like if wee need to fecth somedata at runtime like server details, there can be async await useFactory as well and the function from where it is called will wait until async is executed
    // [{provide: "dynamic", useFactory: ()=>{ some logic }}], can be useFactory: async ()=> { await some line }
    // * injection scope - default scope - only one singeleton instace at any point, Request scope- new instance for every request -destroyed on response
    exports: []
})
export class WalletModule{};