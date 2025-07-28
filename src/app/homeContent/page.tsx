import ShinyText from "../../components/lightswind/shiny-text";


export default function HomeContent() {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
            {/* Arka plan animasyonu: mutlak konumlandırma ve tam kaplama */}


            {/* Metin: ön planda olması için z-index ve relative konum */}

            <ShinyText
                size="4xl"
                weight="extrabold"
                shineColor="white"
                baseColor="#555"
                shineWidth={30}
                intensity={1}
                speed={1}
                direction="left-to-right"
                repeat="infinite"
                gradientType="linear"
                pauseOnHover={true}
            >
                Karahan GÜLLÜ
            </ShinyText>
        </div>

    );
}
