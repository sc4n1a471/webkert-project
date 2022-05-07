import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myProfile'
})
export class MyProfilePipe implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): unknown {
        if (!value) {
            return "nope"
        } else {
            let adattagNeve = value as string
            switch (adattagNeve) {
                case "birtday": {
                    return "Születési dátum"
                }
                case "email": {
                    return "Email cím"
                }
                case "firstname": {
                    return "Keresztnév"
                }
                case "id": {
                    return "Egyedi felhasználói azonosító"
                }
                case "lastname": {
                    return "Vezetéknév"
                }
                case "username": {
                    return "Felhasználónév"
                }
                default: {
                    return "nyeh"
                }
            }
        }
    }

}
