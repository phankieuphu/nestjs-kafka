import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
import { KafkaService } from './kafka/kafka.service';

@Module({
  imports: [    KafkaModule.register({
      clientId: 'test-app-client',
      brokers: ['localhost:9092'],
      groupId: 'test-app-group',
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
