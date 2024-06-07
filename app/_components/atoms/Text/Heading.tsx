export default function Heading({ text }: { text: string }) {
  return (
    <h1 className="text-4xl md:text-6xl lg:text-8xl font-montreal uppercase leading-tight text-black pb-8">
      {text}
    </h1>
  );
}
