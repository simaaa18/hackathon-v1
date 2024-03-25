import React, { HtmlHTMLAttributes } from "react"
import { Input, InputProps } from "./ui/input"
import { cn } from "@/lib/utils"

interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode | string,
    position?: "left" | "right",
    placeholder?: string
}

const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(
    ({ className, type, icon = <></>, position = "left", placeholder = "", ...props }, ref) => {
        return (
            <div className={`relative ${className}`}>
                <Input placeholder={placeholder} className={cn(position === "left" ? "pl-12" : "", "bg-transparent border-2")} ref={ref} {...props} />
                <div className={cn("absolute -top-1 text-white p-[0.50rem] px-3 text-sm", className, position === "left" ? "rounded-l-md left-0" : "rounded-r-md right-0")}>
                    <div className="text-lg font-medium">
                        {icon}
                    </div>
                </div>
            </div>
        )
    }
)

InputGroup.displayName = 'InputGroup'

export default InputGroup;