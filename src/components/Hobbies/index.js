import React, {useState, useRef} from 'react';

// import abstraction from '../../abstraction.html';
import painting1 from '../../painting1.JPG';
import painting2 from '../../painting2.JPG';
import pastel1 from '../../pastel1.jpg';
import digital1 from '../../digital1.jpg';
import digital2 from '../../digital2.jpg'; 
import digital3 from '../../digital3.jpg'; 
import digital4 from '../../digital4.jpg';
import digital5 from '../../digital5.jpg'; 
import digital6 from '../../digital6.jpg'; 
import digital7 from '../../digital7.jpg'; 
import photo1 from '../../photo1.jpg'; 
import collage1 from '../../collage1.jpg';

import inTheBeginning from '../../inthebeginning.wav';
import myMommaRuledThere from '../../mymommaruledthere.wav';
import rockstar80s from '../../rockstar80s.wav';
import somethingLightSample from '../../somethinglightsample.wav';
import helloChamp from '../../champ.wav';

import './hobbies.css'

import TextModal from '../HtmlModal';
import ImageModal from '../ImageModal';

import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';

const songList = [
    {
        title: 'inTheBeginning',
        audio: inTheBeginning 
      },
      {
        title: 'myMommaRuledThere',
        audio: myMommaRuledThere
      },
      {
        title: 'rockstar80s',
        audio: rockstar80s
      },
      {
        title: 'somethingLight',
        audio: somethingLightSample
      },
      {
        title: 'helloChamp',
        audio: helloChamp
      },
  ];

  const textFiles = [
    { name: 'Abstraction', file: require('../../abstraction.txt') },
    { name: 'train ride to wherever', file: require('../../train.txt')},
    { name: 'Friday Night Ponderings', file: require('../../friday.txt')},
    { name: 'Sartre: Existentialism', file: require('../../final.txt')}
];

  const artImages = [
    painting1, painting2, digital1, digital2,
    digital3, digital4, digital5, digital6,
    digital7, pastel1, photo1, collage1
  ]

const Hobbies = () => {
    const [currentAudioIndex, setCurrentAudioIndex] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [activeContent, setActiveContent] = useState(null);
    const [enlargedImage, setEnlargedImage] = useState(null);

    const openEnlargedImage = (imageSrc) => {
        setEnlargedImage(imageSrc);
    };

    const closeEnlargedImage = () => {
        setEnlargedImage(null);
    };

    const openModal = (content) => {
        setActiveContent(content);
        setModalOpen(true);
    };

    const closeModal = () => {
        setActiveContent(null);
        setModalOpen(false);
    };

    // const handleAudioClick = (index) => {
    //   if (currentAudioIndex === index) {
    //     songList[index].audio.paused ? songList[index].audio.play() : songList[index].audio.pause();
    //   } else {
    //     setCurrentAudioIndex(index);
    //     console.log(index)
    //   }
    // };
    
    const musicFilesRef = useRef(null);
    const documentListRef = useRef(null);
    const artImagesRef = useRef(null);
  

    const handleScroll = (event, ref) => {
      if (event.deltaY > 0) {
        ref.current.scrollLeft += 100;
      } else {
        ref.current.scrollLeft -= 100;
      }
    };
  

    return (
        <div className="hobbies-container" >
       <div className="content-section">
              <div className="music-files" ref={musicFilesRef} onWheel={(e) => handleScroll(e, musicFilesRef)}>
                {songList.map((song, index) => (
              <div className="song-square" key={index}>
              <AudioPlayer
                      src={song.audio}
                      layout="stacked-reverse"
                      autoPlay={false}
                      showFilledProgress={true}
                      customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
                      customProgressBarSection={[
                        RHAP_UI.CURRENT_TIME,
                        RHAP_UI.PROGRESS_BAR,
                        RHAP_UI.DURATION,
                      ]}
                    />
                    <div className="song-title">
                      <p>{song.title}</p>
                    </div>
                  </div>
                ))}
            </div>
    </div>

                <div className="content-section">
                <div className="art-images" ref={artImagesRef} onWheel={(e) => handleScroll(e, artImagesRef)}>
                  {artImages.map((imageSrc, index) => (
                    <div
                      key={index}
                      className="image-container"
                      onClick={() => openEnlargedImage(imageSrc)}
                    >
                      <img src={imageSrc} alt={`${index}`} />
                    </div>
                  ))}
                </div>
                {enlargedImage && (
                  <ImageModal imageSrc={enlargedImage} onClose={closeEnlargedImage} />
                )}
              </div>

            <div className="content-section">
            <div className="document-list" ref={documentListRef} onWheel={(e) => handleScroll(e, documentListRef)}>
                    {textFiles.map((file, index) => (
                        <button key={index} className="specific-button" onClick={() => openModal(file)}>
                            {file.name}
                        </button>
                    ))}
                </div>
                {isModalOpen && activeContent && (
                    <TextModal textContent={activeContent} onClose={closeModal} />
                )}
            </div>
        </div>
    );
};

export default Hobbies;
