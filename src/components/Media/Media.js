
import React from 'react';
import ReactPlayer from 'react-player'
import './Media.scss'; 

const Media = ({media, currentlySeen, isMin}) => {
    if(!media){
        return;
    }

    let content;
    switch(media.type){
        case "video":{
            if(currentlySeen){
                content = <ReactPlayer url={media.url} height={isMin?"164px":"100%"} width={isMin?"240px":"100%"}
                playing={currentlySeen} volume={0.5} muted={true} />;

            }else{
                content="";
            }
        
            break;
        }
        case "image":{
            content = <img src={media.url}/>
            break;
        }
        default:{

        }
    }

    return <div id={"media-"+media.id} className={`media-item ${isMin?"min-media":"media"}`}>
        {content}
    </div>
};



export default Media;