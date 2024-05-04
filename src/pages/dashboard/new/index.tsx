import { Container } from "../../../components/container";
import { DashboarHeader } from "../../../components/panelHeader";
import { FiUpload } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
  name: z.string().nonempty("*"),
  model: z.string().nonempty("*"),
  year: z.string().nonempty("*"),
  km: z.string().nonempty("*"),
  price: z.string().nonempty("*"),
  city: z.string().nonempty("*"),
  whatsapp: z.string().min(1, "*"),
  description: z.string().nonempty("*")
})

type formData = z.infer<typeof schema>;

export function New() {
  const { register, handleSubmit, formState: {errors}, reset } = useForm<formData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })

  function onSubmit(data: formData) {
    console.log(data)
  }

  return(
    <Container>
      <DashboarHeader/>
      <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2">
        <button className="border-2 w-48 rounded-lg flex items-center justify-center cursor-pointer border-gray-600 h-32 md:w-48">
          <div className="absolute cursor-pointer">
            <FiUpload size={30} color="#000"/>
          </div>
          <div className="cursor-pointer">
            <input className="opacity-0 cursor-pointer" type="file" accept="image/"/>
          </div>
        </button>
      </div>

      <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2 mt-2">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <p className="mb-2 font-medium">Nome do carro</p>
              <Input type="text" register={register} name="name" error={errors.name?.message} placeholder="Ex: Onix 1.0"/>
            </div>
            <div className="mb-3">
              <p className="mb-2 font-medium">Modelo do carro</p>
              <Input type="text" register={register} name="model" error={errors.model?.message} placeholder="Ex: 1.0, Flex, PLUS, MANUAL"/>
            </div>
            <div className="flex w-full mb-3 flex-row items-center gap-4">
              <div className="w-full">
                <p className="mb-2 font-medium">Ano</p>
                <Input type="text" register={register} name="year" error={errors.year?.message} placeholder="Ex: 2023/2024"/>
              </div>
              <div className="w-full">
                <p className="mb-2 font-medium">Km Rodado</p>
                <Input type="text" register={register} name="km" error={errors.km?.message} placeholder="Ex: 89.000..."/>
              </div>
            </div>

            <div className="flex w-full mb-3 flex-row items-center gap-4">
              <div className="w-full">
                <p className="mb-2 font-medium">Telefone / Whatsapp</p>
                <Input type="text" register={register} name="whatsapp" error={errors.whatsapp?.message} placeholder="Ex: 31989898989"/>
              </div>
              <div className="w-full">
                <p className="mb-2 font-medium">Cidade</p>
                <Input type="text" register={register} name="city" error={errors.city?.message} placeholder="Ex: Rio de Janeiro - RJ"/>
              </div>
            </div>
            <div className="mb-3">
              <p className="mb-2 font-medium">Valor R$</p>
              <Input type="text" register={register} name="price" error={errors.price?.message} placeholder="Ex: 100.000"/>
            </div>
            <div className="mb-3">
              <p className="mb-2 font-medium">Valor R$</p>
              <textarea 
              className="border-2 w-full rounded-md h-24 px-2"
              {...register("description")}
              name="description"
              id="description"
              placeholder="Digite a descrição completa sobre o carro..."
              />
              {errors.description && <p className="mb-1 text-red-500">{errors.description.message}</p>}
            </div>

            <button type="submit" className="w-full h-10 rounded-md bg-zinc-900 text-white font-medium">
              Cadastrar
            </button>
        </form>
      </div>
    </Container>
  )
}