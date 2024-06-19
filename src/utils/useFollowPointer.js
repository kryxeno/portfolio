import { useEffect } from 'react';
import { useMotionValue, useSpring, frame } from 'framer-motion';

export function useFollowPointer(ref, delay = 0, offset = 0) {
  const spring = {
    damping: 20,
    stiffness: 100 - delay,
    restDelta: 0.001,
  };

  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

      frame.read(() => {
        xPoint.set(
          clientX +
            window.scrollX -
            element.offsetLeft -
            element.offsetWidth / 2
        );
        yPoint.set(
          clientY +
            window.scrollY -
            element.offsetTop -
            element.offsetHeight / 2 -
            offset
        );
      });
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () =>
      window.removeEventListener('pointermove', handlePointerMove);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { x, y };
}
