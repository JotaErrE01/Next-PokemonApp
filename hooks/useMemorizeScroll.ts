import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';


export const useMemorizeScroll = () => {
    const router = useRouter();
    const scrollRef = useRef(0);

    useEffect(() => {
        // eliminar del localstorage la posicion cuando se cierre la pestaña
        window.addEventListener('beforeunload', () => {localStorage.removeItem('scroll')});
        const currentP = localStorage.getItem('scroll') || '0';
        window.scrollTo(0, parseInt(currentP));

        document.addEventListener('scroll', handleScroll);

        function handleScroll(e: any) {
            // obtener coordenadas del scroll
            const scrollTop = e.target.scrollingElement.scrollTop;
            scrollRef.current = scrollTop;
        }

        return () => (document.removeEventListener('scroll', handleScroll))
    }, []);

    const handleClick = (path: string) => {
        router.push(path);
        localStorage.setItem('scroll', scrollRef.current.toString());
    }

    return { handleClick };
}
