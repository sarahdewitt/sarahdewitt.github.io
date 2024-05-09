export default function Heading({ text }: { text: string }) {
  return (
    <h1 className="text-4xl md:text-6xl lg:text-8xl font-medium leading-tight text-black pb-10">
      {text}
    </h1>
  );
}
