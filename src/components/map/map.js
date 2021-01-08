import React from 'react';

export default class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapIsReady: false,
    };
  }

  componentDidMount() {
    //Load Map after DOM is loaded
    window.onload = this.setState({mapIsReady : true});
  }

  componentDidUpdate() {
    if (this.state.mapIsReady) {
      // Display the map
      this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.774, lng: -122.419},
        zoom: 12,
        mapTypeId: 'roadmap',
      });
      // You also can add markers on the map below
    }
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}