import {
  Fira_Code,
  JetBrains_Mono,
  Space_Grotesk,
  Space_Mono,
  Pixelify_Sans,
  VT323,
  Silkscreen,
  Press_Start_2P,
  Share_Tech_Mono,
} from "next/font/google";

const fira_code = Fira_Code({ weight: "700", subsets: ["latin"] });
const space_mono = Space_Mono({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
const space_grotesk = Space_Grotesk({ weight: "700", subsets: ["latin"] });
const jetbrains_mono = JetBrains_Mono({ weight: "800", subsets: ["latin"] });
const pixelify_sans = Pixelify_Sans({ weight: "700", subsets: ["latin"] });
const vt323 = VT323({ weight: "400", subsets: ["latin"] });
const silkscreen = Silkscreen({ weight: "400", subsets: ["latin"] });
const press_start_2p = Press_Start_2P({ weight: "400", subsets: ["latin"] });
const share_tech_mono = Share_Tech_Mono({ weight: "400", subsets: ["latin"] });

export {
  fira_code,
  space_grotesk,
  space_mono,
  jetbrains_mono,
  pixelify_sans,
  vt323,
  silkscreen,
  press_start_2p,
  share_tech_mono,
};
