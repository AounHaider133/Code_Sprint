import "./player-card-style.css";

const PlayerCard = ({ username, points, createdAt }) => {
  return (
    <div className="center">
      <div className="cardtt">
        <div className="additional">
          <div className="user-card">
            <div className="level center">Level 13</div>
            <div className="points center">5,312 Points</div>
            <svg
              width="110"
              height="110"
              viewBox="0 0 250 250"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="title desc"
              className="center"
            >
              <title id="title">Teacher</title>
              <desc id="desc">
                Cartoon of a Caucasian woman smiling, and wearing black glasses
                and a purple shirt with white collar drawn by Alvaro Montoro.
              </desc>
              <defs>
                <clipPath id="scene">
                  <circle cx="125" cy="125" r="115" />
                </clipPath>
                <clipPath id="lips">
                  <path d="M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z" />
                </clipPath>
              </defs>
              <circle cx="125" cy="125" r="120" fill="rgba(0,0,0,0.15)" />
              <g stroke="none" strokeWidth="0" clipPath="url(#scene)">
                <rect x="0" y="0" width="250" height="250" fill="#b0d2e5" />
                <g id="head">
                  <path
                    fill="none"
                    stroke="#111111"
                    strokeWidth="2"
                    d="M 68,103 83,103.5"
                  />
                  <path
                    className="hair"
                    d="M 67,90 67,169 78,164 89,169 100,164 112,169 125,164 138,169 150,164 161,169 172,164 183,169 183,90 Z"
                  />
                  <circle cx="125" cy="100" r="55" className="skin" />
                  <ellipse
                    cx="102"
                    cy="107"
                    rx="5"
                    ry="5"
                    className="eyes"
                    id="eye-left"
                  />
                  <ellipse
                    cx="148"
                    cy="107"
                    rx="5"
                    ry="5"
                    className="eyes"
                    id="eye-right"
                  />
                  <rect
                    x="119"
                    y="140"
                    width="12"
                    height="40"
                    className="skin"
                  />
                  <path
                    className="line eyebrow"
                    d="M 90,98 C 93,90 103,89 110,94"
                    id="eyebrow-left"
                  />
                  <path
                    className="line eyebrow"
                    d="M 160,98 C 157,90 147,89 140,94"
                    id="eyebrow-right"
                  />
                  <path
                    stroke="#111111"
                    strokeWidth="4"
                    d="M 68,103 83,102.5"
                  />
                  <path
                    stroke="#111111"
                    strokeWidth="4"
                    d="M 182,103 167,102.5"
                  />
                  <path
                    stroke="#050505"
                    strokeWidth="3"
                    fill="none"
                    d="M 119,102 C 123,99 127,99 131,102"
                  />
                  <path
                    fill="#050505"
                    d="M 92,97 C 85,97 79,98 80,101 81,104 84,104 85,102"
                  />
                  <path
                    fill="#050505"
                    d="M 158,97 C 165,97 171,98 170,101 169,104 166,104 165,102"
                  />
                  <path
                    stroke="#050505"
                    strokeWidth="3"
                    fill="rgba(240,240,255,0.4)"
                    d="M 119,102 C 118,111 115,119 98,117 85,115 84,108 84,104 84,97 94,96 105,97 112,98 117,98 119,102 Z"
                  />
                  <path
                    stroke="#050505"
                    strokeWidth="3"
                    fill="rgba(240,240,255,0.4)"
                    d="M 131,102 C 132,111 135,119 152,117 165,115 166,108 166,104 166,97 156,96 145,97 138,98 133,98 131,102 Z"
                  />
                  <path
                    className="hair"
                    d="M 60,109 C 59,39 118,40 129,40 139,40 187,43 189,99 135,98 115,67 115,67 115,67 108,90 80,109 86,101 91,92 92,87 85,99 65,108 60,109"
                  />
                  <path
                    id="mouth"
                    fill="#d73e3e"
                    d="M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z"
                  />
                  <path
                    id="smile"
                    fill="white"
                    d="M125,141 C 140,141 143,132 143,132 143,132 125,133 125,133 125,133 106.5,132 106.5,132 106.5,132 110,141 125,141 Z"
                    clipPath="url(#lips)"
                  />
                </g>
                <g id="shirt">
                  <path
                    fill="#8665c2"
                    d="M 132,170 C 146,170 154,200 154,200 154,200 158,250 158,250 158,250 92,250 92,250 92,250 96,200 96,200 96,200 104,170 118,170 118,170 125,172 125,172 125,172 132,170 132,170 Z"
                  />
                  <path
                    id="arm-left"
                    className="arm"
                    stroke="#8665c2"
                    fill="none"
                    strokeWidth="14"
                    d="M 118,178 C 94,179 66,220 65,254"
                  />
                  <path
                    id="arm-right"
                    className="arm"
                    stroke="#8665c2"
                    fill="none"
                    strokeWidth="14"
                    d="M 132,178 C 156,179 184,220 185,254"
                  />
                  <path
                    fill="white"
                    d="M 117,166 C 117,166 125,172 125,172 125,182 115,182 109,170 Z"
                  />
                  <path
                    fill="white"
                    d="M 133,166 C 133,166 125,172 125,172 125,182 135,182 141,170 Z"
                  />
                  <circle cx="125" cy="188" r="4" fill="#5a487b" />
                  <circle cx="125" cy="202" r="4" fill="#5a487b" />
                  <circle cx="125" cy="216" r="4" fill="#5a487b" />
                  <circle cx="125" cy="230" r="4" fill="#5a487b" />
                  <circle cx="125" cy="244" r="4" fill="#5a487b" />
                  <path
                    stroke="#daa37f"
                    strokeWidth="1"
                    className="skin hand"
                    id="hand-left"
                    d="M 51,270 C 46,263 60,243 63,246 65,247 66,248 61,255 72,243 76,238 79,240 82,243 72,254 69,257 72,254 82,241 86,244 89,247 75,261 73,263 77,258 84,251 86,253 89,256 70,287 59,278"
                  />
                  <path
                    stroke="#daa37f"
                    strokeWidth="1"
                    className="skin hand"
                    id="hand-right"
                    d="M 199,270 C 204,263 190,243 187,246 185,247 184,248 189,255 178,243 174,238 171,240 168,243 178,254 181,257 178,254 168,241 164,244 161,247 175,261 177,263 173,258 166,251 164,253 161,256 180,287 191,278"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="more-info">
            <h1>{username}</h1>
            <div className="coords">
              <span>CodeSprint</span>
              <span>Joined {createdAt}</span>
            </div>
            <div className="coords">
              <span>Junior Developer</span>
              <span>Lahore, Pakistan</span>
            </div>
            <div className="stats">
              <div>
                <div className="title">Awards</div>
                <i className="fa fa-trophy"></i>
                <div className="value">2</div>
              </div>
              <div>
                <div className="title">Matches</div>
                <i className="fa fa-gamepad"></i>
                <div className="value">27</div>
              </div>
              <div>
                <div className="title">Hits</div>
                <i className="fa fa-group"></i>
                <div className="value">{points}</div>
              </div>
              <div>
                <div className="title">Attempts</div>
                <i className="fa fa-coffee"></i>
                <div className="value infinity">∞</div>
              </div>
            </div>
          </div>
        </div>
        <div className="general">
          <h1 style={{ color: "white" }}>{username}</h1>
          <p style={{ color: "white" }}>
            Enhancing the coding journey by following interactive questions with
            proper progress tracking. Clean code architectural approach is the
            key to the continuous improvement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
