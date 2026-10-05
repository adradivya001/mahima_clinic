import { motion } from 'framer-motion';

export function BotanicalParticles() {
  const leaves = [
    { id: 1, top: '12%', left: '8%', size: 36, delay: 0, duration: 9, rotate: 20 },
    { id: 2, top: '25%', right: '10%', size: 48, delay: 1.5, duration: 11, rotate: -35 },
    { id: 3, top: '65%', left: '4%', size: 28, delay: 3, duration: 8, rotate: 45 },
    { id: 4, top: '78%', right: '8%', size: 42, delay: 2, duration: 10, rotate: -15 },
    { id: 5, top: '45%', right: '2%', size: 24, delay: 4, duration: 12, rotate: 60 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          aria-hidden="true"
          className="absolute text-botanical-600/20 dark:text-sage-400/20"
          style={{
            top: leaf.top,
            left: leaf.left,
            right: leaf.right,
          }}
          initial={{ y: 0, rotate: leaf.rotate, opacity: 0.2 }}
          animate={{
            y: [-15, 15, -15],
            rotate: [leaf.rotate - 10, leaf.rotate + 10, leaf.rotate - 10],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: leaf.delay,
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20Z" fill="none" />
            <path d="M17 8C8 10 5 19 5 19C5 19 14 16 16 7C16.5 7.5 16.8 7.8 17 8Z" opacity="0.8" />
            <path d="M12 4C12 4 13 9 17 12C14 14 10 14 7 12C9 9 12 4 12 4Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
