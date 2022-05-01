import React, {useRef} from 'react';
import { Container, Row,Col } from "react-bootstrap";

const ArticleCard = ({postIndex,results})=>{
    const divRef = useRef({});
    const {asset_id, title, abstract, byline, published_date, url} = results;
    const onHandleChange = (index) =>{
        const getDiv = divRef.current[index];
        if(getDiv.classList.contains('authorHide')){
            getDiv.classList.remove('authorHide');
        }else{
            getDiv.classList.add('authorHide');
        }
    }
    return (
        <Container className='articlecardcls'  key={asset_id} onClick={()=>onHandleChange(postIndex)}>
        <Row>
            <Col xs={9}><h5>{title}</h5></Col>
            <Col xs={3}><a className="readmorecls" href={url} target="_blank" rel="noreferrer">read more</a></Col>
        </Row>
        <Row>
            <Col><p>{abstract}</p></Col>
        </Row>
        <Row className='authorHide' ref = {ref => divRef.current[postIndex] = ref}>
            <Col xs={5}><p>Article {byline}</p></Col>
            <Col xs={5}><p>Published on:{published_date}</p></Col>
        </Row>
        <hr className="blogcls" />
        </Container>
    )
};

export default ArticleCard;