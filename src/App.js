import "./styles.css";
import React, { useState } from "react";

const places = {
  Action: [
    {
      name: "1. Attack on Titan",
      rating: "5/5",
      about:
        "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter"
    },
    {
      name: "2. Fullmetal Alchemist: Brotherhood",
      rating: "4.8/5",
      about:
        "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mothe.."
    },
    {
      name: "3. One Punch Man",
      rating: "4.5/5",
      about:
        "The seemingly unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, Saitama relentlessly trained for three years, losing all of his hair in the process. Now, Saitama is so powerful, he can defeat any enemy with just one punch."
    }
  ],
  "Sci-fi": [
    {
      name: "1. Steins;Gate",
      rating: "5/5",
      about:
        "Eccentric scientist Rintarou Okabe has a never-ending thirst for scientific exploration. Together with his ditzy but well-meaning friend Mayuri Shiina and his roommate Itaru Hashida, Rintarou founds the Future Gadget Laboratory in the hopes of creating technological innovations.."
    },
    {
      name: "2. Code Geass: Lelouch of the Rebellion",
      rating: "4.7/5",
      about:
        "In the year 2010, the Holy Empire of Britannia is establishing itself as a dominant military nation, starting with the conquest of Japan. Renamed to Area 11 after its swift defeat, Japan has seen significant resistance against these tyrants in an attempt to regain independence."
    },
    {
      name: "3. The Promised Neverland",
      rating: "4.5/5",
      about:
        'Surrounded by a forest and a gated entrance, the Grace Field House is inhabited by orphans happily living together as one big family, looked after by their "Mama," Isabella. Although they are required to take tests daily, the children are free to spend their time as they see fit, usually play'
    }
  ],
  Sports: [
    {
      name: "1. Hajime no Ippo",
      rating: "5/5",
      about:
        "In his father's absence, teenager Ippo Makunouchi works hard to help his mother run her fishing boat rental business. Ippo's timid nature, his lack of sleep, and the sea smell make him an easy target for relentless bullies who leave him bruised and beaten on a daily basis. Mamoru Takamura, an up-and-coming boxer, rescues Ippo from a violent after-school incident and takes him back to the Kamogawa Boxing Gym for recovery."
    },
    {
      name: "2. Haikyuu!!",
      rating: "4.9/5",
      about:
        'Ever since having witnessed the "Little Giant" and his astonishing skills on the volleyball court, Shouyou Hinata has been bewitched by the dynamic nature of the sport. Even though his attempt to make his debut as a volleyball regular during a middle school tournament went up in flames, he longs to prove that his less-than-impressive height ceases to be a hindrance in the face of his sheer will and perseverance. '
    },
    {
      name: "3. Blue Lock",
      rating: "4.8/5",
      about:
        "Yoichi Isagi was mere moments away from scoring a goal that would have sent his high school soccer team to the nationals, but a split-second decision to pass the ball to his teammate cost him that reality. Bitter, confused, and disappointed, Isagi wonders if the outcome would have been different had he not made the pass. When the young striker returns home, an invitation from the Japan Football Union awaits him. Through an arbitrary and biased decision-making process, Isagi is one of three hundred U-18 strikers selected for a controversial project named Blue Lock."
    }
  ]
};
var themes = Object.keys(places);

export default function App() {
  const [themeType, setTheme] = useState("Action");
  function themeClickHandler(themeType) {
    setTheme(themeType);
  }
  return (
    <div className="App" style={{}}>
      <header
        style={{
          // backgroundImage:
          //   'linear-gradient(rgba(0,0,0 0.2),rgba(0,0,0,0.8)),url(https://www.otakukan.com/wp-content/uploads/2019/09/eMnp5F-1-1-1.jpg)',
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "100%",
          backgroundColor: "#eee",
          padding: "1rem",
          margin: "0px auto"
        }}
      >
        <h1
          style={{
            borderRadius: "0.5rem",
            color: "black",
            padding: "0.5rem  1rem"
          }}
        >
          Top Anime with genres
        </h1>
        <p
          style={{
            fontSize: "large",
            color: "black"
          }}
        >
          Select a genre to find its top anime show
        </p>
        <div>
          {themes.map((theme) => (
            <button
              onClick={() => themeClickHandler(theme)}
              style={{
                cursor: "pointer",
                borderRadius: "0.5rem",
                background: "black",
                padding: "0.5rem  1rem",
                border: "1px solid white",
                color: "white",
                fontWeight: "bold",
                margin: "1rem 0.5rem"
              }}
            >
              {theme}
            </button>
          ))}
        </div>
      </header>
      <div
        style={{
          textAlign: "left",
          padding: "1rem ",
          margin: "auto"
        }}
      >
        <ul
          style={{
            paddingInlineStart: "0"
          }}
        >
          {places[themeType].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                padding: "0.5rem 1rem",
                border: "1px solid grey",
                width: "auto",
                margin: "1rem 3rem",
                backgroundColor: "lightgoldenrodyellow",
                borderRadius: "1rem"
              }}
            >
              {" "}
              <h2> {place.name} </h2>
              <small style={{ paddingBottom: "2px" }}>
                {" "}
                Rationg: {place.rating}{" "}
              </small>
              <p> {place.about} </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
