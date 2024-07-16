import Home from "@/app/page"
import  { render,screen } from "@testing-library/react"

describe('Home page - Rendering', ()=>{
    it('should have HomePage text', ()=>{
        render(<Home />);
        screen.getByText('hello page');
    });
    it('should have button with text clilck me', ()=>{
        render(<Home />);
        screen.getByRole('button', {name: "Click me"})
    });
    it('should have input field with label enter random text', ()=>{
        render(<Home />);
        screen.getByLabelText(/Enter Random text/)
    })
    it('should have input field with label enter specificTest', ()=>{
        render(<Home />);
        screen.getByLabelText(/Enter specific text/)
    })
    it('should find input field by pllaceholder text search', ()=>{
      render(<Home />)
      screen.getByPlaceholderText("search..")
    }) 

    it('should find input by display value',()=>{
        render(<Home />)
        screen.getByDisplayValue(/audi/)
    })
})