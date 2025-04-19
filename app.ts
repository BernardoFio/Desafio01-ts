import { CompanyAccount } from './class/CompanyAccount'
import { OtherAccount } from './class/OtherAccount'
import { PeopleAccount } from './class/PeopleAccount'



const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(10)
console.log(companyAccount)

const otheraccount: OtherAccount = new OtherAccount('Bernardo', 32)
otheraccount.extraDeposit(20)
console.log(otheraccount)
