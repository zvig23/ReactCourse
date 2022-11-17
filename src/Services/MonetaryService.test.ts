import monetaryService from "./MonetaryService";

describe("Monetary Service", () =>{
    it("should be create", () =>{
        expect(monetaryService).toBeTruthy();
    } )

    it("should calculate vat", () =>{
        const price = Math.floor(Math.random()*100)
        const prece = 17;
        const val = monetaryService.getVal(price,prece);
        expect(val).toEqual(price * prece /100);
    } )

});