import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Parcel from 'single-spa-react/parcel'
export default function Root(props) {
  const linkStyle = {
    padding: "16px",
    display: "inline-block",
  };

  return (
    <BrowserRouter basename="/">
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/react" style={linkStyle}>
        React
      </Link>
      <Link to="/vue" style={linkStyle}>
        Vue
      </Link>
      <Link to="/angular" style={linkStyle}>
      <Parcel
                    config={() => System.import('@cah/fees')}
                    wrapWith="div"
                />
      </Link>
      <Routes>
      <Route path='/react' component={<Parcel
                    config={() => System.import('@cah/fees')}
                    wrapWith="div"
                />} exact />
                </Routes>
    </BrowserRouter>
  );
}
