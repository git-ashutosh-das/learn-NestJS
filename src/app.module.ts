import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletModule } from 'wallet/wallet.module';
import { UserModule } from 'users/user.module';
import { UserController } from 'users/user.controller';

@Module({
  imports: [WalletModule, UserModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}