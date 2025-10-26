// import { Agents } from "./components/agents";
import Blog from "./components/blog";
// import { Comparison } from "./components/comparison";
// import { CallToAction } from "./components/cta";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero1";
// import { IDE } from "./components/ide";
import { Logos } from "./components/logos";

// import { ZeroConfig } from "./components/zero-config";

const Home = () => (
  <div className="container relative mx-auto grid gap-24 py-16 sm:gap-32">
    <Hero />
    <Logos />
    {/* <Comparison />
    <ZeroConfig /> */}
    <Blog />
    {/* <IDE /> */}
    {/* <Agents /> */}
    {/* <Tweets /> */}
    {/* <CallToAction /> */}
    <Footer />
  </div>
);

export default Home;
