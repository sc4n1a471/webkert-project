export class Offer {
    yearly: number;
    nameOfCompany: string;
    logoOfCompany: string;

    constructor(fees: Offer_fees, n: string, l: string) {
        this.nameOfCompany = n;
        this.logoOfCompany = l;
        this.yearly = fees.sum;
        this.fees = fees;
        // console.log(this.fees)
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

    sum: number;

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

        this.sum = (
            this.balesetesDij +
            this.elvetelesDij +
            this.megletesDij +
            this.carTypeDij +
            this.sulyDij +
            this.ertekDij +
            this.korDij +
            this.teljesitmenyDij
        )
    }

}