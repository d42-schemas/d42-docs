import React from 'react';

class UmamiAnalytics extends React.Component {

  componentDidMount() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.defer = true;
    script.async = true;
    script.src = 'https://analytics.vedro.io/umami.js';
    script.setAttribute('data-website-id', '6b1c8a89-a65d-493e-9fbc-305863e471b5');
    document.getElementsByTagName("body")[0].appendChild(script);
  }

  render() {
    return <></>;
  }

}

export default UmamiAnalytics;
