interface JobProps {
  position: string;
  company: string;
  from: string;
  to: string;
  desc: string;
}

export default function Job({ position, company, from, to, desc }: JobProps) {
  return (
    <div className="text-xs lg:text-base text-light-pink w-full md:w-3/4 pb-10">
      <span className="md:flex md:justify-between pb-2">
        <p className="uppercase pb-2 md:pb-0">
          <span className="font-bold">{position}</span> / {company}
        </p>
        <p className="uppercase justify-self-end pb-2 md:pb-0">
          {from} — {to}
        </p>
      </span>
      <p className="col-span-2 text-justify">{desc}</p>
    </div>
  );
}
