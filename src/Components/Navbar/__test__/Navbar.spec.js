import { render,screen } from "@testing-library/react";
import { NavbarWithMegaMenu } from "../Navbar";

describe('navbar render', ()=>{
    it('should render with all the ul tags', ()=>{
        render(<NavbarWithMegaMenu />)
        screen.getByRole("list")
    })
})