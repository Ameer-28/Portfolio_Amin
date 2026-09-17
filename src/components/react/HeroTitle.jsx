import { useRef } from "react";
import VariableProximity from "./VariableProximity.jsx";

export default function HeroTitle() {
  const containerRef = useRef(null);

  return (
    <h1 ref={containerRef} style={{ position: "relative" }}>
      <VariableProximity
        label="Junior "
        fromFontVariationSettings="'wght' 500, 'opsz' 20"
        toFontVariationSettings="'wght' 900, 'opsz' 60"
        containerRef={containerRef}
        radius={130}
        falloff="linear"
      />
      <VariableProximity
        label="Backend Developer."
        className="vp-accent"
        fromFontVariationSettings="'wght' 500, 'opsz' 20"
        toFontVariationSettings="'wght' 900, 'opsz' 60"
        containerRef={containerRef}
        radius={130}
        falloff="linear"
      />
    </h1>
  );
}
