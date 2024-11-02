import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='flex flex-col w-full h-full font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col w-full h-full max-w-screen-lg mx-auto'>
        <div className='w-full flex items-center justify-between'>
          <span className='text-5xl font-bold'>BangeYhodhy</span>
          <span className='text-3xl font-bold'>Abstract Painting</span>
        </div>

        <div className='w-full flex flex-col'>
          <span className='text-2xl font-bold'>
            Discover stunning abstract paintings, by BangeYhodhy, a talented artist from
            Guinea Bissau, based in Rotterdam. Each piece is unique, and each one is a
            work of art.
          </span>
        </div>

        <Button>View All Artworks</Button>
      </main>
    </div>
  );
}
