import { motion, useReducedMotion } from "motion/react";

export function PageHeader({ eyebrow, title, description, image }) {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy-950/80" />
      </div>
      <div className="container-page relative">
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-400">{eyebrow}</span>
        )}
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-5xl"
        >
          {title}
        </motion.h1>
        {description && <p className="mt-4 max-w-xl text-base text-white/75">{description}</p>}
      </div>
    </section>
  );
}
