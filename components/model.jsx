import { useEffect, useState } from "react";
import Box from "./box";
import Script from "next/script";

export default function Model() {
  const [active, setActive] = useState("");

  useEffect(() => {
    import("@google/model-viewer").catch(console.error);

    // const modelViewer = document.querySelector("#model-viewer");
    // const annotationClicked = (annotation) => {
    //   let dataset = annotation.dataset;
    //   modelViewer2.cameraTarget = dataset.target;
    //   modelViewer2.cameraOrbit = '30deg 75deg 0.1m"';
    //   modelViewer2.fieldOfView = "45deg";
    // };

    // modelViewer.querySelectorAll("button").forEach((hotspot) => {
    //   hotspot.addEventListener("click", () => annotationClicked(hotspot));
    // });
  }, []);

  return (
    <div className="box md:max-w-boxWide relative mx-auto aspect-square rounded bg-background text-typography shadow lg:aspect-video">
      {/* <input className="absolute left-2.5 top-2.5 z-50" type="checkbox" /> */}
      <model-viewer
        id="model-viewer"
        camera-orbit="30deg 75deg 0.2m"
        class=" h-full w-full"
        src="/spiral.glb"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        tone-mapping="commerce"
        poster="poster.webp"
        shadow-intensity="1"
        exposure="1"
      >
        <button
          class="Hotspot"
          slot="hotspot-3"
          data-position="0.0018443896186654727m 0.07021030467473628m -0.0004359455264802601m"
          data-target="0.0018443896186654727m 0.07021030467473628m -0.0004359455264802601m"
          data-normal="0.015134441811737924m 0.996194696580841m 0.08583166767139822m"
          data-visibility-attribute="visible"
          onClick={() => setActive("application")}
          className={`Hotspot ${active != "application" && active != "" && "opacity-50"}`}
        >
          <div class="HotspotAnnotation">Application</div>
          {active == "application" && (
            <>
              <div
                class="HotspotAnnotation text-xs"
                style={{ transform: "translate(50px, -40px)" }}
              >
                Chat interface
              </div>
              <div
                class="HotspotAnnotation text-xs"
                style={{ transform: "translate(130px, -12px)" }}
              >
                Word processor
              </div>
              <div
                class="HotspotAnnotation text-xs"
                style={{ transform: "translate(50px, 20px)" }}
              >
                Media encoder
              </div>
            </>
          )}
        </button>
        <button
          slot="hotspot-4"
          data-position="0.0018510235030954063m 0.06009582316418617m 0.0006027247848347425m"
          data-normal="0.02980901804681551m 0.9961946982110585m 0.08189960744266478m"
          data-visibility-attribute="visible"
          onClick={() => setActive("communication")}
          className={`Hotspot ${active != "communication" && active != "" && "opacity-50"}`}
        >
          <div class="HotspotAnnotation">Communication protocols</div>
          {active == "communication" && (
            <>
              <div
                class="HotspotAnnotation text-xs"
                style={{ transform: "translate(210px, -34px)" }}
              >
                HTTP
              </div>
              <div
                class="HotspotAnnotation text-xs"
                style={{ transform: "translate(210px, 15px)" }}
              >
                API
              </div>
            </>
          )}
        </button>
        <button
          slot="hotspot-5"
          data-position="0.0010806289454826862m 0.05018946249296958m -0.00047473194807480697m"
          data-normal="0.043577890295848395m 0.9961946967208005m 0.07547909447466437m"
          data-visibility-attribute="visible"
          className={`Hotspot ${active != "model" && active != "" && "opacity-50"}`}
        >
          <div class="HotspotAnnotation">Model</div>
        </button>
        <button
          slot="hotspot-6"
          data-position="0.00032013863851507434m 0.04028368596894011m -0.0015059105819877358m"
          data-normal="0.056022626607100334m 0.9961946985328655m 0.06676516998446926m"
          data-visibility-attribute="visible"
          className={`Hotspot ${active != "data" && active != "" && "opacity-50"}`}
        >
          <div class="HotspotAnnotation">Data</div>
        </button>
        <button
          slot="hotspot-7"
          data-position="0.00008070309400611702m 0.030481014278245018m -0.0008635615908426154m"
          data-normal="0.05602262288224201m 0.9961946990358189m 0.06676516560549137m"
          data-visibility-attribute="visible"
          className={`Hotspot ${active != "" && "opacity-50"}`}
        >
          <div class="HotspotAnnotation HotspotAnnotationLeft">Hardware</div>
        </button>
        <button
          slot="hotspot-8"
          data-position="-0.00042545408070314146m 0.020312681488980976m -0.0014830897410203282m"
          data-normal="0.0667651709686959m 0.9961946981155284m 0.056022632855234546m"
          data-visibility-attribute="visible"
          className={`Hotspot ${active != "compute" && active != "" && "opacity-50"}`}
        >
          <div class="HotspotAnnotation">Compute</div>
        </button>
        <button
          slot="hotspot-9"
          data-position="0.0005252853129584763m 0.010088422936517676m 0.0016583015180252217m"
          data-normal="0.07547910319357262m 0.9961946973409116m 0.043577861018451056m"
          data-visibility-attribute="visible"
          className={`Hotspot ${active != "server" && active != "" && "opacity-50"}`}
        >
          <div class="HotspotAnnotation">Server network</div>
        </button>
        <button
          slot="hotspot-10"
          data-position="0.0011352253808064171m 0.000015225072093436043m 0.0030815621631643674m"
          data-normal="0.0818996057307277m 0.9961946982975207m 0.02980901986082739m"
          data-visibility-attribute="visible"
          className={`Hotspot ${active != "natural" && active != "" && "opacity-50"}`}
        >
          <div
            class="HotspotAnnotation"
            onMouseEnter={() => console.log("hovering natural resources")}
          >
            Natural resources
          </div>
        </button>
        <button
          slot="hotspot-14"
          data-position="0.002546102611615389m 0.08040600132026786m 0.0034143321724187455m"
          data-normal="0.015134440775404481m 0.9961946970837947m 0.08583166201666309m"
          className={`Hotspot ${active != "" && "opacity-50"}`}
        >
          <div class="HotspotAnnotation HotspotAnnotationLeft">Software</div>
        </button>
        <div class="progress-bar hide" slot="progress-bar">
          <div class="update-bar"></div>
        </div>
      </model-viewer>
    </div>
  );
}
