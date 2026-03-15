import { Card ,CardDescription,CardTitle} from "@/components/ui/card";

export  default  function LoginForm(){
    return (
        <Card className="w-full max-w- md mx-auto">
            <CardTitle>
Create Account
            </CardTitle>
            <CardDescription>Enter your credential to access your account</CardDescription>
        </Card>
    )
}
