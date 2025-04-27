import { useEffect } from 'react';

const useHashScroll = (sectionIds = []) => {
  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const hash = `#${entry.target.id}`;
          if (window.location.hash !== hash) {
            window.history.pushState(null, '', hash);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5, // Adjust based on how early/late you want it to trigger
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);
};

export default useHashScroll;
