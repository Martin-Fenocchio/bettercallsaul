import { Injectable } from '@nestjs/common';

@Injectable()
export class CharactersService {
  getMainCharacters(): { characters: string[] } {
    return {
      characters: [
        'Jimmy McGill (Saul Goodman)',
        'Kim Wexler',
        'Mike Ehrmantraut',
        'Gus Fring',
        'Nacho Varga',
        'Chuck McGill',
        'Howard Hamlin',
        'Lalo Salamanca',
      ],
    };
  }
}
