import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import moon from "./assets/moon.jpg";
import blacklandCrop1 from "./assets/blacklandCrop1.jpg";
import cat from "./assets/cat.gif";

function App() {
  return (
    <>
      <Parallax pages={4}>
        <ParallaxLayer
          speed={1}
          offset={0}
          factor={2}
          style={{ backgroundImage: `url(${moon})`, backgroundSize: "cover" }}
        />

        <ParallaxLayer
          speed={1}
          offset={2}
          factor={4}
          style={{
            backgroundImage: `url(${blacklandCrop1})`,
            backgroundSize: "auto 100%",
            backgroundPosition: "center center",
          }}
        ></ParallaxLayer>

        <ParallaxLayer speed={0.05} offset={0.2}>
          <h1 style={{ marginLeft: "5vw" }}>Dispatching</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={3.2} speed={2}>
          <h1 style={{ textAlign: "right", marginRight: "10vw" }}>
            Successful landing
          </h1>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.1, end: 4.0 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img style={{ maxWidth: "100%" }} src={cat} alt="cat" />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
