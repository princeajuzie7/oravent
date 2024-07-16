"use client"
import { Button } from "@material-tailwind/react";
export default function CustomButton({onClick, Value, icon, className,color,variant}) {
  return (
    <div>
     
      
  <Button onClick={onClick} className={className} variant={variant}  color={color}>
     {Value} {icon}
  </Button>

    </div>
  )
}
