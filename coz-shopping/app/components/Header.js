import Link from "next/link"
import Image from "next/image"
import DropdownMenu from "./DropDown"

export default function Header() {
  return (
    <header className="bg-white shadow-md flex justify-between py-5 px-11">

      <div className="">
        <Link href="/" className="font-bold text-32 leading-88.02% text-black flex items-center">
          <Image priority src="/로고.svg" width={55} height={30} alt="logo" />
          <span className="ml-4 text-xl">COZ Shopping</span>
        </Link>
      </div>

      <DropdownMenu />

    </header>
  )
}
