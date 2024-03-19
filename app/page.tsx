import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <video autoPlay loop muted className="w-full h-[40svh] object-cover">
          <source src="/videos/main_menu_anim.mp4" type="video/mp4" />
        </video>
        <div className="mt-[-100px] w-full flex justify-center flex-row content-center flex-wrap gap-5">
          <Image
            src="/logo_nobg.png"
            alt="Low Poly Logo"
            width={300}
            height={300}
          />
          <h1 className="self-center text-6xl">Project Rally</h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-10">
        <p className="mt-3 text-2xl max-w-4xl text-center">
          Project Rally is a low poly student made game in Unity. It is a racing
          game where you can choose few cars to drive around few tracks, with
          each car having different speed, different sound and handling.
        </p>
        <button className="rounded-full py-3 px-8 bg-red shadow-none hover:shadow-xl transition-all ">
          <a href="/download" className="text-2xl">
            Download the game
          </a>
        </button>
        <Image src="/os.png" alt="Low Poly Logo" width={100} height={100} />
      </div>
    </>
  );
}
