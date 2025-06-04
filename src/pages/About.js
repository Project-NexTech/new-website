import React from 'react';
import { Link } from 'react-router-dom';
import AnnouncementsBar from '../components/AnnouncementsBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionLeft30Right50 from '../components/SectionLeft30Right50';
import SectionLeft50Right30 from '../components/SectionLeft50Right30';
import SectionTwo40s from '../components/SectionTwo40s';
import SectionThree25s from '../components/SectionThree25s';
import SectionCardGrid from '../components/SectionCardGrid';

import ImageWithCaption30 from '../components/Module30/ImageWithCaption';
import SmallTextLines30 from '../components/Module30/SmallTextLines';
import BigTitleSubtitle30 from '../components/Module30/BigTitleSubtitle';

import ImageWithCaption50 from '../components/Module50/ImageWithCaption';
import Carousel50 from '../components/Module50/Carousel';
import SmallTextLines50 from '../components/Module50/SmallTextLines';
import BigTitleSubtitle50 from '../components/Module50/BigTitleSubtitle';
import ImageLeftTitleRight50 from '../components/Module50/ImageLeftTitleRight';

import ImageWithCaption40 from '../components/Module40/ImageWithCaption';
import SmallTextLines40 from '../components/Module40/SmallTextLines';
import ImageTitleSubtitle40 from '../components/Module40/ImageTitleSubtitle';
import ImageLeftTitleRight40 from '../components/Module40/ImageLeftTitleRight';

import ImageWithCaption25 from '../components/Module25/ImageWithCaption';
import BigTitleSubtitle25 from '../components/Module25/BigTitleSubtitle';

import HeadshotLeftTitleRightCard from '../components/CardModule/HeadshotLeftTitleRight';
import ImageLeftSmallTextRightCard from '../components/CardModule/ImageLeftSmallTextRight';
import BigTitleMultiSubtitleCard from '../components/CardModule/BigTitleMultiSubtitle';

// Add CSS for white lines and white box borders
const hrStyle = {
  border: 'none',
  borderTop: '2px solid #fff',
  margin: '0 0 50px 0',
};
const moduleBoxStyle = {
  border: '2px solid #fff',
  borderRadius: 0,
  boxSizing: 'border-box',
  margin: '0',
  background: 'none',
  color: '#fff',
};

const imgSrc = '/img/carousel_1.png';

export default function About() {
  return (
    <div className="App">
      <style>
        {`
          /* For narrow screens: fixed 2rem side padding, max image width = 100vw - 4rem */
          .responsive-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .responsive-image {
            width: 100%;
            max-width: 800px;
          }

          @media (max-width: 864px) {
            .responsive-image {
              width: calc(100vw - 4rem);
            }
          }

          /* For wide screens: dynamic left/right margin = (vw - 800px) / 2 */
          @media (min-width: 865px) {
            .responsive-container {
              padding-left: calc((100vw - 800px) / 2);
              padding-right: calc((100vw - 800px) / 2);
            }
          }
        `}
      </style>

      <AnnouncementsBar />
      <Navbar />
      <div style={{ width: '100%' }}>
        {/* Section 1: 30% left, 50% right - showcase all 30% and 50% formats */}
        <SectionLeft30Right50
          left={<div style={moduleBoxStyle}><ImageWithCaption30 src={imgSrc} caption="30% image + caption" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
          right={<div style={moduleBoxStyle}><ImageWithCaption50 src={imgSrc} caption="50% image + caption" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
        />
        <hr style={hrStyle} />
        <SectionLeft30Right50
          left={<div style={moduleBoxStyle}><SmallTextLines30 lines={["Small text line 1", "Small text line 2"]} /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
          right={<div style={moduleBoxStyle}><Carousel50 images={[imgSrc, imgSrc]} /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
        />
        <hr style={hrStyle} />
        <SectionLeft30Right50
          left={<div style={moduleBoxStyle}><BigTitleSubtitle30 title="Big Title 30%" subtitle="Subtitle 30%" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
          right={<div style={moduleBoxStyle}><SmallTextLines50 lines={["Small text 1", "Small text 2", "Small text 3"]} /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
        />
        <hr style={hrStyle} />
        <SectionLeft30Right50
          left={<div style={moduleBoxStyle}><ImageWithCaption30 src={imgSrc} caption="" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
          right={<div style={moduleBoxStyle}><BigTitleSubtitle50 title="Big Title 50%" subtitle="Subtitle 50%" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
        />
        <hr style={hrStyle} />
        <SectionLeft30Right50
          left={<div style={moduleBoxStyle}><SmallTextLines30 lines={["Left text"]} /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
          right={<div style={moduleBoxStyle}><ImageLeftTitleRight50 imgSrc={imgSrc} title="Big Title" subtitle="Subtitle" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
        />
        <hr style={hrStyle} />

        {/* Section 2: 50% left, 30% right - showcase all 50% and 30% formats */}
        <SectionLeft50Right30
          left={<div style={moduleBoxStyle}><ImageWithCaption50 src={imgSrc} caption="50% image + caption" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
          right={<div style={moduleBoxStyle}><ImageWithCaption30 src={imgSrc} caption="30% image + caption" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
        />
        <hr style={hrStyle} />
        <SectionLeft50Right30
          left={<div style={moduleBoxStyle}><Carousel50 images={[imgSrc, imgSrc]} /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
          right={<div style={moduleBoxStyle}><SmallTextLines30 lines={["Small text 30% right"]} /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
        />
        <hr style={hrStyle} />
        <SectionLeft50Right30
          left={<div style={moduleBoxStyle}><SmallTextLines50 lines={["Small text 50% left"]} /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
          right={<div style={moduleBoxStyle}><BigTitleSubtitle30 title="Big Title 30%" subtitle="Subtitle 30%" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
        />
        <hr style={hrStyle} />
        <SectionLeft50Right30
          left={<div style={moduleBoxStyle}><BigTitleSubtitle50 title="Big Title 50%" subtitle="Subtitle 50%" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
          right={<div style={moduleBoxStyle}><ImageWithCaption30 src={imgSrc} caption="" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
        />
        <hr style={hrStyle} />
        <SectionLeft50Right30
          left={<div style={moduleBoxStyle}><ImageLeftTitleRight50 imgSrc={imgSrc} title="Big Title" subtitle="Subtitle" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
          right={<div style={moduleBoxStyle}><SmallTextLines30 lines={["Right text"]} /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
        />
        <hr style={hrStyle} />

        {/* Section 3: Two 40% modules - showcase all 40% formats */}
        <SectionTwo40s
          left={<div style={moduleBoxStyle}><ImageWithCaption40 src={imgSrc} caption="40% image + caption" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
          right={<div style={moduleBoxStyle}><SmallTextLines40 lines={["Small text 40% right"]} /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
        />
        <hr style={hrStyle} />
        <SectionTwo40s
          left={<div style={moduleBoxStyle}><ImageTitleSubtitle40 src={imgSrc} title="Big Title 40%" subtitle="Subtitle 40%" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
          right={<div style={moduleBoxStyle}><ImageLeftTitleRight40 imgSrc={imgSrc} title="Big Title" subtitle="Subtitle" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
        />
        <hr style={hrStyle} />

        {/* Section 4: Three 25% modules - showcase all 25% formats */}
        <SectionThree25s
          first={<div style={moduleBoxStyle}><ImageWithCaption25 src={imgSrc} caption="25% image + caption" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
          second={<div style={moduleBoxStyle}><BigTitleSubtitle25 title="Big Title 25%" subtitle="Subtitle 25%" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
          third={<div style={moduleBoxStyle}><ImageWithCaption25 src={imgSrc} caption="" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>}
        />
        <hr style={hrStyle} />

        {/* Section 5: Card grid, 3 columns, infinite rows - showcase all card formats */}
        <SectionCardGrid
          cards={[
            <div style={moduleBoxStyle}><HeadshotLeftTitleRightCard imgSrc={imgSrc} title="Card Title 1" subtitle="Card Subtitle 1" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>,
            <div style={moduleBoxStyle}><ImageLeftSmallTextRightCard imgSrc={imgSrc} lines={["Card text 1", "Card text 2"]} /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>,
            <div style={moduleBoxStyle}><BigTitleMultiSubtitleCard title="Card Big Title" subtitles={["Subtitle line 1", "Subtitle line 2"]} /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>,
            <div style={moduleBoxStyle}><HeadshotLeftTitleRightCard imgSrc={imgSrc} title="Card Title 2" subtitle="Card Subtitle 2" /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>,
            <div style={moduleBoxStyle}><ImageLeftSmallTextRightCard imgSrc={imgSrc} lines={["Card text 3", "Card text 4"]} /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>,
            <div style={moduleBoxStyle}><BigTitleMultiSubtitleCard title="Another Big Title" subtitles={["Subtitle line 3", "Subtitle line 4"]} /><style>{'div, span, p, h1, h2, h3, h4, h5, h6, li, button { color: #fff !important; }'}</style></div>,
          ]}
        />
        <hr style={hrStyle} />
      </div>
      <Footer />
    </div>
  );
}
