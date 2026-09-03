import { useEffect, useRef, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
}

export default function ScrollReveal({ children, className = '', direction = 'up', delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const dirClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : 'reveal';

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${dirClass} ${delay > 0 ? `reveal-delay-${delay}` : ''} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay * 0.1}s` } : undefined}
    >
      {children}
    </div>
  );
}
