import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CharactersService } from './characters.service';

@Controller('characters')
export class CharactersController {
  constructor(
    private readonly charactersService: CharactersService,
    private readonly configService: ConfigService,
  ) {}

  @Get('main')
  getMainCharacters(): { characters: string[] } {
    return this.charactersService.getMainCharacters();
  }

  @Get('favorite-chapter')
  getFavoriteChapter(): { favoriteChapter: string } {
    return {
      favoriteChapter:
        this.configService.get<string>('MY_FAVORITE_CHAPTER') ??
        'No favorite chapter set',
    };
  }
}
