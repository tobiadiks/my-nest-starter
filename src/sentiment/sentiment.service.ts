import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
const Sentiment = require('sentiment');
@Injectable()
export class SentimentService {
  async CheckSentiment(body: { text: string }): Promise<any> {
    const sentiment = new Sentiment();
    if (body.text) {
      const result = await sentiment.analyze(body.text);
      return { success: true, result };
    } else {
      throw new HttpException('Invalid string token', HttpStatus.BAD_REQUEST);
    }
  }
}
