import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Post('register')
    async register(@Body() createUserDto: CreateUserDto){
      const user = await this.userService.createUser(createUserDto.email,createUserDto.password);
      return user
    }
  @Post('login')
  async login(@Body() loginuserDto: LoginUserDto ){
    const user = await this.userService.loginUser(loginuserDto.email,loginuserDto.password)
    if(!user){
      throw new NotFoundException('User not found')
    }
    return user
  }
  

}
