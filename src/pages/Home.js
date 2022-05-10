import KisiImg from "../assets/img/mikey.jpeg"

const Home = () => {
  return (
    <main>
      <img src={KisiImg} alt="kisi-img" className="absolute object-cover w-full h-full"/>
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Hey... I'm Michael nicknamed <small>lakaJS</small></h1>
      </section>
    </main>
  )
}

export default Home