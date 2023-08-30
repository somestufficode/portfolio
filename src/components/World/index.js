import React, { useState, useEffect, useRef, useMemo} from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import GlobeImage from '../../welcome.png';
import { useNavigate } from 'react-router-dom';
import Projects from '../Projects';
import AboutMe from '../AboutMe';
import Contact from '../Contact';
import Hobbies from '../Hobbies';
import Title from '../Title';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const World = () => {
  const globeEl = useRef();
  const [data, setData] = useState([]);
  // const navigate = useNavigate();
  const [selectedObj, setSelectedObj] = useState(null);
  const [initialAltitude, setInitialAltitude] = useState(3.5);


  const randomData = [
    {
        id: 1,
        name: "About Me",
        lat: 30,
        lng: 45,
        alt: .40,
        radius: 30,
        color: 'red',
        link: '/aboutme'
    },
    {
        id: 2,
        name: "Contact",
        lat: -20,
        lng: -120,
        alt: .40,
        radius: 30,
        color: 'yellow',
        link: '/contact'

    },
    {
        id: 3,
        name: "Projects",
        lat: 50,
        lng: 170,
        alt: .40,
        radius: 30,
        color: 'green',
        link: '/projects'
    },
    {
        id: 4,
        name: "Hobbies",
        lat: -40,
        lng: 30,
        alt: .40,
        radius: 30,
        color: 'blue',
        link: 'hobbies'
    }
  ]
    

  useEffect(() => {
    setData(randomData);
  }, []);

  useEffect(() => {
    // Access the internal OrbitControls instance
    console.log(globeEl)
    console.log(globeEl.current)
    // Disable zooming
    globeEl.current.camera.enableZoom = false;
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
    const dotGeometry = new THREE.SphereGeometry(radius, 100, 100);
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

  // const handleCustomLayerClick = (obj, event, { lat, lng }) => {
  //   // Find the clicked data point
  //   navigate(obj.link);
  //   // const clickedDataPoint = data.find((d) => d.lat === lat && d.lng === lng);
  //   // if (clickedDataPoint) {
  //   //   navigateToLink(clickedDataPoint.link);
  //   // }
  // };

  // const handleCustomLayerClick = (obj, event, { lat, lng }) => {
  //   if (obj.id === 1) {
  //     // Move the globe to the right
  //     globeEl.current.pointOfView({altitude: 5.0});
  //   } else if (obj.id === 2) {
  //     // Move the globe to the left
  //     globeEl.current.pointOfView({altitude: 5.0});
  //   } else if (obj.id === 3) {
  //     // Move the globe up
  //     globeEl.current.pointOfView({altitude: 5.0});
  //   } else if (obj.id === 4) {
  //     // Move the globe down
  //     globeEl.current.pointOfView({altitude: 5.0});
  //   }
  // };

  const handleCustomLayerClick = (obj, event, { lat, lng }) => {
    // Define the altitude for the globe's new position
    // const altitude = 5.0;
    
    // Find the DOM element with the class 'globe-container'
    const globeContainer = document.querySelector('.globe-container');
    
    // Check if the globe container element exists
    if (globeContainer) {
      // Get the current transform value of the globe container, or set it to 'translateX(0px)' if undefined
      const currentTransform = globeContainer.style.transform || 'translateX(0px)';
      globeContainer.style.transition = 'transform 2s ease-in-out';

      // Extract the numerical part (pixels) from the current transform value
      const translateX = parseFloat(currentTransform.match(/-?\d+/)[0]);
  
      let newTranslateX = translateX;
      
      // Adjust the newTranslateX based on different obj.id values
      if (obj.id === 1) {
        newTranslateX = 800; // Move to the right
      } else if (obj.id === 2) {
        newTranslateX = -50; // Move to the left
      } else if (obj.id === 3) {
        newTranslateX = 800; // Move more to the right
      } else if (obj.id === 4) {
        newTranslateX = -50; // Move more to the left
      } else {
        newTranslateX= 0;
      }
    
      // Apply the new transform value to the globe container's style, moving it horizontally
      globeContainer.style.transform = `translateX(${newTranslateX}px)`;
      globeContainer.style.position = 'fixed';
      const newAltitude = 5.0;
      // const currentAltitude = globeEl.current.pointOfView().altitude || 0;
      const altitudeChangeDuration = 2; // in seconds
  
      globeEl.current.pointOfView(
        {altitude: newAltitude },
        altitudeChangeDuration * 1000 // Convert seconds to milliseconds
      );    
    };
          setSelectedObj(obj); 

  };

  const renderContent = useMemo(() => {
    if (!selectedObj) {
      return <Title />; // No selected object, no content to render
    }

    console.log(selectedObj)

    switch (selectedObj.id) {
      case 1:
        return <AboutMe />;
      case 2:
        return <Contact />;
      case 3:
        return <Projects />;
      case 4:
        return <Hobbies />;
      default:
        return <Title />; // Return null or a default component if no match
    }
  }, [selectedObj]);

  
  // const handleCustomLayerClick = (obj, event, { lat, lng }) => {
  //   // Find the clicked data point
  //   const clickedDataPoint = data.find((d) => d.lat === lat && d.lng === lng);
  
  //   if (clickedDataPoint) {
  //     const { lat, lng, alt } = clickedDataPoint;
  //     // Calculate the new camera position
  //     const newLat = lat;
  //     const newLng = lng + (clickedDataPoint.id === 1 ? 30 : -30); // Adjust the value based on your preference
  //     const newAlt = alt + 0.1; // Adjust the altitude if needed
  
  //     // Move the globe's point of view to the new position
  //     globeEl.current.pointOfView({ lat: newLat, lng: newLng, altitude: newAlt });
  //   }
  // };

  // const navigateToLink = (link) => {
  //   navigate(link);
  // };

  const handleGlobeReady = () => {
    // Store the initial altitude when the globe is ready
    setInitialAltitude(3.5);
  };

  return (
    <>
    {/* <Projects/> */}
    <div className="info-panel" style={{ zIndex: 999 }}>
        {renderContent}
        <div className="globe-container">
        <Globe
          ref={globeEl}
          globeImageUrl={GlobeImage}
          backgroundColor="rgba(255, 0, 0, 0)"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          customLayerData={data}
          customThreeObject={customThreeObject}
          customThreeObjectUpdate={customThreeObjectUpdate}
          onCustomLayerClick={handleCustomLayerClick}
          width={675}
          onGlobeReady={handleGlobeReady}
        /> 
        </div>
    </div>
    </>
  );
};

export default World;
