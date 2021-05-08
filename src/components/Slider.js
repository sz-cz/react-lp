import React from 'react';
import ContentBox from './ContentBox'
import SliderButton from './SliderButton';

export default class Slider extends React.Component {
    boxWidth = 350;

    state = {
        position: 0,
        rightButton: true
    };

    calcMaxPosition = boxesNumber => this.props.content.length*-this.boxWidth+boxesNumber*this.boxWidth;

    blockRightButton = boxesNumber => this.state.position == this.calcMaxPosition(boxesNumber) ? this.setState({...this.state, rightButton: false}) : null;

    moveCarousel = direction => {
        switch(direction) {
            case "left":
                this.state.position !== 0 ? this.setState({position: this.state.position+350}) : null;
                this.setState({rightButton: true});
                return
            case "right":
                if (window.innerWidth >= 1194 && this.state.position !== this.calcMaxPosition(3))
                    this.setState({position: this.state.position-this.boxWidth}, () => this.blockRightButton(3));
                else if (window.innerWidth >= 844 && this.state.position !== this.calcMaxPosition(2))
                    this.setState({position: this.state.position-this.boxWidth}, () => this.blockRightButton(2));
                else if (window.innerWidth >= 350 && this.state.position !== this.calcMaxPosition(1))
                    this.setState({position: this.state.position-this.boxWidth}, () => this.blockRightButton(1));
                return
        }
    }

    render() {
      return (
        <>
            <SliderButton
                className={'slider__button ' + (this.state.position === 0 ? 'slider__button--disabled' : null)}
                onClick={() => this.moveCarousel('left')} />
            <div className='slider'>
                <div className="slider__carousel" style={{left: this.state.position}}>
                    {this.props.content.map(item => (<ContentBox {...item} />))}
                </div>
            </div>
            <SliderButton
                className={'slider__button ' + (this.state.rightButton === false ? 'slider__button--disabled' : null)}
                onClick={() => this.moveCarousel('right')} />
        </>
      );
    }
  }