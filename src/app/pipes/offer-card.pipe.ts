import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'offerCard'
})
export class OfferCardPipe implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): unknown {
        if (!value) {
            return "nope"
        } else {
            let he = value as string
            switch (he) {
                case "balesetesDij": {
                    return "Balesetek"
                }
                case "elvetelesDij": {
                    return "Jogsi elvételek"
                }
                case "megletesDij": {
                    return "Jogsi kora"
                }
                case "carTypeDij": {
                    return "Jármű típúsa"
                }
                case "sulyDij": {
                    return "Jármú súlya"
                }
                case "ertekDij": {
                    return "Jármű értéke"
                }
                case "korDij": {
                    return "Jármű kora"
                }
                case "teljesitmenyDij": {
                    return "Jármű teljesítménye"
                }
                // case "sum": {
                //     return "Éves díj"
                // }
                default: {
                    return "nyeh"
                }
            }
            // return (value as string).toUpperCase()
        }
    }

}
