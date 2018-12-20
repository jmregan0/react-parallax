import * as React from 'react';
import Navbar from './navbar';
import TextSection from './textSection';
import Projects from './projects';
import Footer from './footer';

class App extends React.Component {

  render() {
    return (
      <div style={{maxWidth: '100vw', overflow: 'hidden'}}>
        <Navbar />

        {/* ************************************************************************************ */}
        {/* These following divs with classNames "p-1", "p-2" etc are your parallax image fixtures.
            They will specify your fixed images as you scroll the page. Add as many as you want, but
            be sure to give them unique classNames.

            Check out public/style.css to see the styling. You shouldn't need to change any actual
            styling, but you can define your image sources there

            This first one has a little extra inline-styling for the "Welcome" text. Feel free to
            remove / edit */}
        {/* ************************************************************************************ */}
        <div className="p-1">
          <p style={{fontFamily: 'Barlow', color: '#FFFFFF', fontSize: '48px', marginBottom: '20%'}}>W e l c o m e</p>
        </div>

        {/* ************************************************************************************ */}
        {/* These divs with className "sectional" are for page content. They essentially just cut out
            a 75vh white block between parallax sections for written or other content.

            Copy as many "sectional" divs as you need here, and then just drop your React component
            within them to render it within the sectional.

            Remember that each sectional is set to about 75vh, so be careful about your React component
            potentially overflowing this. You can change the default height as you like. */}
        {/* ************************************************************************************ */}
        <div className="sectional">
          <TextSection label="About" />
        </div>

        <div className="p-2"></div>

        <div className="sectional">
          <TextSection label="Background" />
        </div>

        <div className="p-3"></div>

        <div className="sectional">
          {/* ************************************************************************************ */}
          {/* I included a really basic Projects component here that you can feel free to discard or
              expand upon.

              If you dive into it you will see that it renders a row of project items that you can
              pass a name and image to. These could easily be customized to pop open a modal or link
              to another site on click */}
          {/* ************************************************************************************ */}
          <Projects />
        </div>

        <div className="p-4"></div>

        {/* ************************************************************************************ */}
        {/* Same as "sectional" divs, just a bit smaller to serve as a footer */}
        {/* ************************************************************************************ */}
        <div className="sectional-sm">
          <Footer />
        </div>

      </div>
    )
  }
}

export default App;
