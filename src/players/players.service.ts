import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersService {


    public players = [

        {
            name: 'Goku',
            imgUrl: 'https://dragonball.guru/wp-content/uploads/2021/03/goku-profile-e1616173641804-400x400.png',
            info: 'The main protagonist of the Dragon Ball series',
        },
        {
            name: 'Vegeta',
            imgUrl: 'https://dragonball.guru/wp-content/uploads/2021/03/vegeta-profile-400x400.png',
            info: 'A former villain turned ally of Goku and the Z Fighters.',
        },
        {
            name: 'Piccolo',
            imgUrl: 'https://dragonball.guru/wp-content/uploads/2021/03/Piccolo-Profile-Pic-415x415.png',
            info: 'A Namekian warrior and former antagonist of Goku.',
        },
        {
            name: 'Gohan',
            imgUrl: 'https://dragonball.guru/wp-content/uploads/2021/03/toppng.com-mystic-gohan-dragon-ball-z-gohan-1021x2859-1-e1617011806816-400x400.png',
            info: 'Gokus son and a powerful fighter in his own right.',
        },
        {
            name: 'Krillin',
            imgUrl: 'https://dragonball.guru/wp-content/uploads/2021/03/krillin-profile-1-400x400.png',
            info: 'A human martial artist and one of Gokus closest friends.',
        },
        {
            name: 'Frieza',
            imgUrl: 'https://dragonball.guru/wp-content/uploads/2021/03/frieza-profile-e1616174138632-400x400.png',
            info: 'A powerful and ruthless space tyrant and one of the main antagonists of the series.',
        },
       
    ];


}