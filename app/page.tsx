import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link href={"/a"}>a</Link>
    </div>
  )
}