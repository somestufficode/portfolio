import React, { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import GlobeImage from '../../welcome.png';
import { useNavigate } from 'react-router-dom';

const World = () => {
  const globeEl = useRef();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const randomData = [
    {
        id: 1,
        name: "About Me",
        lat: 30,
        lng: 45,
        alt: .50,
        radius: 30,
        color: 'red',
        link: '/aboutme'
    },
    {
        id: 2,
        name: "Contact",
        lat: -20,
        lng: -120,
        alt: .50,
        radius: 30,
        color: 'yellow',
        link: '/contact'

    },
    {
        id: 3,
        name: "Projects",
        lat: 50,
        lng: 170,
        alt: .50,
        radius: 30,
        color: 'green',
        link: '/projects'
    },
    {
        id: 4,
        name: "Hobbies",
        lat: -40,
        lng: 30,
        alt: .50,
        radius: 30,
        color: 'blue',
        link: 'hobbies'
    }
  ]
    

  useEffect(() => {
    setData(randomData);
  }, []);

  useEffect(() => {
    (function moveSpheres() {
      setData((prevData) =>
        prevData.map((d) => ({
          ...d,
          lat: d.lat + 0.1
        }))
      );
      requestAnimationFrame(moveSpheres);
    })();
  }, []);

  useEffect(() => {
    globeEl.current.pointOfView({ altitude: 3.5 });
  }, []);

  const customThreeObject = (d) => {
    const { lat, lng, alt, radius, color } = d;
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const radiusOrbit = 1.03; // Orbit radius (distance from the globe's surface)

    // Calculate the position of the dot along the orbit
    const x = radiusOrbit * Math.sin(phi) * Math.cos(theta);
    const y = radiusOrbit * Math.cos(phi);
    const z = radiusOrbit * Math.sin(phi) * Math.sin(theta);

    // Create a custom three.js object (sphere) for the dot
    const dotGeometry = new THREE.SphereGeometry(radius, 50, 50);
    const dotMaterial = new THREE.MeshLambertMaterial({ color });
    const dotMesh = new THREE.Mesh(dotGeometry, dotMaterial);

    // Position the dot along the orbit
    dotMesh.position.set(x, y, z);

    return dotMesh;
  };

  const customThreeObjectUpdate = (obj, d) => {
    const { lat, lng, alt } = d;
    Object.assign(obj.position, globeEl.current.getCoords(lat, lng, alt));
  };

  const handleCustomLayerClick = (obj, event, { lat, lng }) => {
    // Find the clicked data point
    navigate(obj.link);
    // const clickedDataPoint = data.find((d) => d.lat === lat && d.lng === lng);
    // if (clickedDataPoint) {
    //   navigateToLink(clickedDataPoint.link);
    // }
  };

  // const navigateToLink = (link) => {
  //   navigate(link);
  // };

  return (
    <Globe
      ref={globeEl}
      globeImageUrl={GlobeImage}
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      customLayerData={data}
      customThreeObject={customThreeObject}
      customThreeObjectUpdate={customThreeObjectUpdate}
      onCustomLayerClick={handleCustomLayerClick}
    />
  );
};

export default World;
