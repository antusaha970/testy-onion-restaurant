import React from 'react';
import { Container } from 'react-bootstrap';
import SingleDish from '../SingleDish/SingleDish';

const ShowAllDish = ({ currentDish }) => {
    return (
        <Container>
            <div className="row">
                {
                    currentDish?.map(item => <SingleDish item={item} key={item.id}></SingleDish>)
                }
            </div>
        </Container>
    );
};

export default ShowAllDish;