import { cn } from "@/lib/utils";
import { Label } from "./ui/label";

function FormLabel(props: any) {
    return (
        <>
            <Label className={cn(props.className || "", "text-lg")}>{props.children}</Label>
        </>
    )
}

function FormGroup(props: any) {
    return (
        <>
            <div className={cn("flex flex-col gap-3", props.className || "")}>
                {props.children}
            </div>
        </>
    )
}

FormGroup.FormLabel = FormLabel;

export default FormGroup;