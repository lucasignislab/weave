import GoogleAdsLogo from "../assets/platforms/google-ads.svg";
import MetaAdsLogo from "../assets/platforms/meta.svg";
import NewsBreakLogo from "../assets/platforms/newsbreak.png";
import TaboolaLogo from "../assets/platforms/taboola.png";

const platforms = [
  {
    name: "Meta Ads",
    logo: MetaAdsLogo,
    position: "floating-platform--meta",
  },
  {
    name: "Google Ads",
    logo: GoogleAdsLogo,
    position: "floating-platform--google",
  },
  {
    name: "Taboola",
    logo: TaboolaLogo,
    position: "floating-platform--taboola",
  },
  {
    name: "NewsBreak",
    logo: NewsBreakLogo,
    position: "floating-platform--newsbreak",
  },
];

export default function FloatingPlatforms() {
  return (
    <div className="floating-platforms" aria-hidden="true">
      {platforms.map((platform) => (
        <div
          className={`floating-platform ${platform.position}`}
          key={platform.name}
        >
          <div className="floating-platform__tile">
            <img
              className="floating-platform__logo"
              src={platform.logo}
              alt=""
              decoding="async"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
