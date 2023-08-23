import React, {useState} from 'react';
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

import abstraction from '../../abstraction.docx';
import train from '../../train.docx';

import './hobbies.css'

const songList = [
    {
        title: 'Song 1',
        length: '0:00 - 2:20',
        audio: new Audio(inTheBeginning) 
      },
      {
        title: 'Song 2',
        length: '0:00 - 3:45',
        audio: new Audio(myMommaRuledThere)
      },
      {
        title: 'Song 3',
        length: '0:00 - 4:10',
        audio: new Audio(rockstar80s) 
      },
      {
        title: 'Song 4',
        length: '0:00 - 2:50',
        audio: new Audio(somethingLightSample) 
      },
      {
        title: 'Song 5',
        length: '0:00 - 1:30',
        audio: new Audio(helloChamp) 
      },
  ];

  const documentList = [
    {
      title: 'Abstraction',
      filePath: abstraction,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Train Ride',
      filePath: train, 
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

const Hobbies = () => {
    const [currentAudioIndex, setCurrentAudioIndex] = useState(null);

    const handleAudioClick = (index) => {
      if (currentAudioIndex === index) {
        if (songList[index].audio.paused) {
          songList[index].audio.play();
        } else {
          songList[index].audio.pause();
        }
      } else {
        if (currentAudioIndex !== null) {
          songList[currentAudioIndex].audio.pause();
        }
        songList[index].audio.play();
        setCurrentAudioIndex(index);
      }
    };

    const [enlargedImage, setEnlargedImage] = useState(null);

    const openEnlargedImage = (imageSrc) => {
        setEnlargedImage(imageSrc);
    };

    const closeEnlargedImage = () => {
        setEnlargedImage(null);
    };

    return (
        <div className="hobbies-container">
          <div className="content-section music">
            {/* <div className="music-files">
                <div className="audio-div a" onClick={() => handleAudioClick(inTheBeginning)}>1</div>
                <div className="audio-div b" onClick={() => handleAudioClick(myMommaRuledThere)}>2</div>
                <div className="audio-div c" onClick={() => handleAudioClick(rockstar80s)}>3</div>
                <div className="audio-div d" onClick={() => handleAudioClick(somethingLightSample)}>4</div>
                <div className="audio-div e" onClick={() => handleAudioClick(helloChamp)}>5</div>
                <div className="audio-div f" onClick={() => handleAudioClick()}>6</div>
            </div> */}
              <div className="music-files">
                {songList.map((song, index) => (
                    <div className="audio-div" key={index}>
                    <div className={`song-square ${currentAudioIndex === index && !song.audio.paused ? 'playing' : ''}`} onClick={() => handleAudioClick(index)}>
                        <div className="play-pause-button">
                        {currentAudioIndex === index && !song.audio.paused ? '❚❚' : '▶'}
                        </div>
                        {/* <div className="song-title">{song.title}</div> */}
                    </div>
                    </div>
                ))}
                </div>
        </div>

            <div className="content-section art">
                <div className="art-images">
                    {[
                        painting1, painting2, digital1, digital2,
                        digital3, digital4, digital5, digital6,
                        digital7, pastel1, photo1, collage1
                    ].map((imageSrc, index) => (
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
                    <div className="enlarged-image-overlay" onClick={closeEnlargedImage}>
                        <img src={enlargedImage} alt="enlarged" className="enlarged-image" />
                    </div>
                )}
            </div>
            {/* <div className="content-art">
                <div className="art-files"> */}
                    {/* <div className="art-div a">
                        <img src={pastel1} alt="1"/>
                    </div>
                    <div className="art-div b">
                    <img src={painting1}  alt="1"/>
                    </div>
                    <div className="art-div c">
                    <img src={painting2}  alt="1"/>
                    </div>
                    <div className="art-div d">
                    <img src={photo1}  alt="1"/>
                    </div>
                    <div className="art-div e">
                    <img src={digital1}  alt="1"/>
                    </div>
                    <div className="art-div f">
                    <img src={digital2}  alt="1"/>
                    </div> */}
                    {/* <div className="art-div g">
                    <img src={digital3}/>
                    </div>
                    <div className="art-div h">
                    <img src={digital4}/>
                    </div>
                    <div className="art-div i">
                    <img src={digital5}/>
                    </div>
                    <div className="art-div j">
                    <img src={digital6}/>
                    </div>
                    <div className="art-div k">
                    <img src={digital7}/>
                    </div>
                    <div className="art-div a">
                    <img src={collage1}/>
                    </div> */}
                {/* </div>
            </div>
           */}
            <div className="content-section writings">
            </div>
        </div>
    );
};

export default Hobbies;
