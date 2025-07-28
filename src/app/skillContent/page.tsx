import Carousel3D, { Carousel3DItem } from "../../components/lightswind/3d-carousel";

export default function SkillContent() {
    const carouselItems = [
        {
            id: 1,
            title: "Smart Jacket for Cold Environments",
            brand: "ArcticTex",
            description: "Integrated sensors for monitoring body temperature in extreme cold conditions.",
            tags: ["Wearable Tech", "Cold Climate", "Sensor"],
            imageUrl: "/images/jacket.jpg",
            link: "/case-studies/arctictex",
        },
        {
            id: 2,
            title: "Medical Smart Bandage",
            brand: "MediWrap",
            description: "Real-time wound monitoring using textile-based biosensors.",
            tags: ["Healthcare", "Smart Fabric", "Monitoring"],
            imageUrl: "/images/bandage.jpg",
            link: "/case-studies/mediwrap",
        },
        {
            id: 3,
            title: "Automotive Seat Sensor",
            brand: "AutoSense",
            description: "Embedded pressure sensors in car seats for driver posture analysis.",
            tags: ["Automotive", "Posture", "Safety"],
            imageUrl: "/images/car-seat.jpg",
            link: "/case-studies/autosense",
        },
    ];
    return (
        <Carousel3D
            items={carouselItems}
            autoRotate={true}
            rotateInterval={5000}
            cardHeight={480}
        />
    );
}