import Image from "next/image";

export default function Picture({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative overflow-hidden max-w-screen">
      <Image
      src={`${src}`}
      alt={`${alt}`}
      width={'900'}
      height={'900'}
      layout="intrinsic"
      className="object-cover w-full hover:scale-110 transition-all ease-in duration-200 grayscale hover:grayscale-0"
    />
    </div>
  );
}
