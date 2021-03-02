import { useMediaQuery } from "./useMediaQuery";

type Props = { onClose: () => void };

export const Welcome = ({ onClose }: Props) => {
  const isPC = useMediaQuery("(min-width:750px)");
  const isTooSmall = !useMediaQuery("(min-width:300px)");

  return (
    <article
      className="message is-info"
      style={
        isPC
          ? {
              position: "fixed",
              right: "0",
              bottom: 0,
              width: "40%",
              height: "40%",
            }
          : {
              position: "fixed",
              right: "0",
              top: 0,
              width: "100%",
              height: "100%",
            }
      }
    >
      <div className="message-header">
        Welcome!
        <button className="delete" onClick={onClose}></button>
      </div>
      <div className="message-body">
        {!isTooSmall && (
          <>
            <p>
              This is a leaderboard for the game DeltaChase by HelperWesley. To
              add you score, download the DeltaChase leaderboard GDMod mod.{" "}
              <br />
              See those links for more details:
            </p>
            <br />
            <a
              href="https://github.com/arthuro555/gdmod/wiki/Installation-Guide#web-games"
              rel="noopener noreferer"
            >
              GDMod installation guide
            </a>
            <br />
            <a
              href="https://github.com/arthuro555/DeltaChaseLeaderboards/releases"
              rel="noopener noreferer"
            >
              Mod download
            </a>
          </>
        )}
        {!isPC && !isTooSmall && (
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontFamily: '"Comic Sans MS", "Comic Sans"',
            }}
          >
            <br />
            <br />
            <i>
              Dear mobile/small screen user, <br />I am truly sorry but I am not
              good at design, and ended up doing this css hack that left a lot
              of empty space here. <br />
              This message is nothing more than something to fill it. Please,
              feel free to ignore it.
              <br />
              Every line here is not a sincere appology, just me hoping to fill
              the empty void. I really need to learn to write better CSS, huh?
              <br />
              Anyways, have fun playing delta chase!
              <br />
              <br />
              <span style={{ textAlign: "right" }}>Yours truly, the dev.</span>
            </i>
          </p>
        )}
        {isTooSmall && (
          <p>
            Sorry that screen is waaay too small. I don't have a degree in
            design I cannot make stuff for such small devices. Please buy a
            larger one.
          </p>
        )}
      </div>
    </article>
  );
};
