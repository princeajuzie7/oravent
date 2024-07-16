"use client"
import { Button } from "@material-tailwind/react"
export default function CustomButton({onClick, Value}) {
  return (
    <div>
      
  <Button onClick={onClick}>
     {Value}
  </Button>
    </div>
  )
}
