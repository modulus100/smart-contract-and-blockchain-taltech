import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): GreetingsResponse {
    return { greetings: "Hello TalTech" };
  }
}
