import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../_components/ui/card'

const Login = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="mx-auto my-20 w-[90%] max-w-md rounded-xl p-10 shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Entrar</CardTitle>
          <CardDescription className="text-center">
            Por favor, digite seu e-mail e senha para entrar.
          </CardDescription>
        </CardHeader>
        {/* <SigninForm /> */}
      </Card>
    </main>
  )
}

export default Login
