import { Global, Module } from "@nestjs/common";
import { ApisService } from "./apis.service";
import { HttpModule } from "@nestjs/axios";



@Global()
@Module({
    imports:[HttpModule],
    providers: [ApisService],
    exports:[ApisService]

})

export class ApisModule {}