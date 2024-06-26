import Image from 'next/image';

export default function Header() {
  return (
    <header style={{ backgroundColor: '#080A28' }} className="p-2 text-white shadow-lg">
      <div className="container mx-auto flex space-x-4">
        <Image
          src="/stonks.jpg"
          alt="Stonks Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <h1 className="text-3xl font-bold mt-2">Stonks Chat</h1>
      </div>
    </header>
  );
}
