import Image from "next/image";
import Header from "./components/Header";
import Divider from "./components/Divider";
import Slider from "./components/Slider";
import Leaderboard from "./components/Leaderboard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="fixed w-full top-0 z-50">
        <Header />
      </div>
      <div className="flex flex-col justify-center w-full gap-8">
        <div className="flex flex-col">
          <video autoPlay loop muted className="w-full h-[40svh] object-cover">
            <source src="/videos/main_menu_anim.mp4" type="video/mp4" />
          </video>
          <div className="mt-[-100px] w-full flex text-center justify-center flex-row content-center flex-wrap gap-5">
            <Image
              src="/logo_nobg.png"
              alt="Low Poly Logo"
              width={300}
              height={300}
            />
            <h1 className="self-center text-6xl">Project Rally</h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 mb-10 mx-5">
          <p className="mt-3 text-2xl max-w-4xl text-center">
            Project Rally is a low poly student made game in Unity. It is a
            racing game where you can choose few cars to drive around few
            tracks, with each car having different speed, different sound and
            handling.
          </p>
          <button className="rounded-full py-3 px-8 bg-red shadow-none hover:shadow-xl transition-all ">
            <a href="/download" className="text-2xl">
              Download the game
            </a>
          </button>
          <Image src="/os.png" alt="Low Poly Logo" width={100} height={100} />
        </div>

        <div
          className="flex flex-col md:flex-row  w-full justify-center gap-5"
          id="features"
        >
          <div className="flex flex-col items-center justify-center gap-5 p-5 rounded-xl bg-secondary  mx-5">
            <h1 className="text-4xl">Features</h1>
            <ul className="list-inside list-disc">
              <li className="text-2xl">5 different cars</li>
              <li className="text-2xl">1 track (more TBA)</li>
              <li className="text-2xl">time trial mode </li>
              <li className="text-2xl">saving best lap online</li>
              <li className="text-2xl">online leaderboard</li>
              <li className="text-2xl">functional graphic settings</li>
              <li className="text-2xl">car selection</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-5  mx-5">
            <Image
              className="rounded-xl"
              src="/car_image.png"
              width={500}
              height={400}
              alt="Default Car Image"
            />
          </div>
        </div>

        <Divider />

        <div className="flex justify-center w-full flex-col" id="cars">
          <h2 className="self-center text-3xl">Car selection</h2>
          <Slider></Slider>
        </div>

        <div
          className="flex justify-center items-center w-full flex-col"
          id="tracks"
        >
          <h2 className="self-center text-3xl">Track selection (more TBA)</h2>
          <div className="flex flex-col gap-4 text-lg text-center">
            <Image
              className="rounded-xl"
              src="/TrackImg.png"
              width={500}
              height={400}
              alt="Default Car Image"
            />
            <span>Overpass Circuit</span>
          </div>
        </div>

        <Divider />

        <div id="leaderboard">
          <Leaderboard />
        </div>
      </div>

      <Footer />
    </>
  );
}
