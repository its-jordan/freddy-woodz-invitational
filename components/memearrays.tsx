import DiscordTiers from '../meme/discordtiers.json';

export default function DiscordTiersArray() {
  const discordArray = DiscordTiers;
  const playerArray = discordArray.players;
  return (
    <>
      {playerArray.map((value, index) => {
        return (
          <div
            className={`discord-name-container ${value.name
              .replace(' ', '-')
              .replace('(', '')
              .replace(')', '')
              .replace(' ', '-')
              .toLowerCase()} ${value.tier.toLowerCase()}`}
            key={index}>
            <div className="discord-name">{value.name}</div>
            <div className="discord-tier">{value.tier}</div>
          </div>
        );
      })}
    </>
  );
}
