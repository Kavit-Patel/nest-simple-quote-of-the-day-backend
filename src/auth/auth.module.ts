import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserModule } from "src/user/user.module";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";
import { SessionSerializer } from "./session.serialize";
import { AuthController } from "./auth.controller";

@Module({
    imports:[PassportModule.register({session:true}),PrismaModule,UserModule],
    providers:[AuthService,LocalStrategy,SessionSerializer],
    exports:[AuthService],
    controllers:[AuthController]
})
export class AuthModule{}