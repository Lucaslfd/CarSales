import logoImg from "../../assets/logo.png"
import { Container } from "../../components/container"
import { Link } from "react-router-dom";
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Insira um email válido").nonempty("*"),
  password: z.string().nonempty("*")
})

type FormData = z.infer<typeof schema>

export function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return(
    <Container>
      <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
          <Link to="/" className="mb-6 max-w-sm w-full">
            <img className="w-full" src={logoImg} alt="" />
          </Link>
          <form className="bg-white max-w-xl w-full rounded-lg drop-shadow p-4" onSubmit={handleSubmit(onSubmit)} >

            <div className="mb-3 drop-shadow" >
              <Input type="email" placeholder="Digite seu email..." name="email" error={errors.email?.message} register={register}/>
            </div>

            <div className="mb-3 drop-shadow">
              <Input type="password" placeholder="Digite sua senha..." name="password" error={errors.password?.message} register={register}/>
            </div>

            <button type="submit" className="bg-zinc-900 w-full rounded-md text-white h-10 font-medium drop-shadow">Acessar</button>
          </form>
          <Link to="/register">Ainda não possui uma conta? Registre-se.</Link>

      </div>
    </Container>
  )
}