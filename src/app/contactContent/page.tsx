import CodeHoverCards from '../../components/lightswind/code-hover-cards';
import { Github, Instagram, Linkedin } from 'lucide-react';


export default function ContactContent() {

    const cards = [
        { id: '1', icon: Github, title: 'GitHub', href: 'https://github.com' },
        { id: '2', icon: Linkedin, title: 'Linkedin' },
        { id: '3', icon: Instagram, title: 'İnstagram' },
    ];
    return (
        <div className="relative font-sans min-h-screen flex flex-col">
            <CodeHoverCards
                cards={cards}
                onCardClick={(card) => console.log('Clicked:', card)}
            />
        </div>
    );
}