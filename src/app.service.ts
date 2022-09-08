import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): GreetingsResponse {
    const greetings = "Hello TalTech";
    return {greetings};
  }
}
