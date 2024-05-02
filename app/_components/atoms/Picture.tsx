import Image from "next/image";

export default function Picture({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={`${src}`}
      alt={`${alt}`}
      width={'900'}
      height={'900'}
      layout="intrinsic"
      className="object-cover w-full rounded-2xl"
    />
  );
}
