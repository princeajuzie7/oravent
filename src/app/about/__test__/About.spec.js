const { render,screen } = require("@testing-library/react")
import   Page   from "../page"

describe('about page ~rendering', ()=>{
    it('should render the page', ()=>{
     render(<Page />)
     screen.getByText('about')
    })
})