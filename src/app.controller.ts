import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { KafkaService } from './kafka/kafka.service';
import { SubscribeTo, SubscribeToFixedGroup } from './kafka/kafka.decorator';
import { KafkaPayload } from './kafka/kafka.message';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
  private readonly kafkaService:KafkaService
  ) { }

  @Get()
  getHello() {
    const payload = {
      body: 'hello world',
      messageId: '1',
      messageType:'obj',
      topicName:'test'
    }
    return this.kafkaService.sendMessage('test',payload)
  }
  /**
   * When group id is unique for every container.
   * @param payload
   */
  @SubscribeTo('test')
  subscribleToTest(payload: KafkaPayload) {
    console.log('subscribleToTest', payload);
    return;
  }
}
