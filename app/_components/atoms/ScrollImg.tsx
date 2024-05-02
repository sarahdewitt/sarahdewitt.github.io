import Image from "next/image";

export default function ScrollImg({src, alt}: {src: string, alt: string}) {
  return (
    <Image className="animate-bounce" src={`${src}`} alt={`${alt}`} width={"20"} height={"20"}/>
  )
}
