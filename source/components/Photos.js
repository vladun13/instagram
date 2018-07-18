import React from "react";

import {photos} from '../theme/assets/images/photos';
import Photo from "./Photo";

export default class Photos extends React.Component {
    render () {
        const photosJSX  = photos.map(photo => {
            return <Photo src={photo.src} key={photo.id} secured = {photo.secured} />
        })
        return (
            <div className = 'photos'>
                {photosJSX}
            </div>
        );
    }
}