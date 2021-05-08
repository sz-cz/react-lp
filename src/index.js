import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.sass';
import Header from './components/Header';
import Heading from './components/Heading';
import ContentBox from './components/ContentBox';
import ContentHeading from './components/ContentHeading';
import Slider from './components/Slider';
import content from './data/data';

class Index extends React.Component {

    render() {
      return (
        <>
            <Header />
            <main>
                <section className='section'>
                    <Heading
                        title="Heading"
                        description="Lorem ipsum dolor sit amet, consect etur adipiscing elit."
                    />
                    <div className='content'>
                        <Slider content={content.section1}/>
                    </div>
                </section>
                <section className='section'>
                    <Heading
                        title="Heading"
                        description="Lorem ipsum dolor sit amet, consect etur adipiscing elit."
                    />
                    <div className='content'>
                        <ContentHeading />
                        {content.section2.map(item => (<ContentBox {...item} />))}
                    </div>
                </section>
            </main>
        </>
      );
    }
  }

ReactDOM.render(<Index />, document.getElementById('root'));
