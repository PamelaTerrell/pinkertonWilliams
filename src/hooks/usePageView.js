import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function usePageView() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'function') return;

    const path = location.pathname + (location.search || '');
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);
}
