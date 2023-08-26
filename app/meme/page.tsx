import DiscordTiersArray from '@/components/memearrays';

export default function MemePage() {
  return (
    <main className="mb-16">
      <div className="discord-header-container">
        <div className="discord-header">Discord Tier-List</div>
      </div>
      <div className="discord-container">
        <DiscordTiersArray />
      </div>
    </main>
  );
}
