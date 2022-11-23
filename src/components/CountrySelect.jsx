import "../assets/css/CountrySelect.css";

const CountrySelect = (props) => {
  const showCountrySelect = () => {
    // show country select menu
    document
      .getElementById("country-menu")
      .classList.toggle("country-menu-open");
    document
      .getElementById("country-menu")
      .classList.toggle("transparent");
    // make text fade in too?
    document
      .getElementById("country-menu-close-btn")
      .classList.toggle("transparent");
  };

  const countries = {
    Europe: {
      Greece: "gr",
      Netherlands: "nl",
      Austria: "at",
      Hungary: "hu",
      Sweden: "se",
      Belgium: "be",
      Norway: "ne",
      Switzerland: "ch",
      Bulgaria: "bg",
      Ireland: "ie",
      Poland: "pe",
      Portugal: "pt",
      Italy: "it",
      Romania: "ro",
      Ukraine: "ua",
      Latvia: "lv",
      "United Kingdom": "uk",
      "Czech Republic": "cz",
      Lithuania: "lt",
      Serbia: "rs",
      France: "fr",
      Slovakia: "sk",
      Germany: "de",
      Slovenia: "si",
    },
    NAmerica: {
      "U.S.A": "us",
      Canada: "ca",
    },
    SAmerica: {
      Argentina: "ar",
      Brazil: "br",
      Colombia: "co",
      Cuba: "cu",
      Venezuela: "ve",
    },
  };

  return (
    <>
      {/* selected country. Capitalize first letter */}
      <div className="selected-country" onClick={showCountrySelect}>
        {props.selectedCountry.slice(0, 1).toUpperCase() +
          props.selectedCountry.slice(1, 2)}
      </div>
      {/* country selection menu */}
      <div id={"country-menu"} className="country-select transparent ">
        {/* Continent: Europe */}
        <div className="continent">
          <h3>Europe</h3>
          <ul className="countries">
            {Object.keys(countries.Europe)
              .sort()
              .map((e, i) => (
                <li
                onClick={() => {
                  props.changeCountry(countries.Europe[e]);
                  showCountrySelect();
                }}
                key={i}
                >
                  {e}
                </li>
              ))}
          </ul>
        </div>
              {/* Continent: North America */}
        <div className="continent">
          <h3>North America</h3>
          <ul className="countries">
            {Object.keys(countries.NAmerica)
              .sort()
              .map((e, i) => (
                <li onClick={() => {
                  props.changeCountry(countries.NAmerica[e]);
                  showCountrySelect();
                }}
                key={i}>{e}</li>
              ))}
          </ul>
        </div>
        {/* Continent: South America */}
        <div className="continent">
          <h3>South America</h3>
          <ul className="countries">
            {Object.keys(countries.SAmerica)
              .sort()
              .map((e, i) => (
                <li onClick={() => {
                  props.changeCountry(countries.SAmerica[e]);
                  showCountrySelect();
                }}
                key={i}>{e}</li>
              ))}
          </ul>
        </div>
        {/* Closing button */}
        <div
          id="country-menu-close-btn"
          className="close-btn transparent"
          onClick={showCountrySelect}
        >
          ✕
        </div>
      </div>
    </>
  );
};

export default CountrySelect;
