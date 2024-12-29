import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Sayfa her değiştiğinde scroll pozisyonunu en üstte sabitle
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;