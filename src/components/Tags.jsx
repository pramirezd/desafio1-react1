import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Tags = ({tagText, tagBackgroundColor}) => {
    return (
        <Badge bg={tagBackgroundColor} style={{ paddingTop: '0.5rem', paddingBottom:'0.5rem', paddingLeft:'6rem', paddingRight:'6rem', fontSize:'10pt'}}> {tagText} </Badge>
    )
}

export default Tags;