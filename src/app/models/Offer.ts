export interface Contract {
    id: string;
    date: string;
    userId: string;
    license_plate: string;
    offer: Offer;
}

export class Offer {
    yearly: number;
    nameOfCompany: string;
    logoOfCompany: string;

    constructor(fees: Offer_fees, n: string, l: string) {
        this.nameOfCompany = n;
        this.logoOfCompany = l;
        this.yearly = (
            fees.balesetesDij +
            fees.elvetelesDij +
            fees.megletesDij +
            fees.carTypeDij +
            fees.sulyDij +
            fees.ertekDij +
            fees.korDij +
            fees.teljesitmenyDij
        );
        this.fees = fees;
    }
    fees: Offer_fees;
}

export class Offer_fees {
    balesetesDij: number;
    elvetelesDij: number;
    megletesDij: number;

    carTypeDij: number;
    sulyDij: number;
    ertekDij: number;
    korDij: number;
    teljesitmenyDij: number;

    constructor(
        balesetesDij: number,
        elvetelesDij: number,
        megletesDij: number,
        carTypeDij: number,
        sulyDij: number,
        ertekDij: number,
        korDij: number,
        teljesitmenyDij: number) {
        this.balesetesDij = balesetesDij;
        this.elvetelesDij = elvetelesDij;
        this.megletesDij = megletesDij;
        this.carTypeDij = carTypeDij;
        this.sulyDij = sulyDij;
        this.ertekDij = ertekDij;
        this.korDij = korDij;
        this.teljesitmenyDij = teljesitmenyDij;
    }
}