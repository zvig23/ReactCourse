class MonetaryService{
    
public getVal(price:number,prece:number):number{
        return price*prece/100;
    }
}

const monetaryService = new MonetaryService();
export default monetaryService;