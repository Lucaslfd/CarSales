import { Container } from "../../components/container";

export function Home() {
  return(
    <Container>
      <section className="bg-white rounded-lg p-4 w-full max-w-3xl mx-auto flex justify-center items-center gap-2 mt-5 drop-shadow">
        <input className="w-full border-2 rounded-lg h-9 px-3 outline-none" type="text" placeholder="Digite o modelo do carro..."/>
        <button className="bg-blue-500 h-9 px-8 rounded-lg text-white font-medium text-lg">Buscar</button>
      </section>

      <h1 className="font-bold text-center mt-6 text-2xl mb-4">Carros novos e usados em todo Brasil</h1>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="w-full bg-white rounded-lg drop-shadow">
          <img className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all" src="https://i1.wp.com/thegarage.com.br/wp-content/uploads/2020/07/preco-volkswagen-fusca-1500-1972.png?fit=1500%2C1000&ssl=1" alt="Fusca" />
          <p className="font-bold mt-1 mb-2 px-2">Volkswagen Fusca 1500</p>
          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">Ano 1972 | 85.000 km</span>
            <strong className="text-black font-medium text-xl">R$ 180.000,00</strong>
          </div>
          <div className="w-full h-px bg-slate-200 my-2"></div>
          <div className="px-2 pb-2">
            <span className="text-zinc-700">Belo Horizonte - MG</span>
          </div>
        </section>
      </main>
    </Container>
  )
}