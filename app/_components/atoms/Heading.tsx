export default function Heading({ text }: { text: string }) {
  return (
    <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-tight tracking-wide uppercase bg-gradient-to-r from-pink to-yellow text-transparent w-fit bg-clip-text pb-10">
      {text}
    </h1>
  );
}
