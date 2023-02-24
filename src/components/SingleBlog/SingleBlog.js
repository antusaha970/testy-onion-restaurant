import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SingleBlog({ blog }) {
    const { img, title, description } = blog;

    return (
        <div className='col-md-4 mb-3'>
            <Card style={{  }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary" className='custom-btn'>Visit full Blog</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SingleBlog;