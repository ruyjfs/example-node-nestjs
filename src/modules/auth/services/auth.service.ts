import { Injectable } from '@nestjs/common';
import { LoginDto } from '../Dtos/login.dto';

@Injectable()
export class AuthService {
  index(): string {
    return 'Index';
  }
  login(data: LoginDto): void {
    console.log(data);
  }
  logout(): string {
    return 'Logout';
  }
  register(): string {
    return 'Register';
  }
  reset(): string {
    return 'Reset password';
  }
}
