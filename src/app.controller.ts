import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
const path = require('path');
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('*')
  getHello(@Res() res: Response) {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
  }
}
