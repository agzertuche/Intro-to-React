// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Slide,
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const colors = {
  white: "#ffffff",
  green: "#84aa32",
  red: "#c32d2f",
  blue: "#61dafb",
  yellow: "#feb809",
  black: "#282c34",
}

const theme = createTheme({
  primary: colors.black,
  secondary: colors.blue,
  tertiary: colors.white,
}, {
  primary: "Segoe UI",
  secondary: "Helvetica"
});

const slidesImports = [
  import('./slides/Cover'),
  import('./slides/React'),
  import('./slides/VirtualDOM'),
  import('./slides/DiffingAlgorithm'),
  import('./slides/Components'),
  import('./slides/Stateful'),
  import('./slides/Stateless'),
  import('./slides/State'),
  import('./slides/Props'),
  import('./slides/LifeCycle'),
  import('./slides/Render'),
  import('./slides/JSX'),
  import('./slides/HOC'),
  import('./slides/RealWorldApps'),
  import('./slides/Tooling'),
  import('./slides/Exercise'),
  import('./slides/Thanks'),
  import('./slides/References'),
];

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: Array(slidesImports.length).fill(<Slide key="loading" />)
    };
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(slidesImports).then((slidesImportsResolved) => {
      slidesImportsResolved.forEach((slide) => {
        importedSlides.push(slide.default);
      });
      this.setState({ slides: importedSlides });
    });
  }

  render() {
    const { slides } = this.state;
    return (
      <Deck transition={["fade", "slide"]} transitionDuration={800} theme={theme}>
        {
          slides.map((slide, index) => {
            return React.cloneElement(slide, { key: index });
          })
        }
      </Deck>
    );
  }
}
