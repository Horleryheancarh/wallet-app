import { Module } from '@nestjs/common';
import { WalletModule } from './api/wallet/wallet.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, WalletModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

/*
Create Wallet name email
Credit Wallet
Transfer Amount
Fetch Balance
*/
