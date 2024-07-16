import  { render, screen } from "@testing-library/react"
import Page from "../page"

describe('consultant render', function () {
    it('should render the correct', ()=>{
        render(<Page />)
        screen.getByText('consult')
    })
})