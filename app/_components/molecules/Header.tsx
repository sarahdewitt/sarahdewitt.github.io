import Time from "../atoms/Time";
import Playing from "../atoms/Playing";

export const Header = () => {
  return (
    <div className="hidden fixed md:flex w-full justify-between px-4 py-3 text-sm font-normal">
      <p className="uppercase">Sarah De Witt</p>
      <Playing />
      <Time />
    </div>
  );
}

export const MobileHeader = () => {
  return(
    <div className="flex md:hidden justify-between items-center text-sm px-4 py-3">
      <p className="uppercase">Sarah De Witt</p>
      <Time/>
    </div>
  )
}
