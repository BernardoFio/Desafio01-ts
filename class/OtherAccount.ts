import { DioAccount } from "./DioAccount";

export class OtherAccount extends DioAccount {

    extraDeposit = (value: number): void => {
        if(this.validateStatus()) {
            this.deposit(value + 10)
        }
        console.log('Voce depositou R$: ' + value + ' E ganhou mais 10 reais de bonus')
    }
}