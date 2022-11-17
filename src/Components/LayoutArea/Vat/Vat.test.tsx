import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Component } from "react";
import ReactDOM from "react-dom";
import monetaryService from "../../../Services/MonetaryService";
import Vat from "./Vat";

describe("Vat Component", () =>{
    const precentage = 17;
    const component = <Vat prece={precentage}/>;

    beforeEach(()=>{
        render(component)
    })

    afterEach(()=>{
        cleanup();
    })

    it("should render into Dom", () => {
        ReactDOM.render(component,document.createElement("div"))
    })

    it("should contain several elements", () => {
        // expect(screen.getByLabelText("Calc vat")).toBeDefined();
        // expect(screen.getByTestId("main-div")).toBeDefined();
        // expect(screen.getByTitle(/Calc vat/i)).toBeDefined();
        expect(screen.getByLabelText("price",{exact:false})).toBeDefined();

    })
    it("should contain specific elements", () => {
        expect(screen.getByTitle(/Calc vat/i)).toBeInstanceOf(HTMLLabelElement);
        // expect(screen.getAllByLabelText("price",{exact:false})).toBeInstanceOf(HTMLLabelElement);
        
    })

    it("should contain specific css class", () => {
        // expect(screen.getAllByTestId("main-div")).toHaveClass("Box");      
    })
    
    it("should contain specific input type=number", () => {
        expect(screen.getByPlaceholderText("number here kuli alma")).toHaveAttribute("type","number");      
    }) 

    it("should calculate cat correctly", () => {
        const price = Math.floor(Math.random()*1000);
        const vat = monetaryService.getVal(price,precentage)
        userEvent.type(screen.getByPlaceholderText("number here kuli alma"),price.toString())
        expect(screen.getByRole("results")).toHaveTextContent(""+vat.toString());
    })

    

})