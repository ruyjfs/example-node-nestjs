import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../Dtos/login.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Get()
  index(): string {
    return this.service.index();
  }

  @Post('login')
  login(@Body() data: LoginDto, @Res() res: Response): void {
    this.service.login(data);
    res.status(HttpStatus.OK).json([]);
  }

  @Get('logout')
  logout(@Res() res: Response): void {
    this.service.logout();
    res.status(HttpStatus.OK).json([]);
  }

  @Post('register')
  register(): string {
    return this.service.register();
  }

  @Post('reset-password')
  reset(): string {
    return this.service.reset();
  }
}
