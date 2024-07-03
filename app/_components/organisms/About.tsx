import Heading from "../atoms/Text/Heading";
import Paragraph from "../atoms/Text/Paragraph";
import { motion, useTransform } from "framer-motion";

export default function About({ scrollYProgress }: any) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  const isDesktop = typeof window !== "undefined" && window.innerWidth > 1024;

  const style = isDesktop ? { scale, rotate } : { scale: 1, rotate: 0 };

  const initial = isDesktop ? { opacity: 0, y: 50 } : {};
  const whileInView = isDesktop ? { opacity: 1, y: 0 } : {};

  return (
    <motion.div
      className="z-50 bg-white px-7 py-20 md:h-[100vh] lg:py-28"
      id={"About"}
      style={style}
    >
      <motion.div
        initial={initial}
        whileInView={whileInView}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeInOut" }}
      >
        <Heading text={"About Me"} />
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-3 md:gap-10 lg:gap-16">
          <Paragraph>
            My journey into web development began in college when I was tasked
            with creating a website for a fictional restaurant. Fast forward to
            today, I’m a degree graduate in Information Technology from Sunway
            University looking to channel my creativity through bringing
            beautiful and engaging web-based applications to life.
          </Paragraph>
          <Paragraph>
            When I’m not coding, I enjoy decorating my{" "}
            <span className="lg:cursor-[url(/images/qiqi.png),_default]">
              Serenitea Pot on Genshin Impact
            </span>
            , crafting scarily specific Spotify playlists for every situation,
            and strumming on my guitar.
          </Paragraph>
          <img src="images/self.jpg" alt="" />
        </div>
      </motion.div>
    </motion.div>
  );
}
