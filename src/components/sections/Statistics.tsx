import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 2, suffix: "", label: "Expert Doctors" },
  { value: 5000, suffix: "+", label: "Happy Patients" },
  { value: 10000, suffix: "+", label: "Successful Treatments" },
  { value: 4.9, suffix: "/5", label: "Patient Rating", isDecimal: true },
];

const useCountUp = (
  end: number,
  duration: number = 2000,
  isActive: boolean,
  isDecimal: boolean = false
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = easeOut * end;
      
      setCount(isDecimal ? Math.round(currentValue * 10) / 10 : Math.floor(currentValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isActive, isDecimal]);

  return count;
};

const StatItem = ({
  stat,
  isVisible,
}: {
  stat: (typeof stats)[0];
  isVisible: boolean;
}) => {
  const count = useCountUp(stat.value, 2500, isVisible, stat.isDecimal);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold mb-2">
        {stat.isDecimal ? count.toFixed(1) : count.toLocaleString()}
        <span className="text-primary-foreground/80">{stat.suffix}</span>
      </div>
      <div className="text-primary-foreground/70 text-sm md:text-base font-medium">
        {stat.label}
      </div>
    </div>
  );
};

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-20 gradient-dental text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
