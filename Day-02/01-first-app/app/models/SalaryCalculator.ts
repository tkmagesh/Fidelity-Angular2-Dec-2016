export class SalaryCalculator{
    basic : number = 0;
    hra : number = 0;
    da : number = 0;
    tax : number = 0;
    salary : number = 0;

    calculate(){
        let gross : number = this.basic + this.hra + this.da;
        let net : number = gross * ((100-this.tax)/100);
        this.salary = net;
    }
}