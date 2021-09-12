import React from 'react';
import { Card } from 'react-bootstrap';
const News = (props) => {
    const {author,content,description,publishedAt}= props.news
    return (
        <>
            <Card className="m-3">
                <Card.Header>Author : {author}</Card.Header>
                <Card.Body>
                    <Card.Title>Content : {content}</Card.Title>
                    <Card.Text>
                      Description : {description}
                    </Card.Text>
                    <Card.Text>
                      Published : {publishedAt}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default News;