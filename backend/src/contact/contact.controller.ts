import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ContactService } from './contact.service';
import { BlueprintDto } from './dto/blueprint.dto';
import { QuickConnectDto } from './dto/quick-connect.dto';

@Controller('api')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('blueprint')
  @HttpCode(HttpStatus.CREATED)
  async submitBlueprint(@Body() blueprintDto: BlueprintDto) {
    return this.contactService.processBlueprint(blueprintDto);
  }

  @Post('quick-connect')
  @HttpCode(HttpStatus.CREATED)
  async submitQuickConnect(@Body() quickConnectDto: QuickConnectDto) {
    return this.contactService.processQuickConnect(quickConnectDto);
  }
}
