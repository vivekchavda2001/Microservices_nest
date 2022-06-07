import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';


async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   origin: "http://localhost:4200"
  // })
  // await app.listen(8001);

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://ascpzkda:8ZDoSgERawalJ-V8uINoxaYBXbG9kNto@puffin.rmq2.cloudamqp.com/ascpzkda'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  app.listen().then(() => {
    console.log('Microservice is Runing....');

  })

}
bootstrap();
