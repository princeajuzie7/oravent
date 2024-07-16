import  { render, screen }  from"@testing-library/react"
import Page from "../page"
describe('gallery page rendering',()=>{
   test('should have a header', () => {
      render(<Page />)
      screen.getByText('gallery')
   })
   
})