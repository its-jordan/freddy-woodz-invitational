// @ts-ignore
import DiscordTiers from '../meme/discordtiers.yaml';

export default function DiscordTiersArray() {
  const discordArray = DiscordTiers;
  const playerArray = discordArray.players;
  return (
    <>
      {playerArray.map((value: any, index: number) => {
        return (
          <div
            className={`discord-name-container ${value.name
              .replace(' ', '-')
              .replace('(', '')
              .replace(')', '')
              .replace(' ', '-')
              .toLowerCase()} ${value.tier.toLowerCase()}`}
            key={index}>
            <div className='discord-name'>{value.name}</div>
            <div className='discord-tier'>{value.tier}</div>
          </div>
        );
      })}
    </>
  );
}
