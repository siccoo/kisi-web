import KisiImg from "../assets/img/mikey.jpeg"

const Home = () => {
  return (
    <main className="bg-green-100 min-h-screen p-12">
      {/* <img src={KisiImg} alt="kisi-img" className="absolute object-cover w-full h-full"/> */}
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl font-bold flex justify-center cursive leading-none lg:leading-snug home-name">Hey... I'm Michael nicknamed</h1><small style={{fontSize: 30, paddingTop: 36, paddingLeft: 5, color: "#335eea", fontWeight: "550", fontFamily: "sans-serif"}}>lakaJS</small>
      </section>
    </main>
  )
}

export default Home