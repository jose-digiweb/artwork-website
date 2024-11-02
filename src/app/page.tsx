import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='flex flex-col w-full h-full font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col w-full h-full max-w-screen-lg mx-auto'>
        <div className='w-full flex flex-col'>
          <span>BangeYhodhy Abstract Painting</span>
          <Button>View All Artworks</Button>
        </div>
      </main>
    </div>
  );
}
