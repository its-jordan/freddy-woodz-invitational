import DiscordTiersArray from '@/components/memearrays';

export default function MemePage() {
  return (
    <main className='meme-main'>
      <div className='discord-header-container'>
        <div className='discord-header'>Discord Tier-List</div>
      </div>
      <div className='discord-container'>
        <DiscordTiersArray />
      </div>
    </main>
  );
}
