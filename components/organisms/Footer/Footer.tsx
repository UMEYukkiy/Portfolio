import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-amber-50 text-black h-30 flex-items-start">
      <div className="flex flex-col justify-left items-left space-y-2 ml-8 mt-8">
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/study">Study</Link>
      </div>
      <hr className='border-t border-gray-400 mt-2' />
      <p className="text-center text-xs">2025 Ume Yukito. Copyright</p>
    </footer>
  )
}