import * as React from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Gallery extends React.Component {
    render() {
        const childElements = this.props.elements.map(function(element, index){
            return (
                <div className={element.class} key={index}>
                    <img src={element.src}  alt = {element.name}/>
                    <a href={element.src} className="overlay">
                        <div className="background"/>
                        <div className="meta">
                            <span className="title">{element.title}</span>
                            <span className="category">{element.category}</span>
                        </div>
                        {/*<!-- end .meta -->*/}
                    </a>  {/*<!-- end .overlay -->*/}
                </div>
            );
        });

        return (
            <Masonry
                className={'portfolio'} // default ''
                id ={'portfolio'}
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        );
    }
}


export default Gallery;