export default function Header() {
    return (
      <header className="bg-rose-500 p-4">
        <nav className="flex justify-between mx-auto container items-center">
            <div className="text-white font-bold text-4xl">PROITIGO</div>
            <div className="space-x-12">
                <a href="" className="text-white font-bold text-3xl no-underline hover:underline">usename</a>
                <a href="" className="text-white font-bold text-3xl no-underline hover:underline">Logout</a>
            </div>
        </nav>
      </header>
    );
  }
