import {render, screen}  from "@testing-library/react"
const { default: Page } = require("../page")

describe('rendering contact page', function() {
    it('should render contact', ()=>{
        render(<Page />)
       screen.getByText('contact')
    })
})