import React,{ useEffect, useState} from "react";
import { Container, Row,Col } from "react-bootstrap";
import ArticleCard from "./ArticleCard";
import { fetchGetAPI } from "./services";
import { ENDPOINT_URL } from "../config/config";


const Article = () => {
  const [articleList,setArticleList] = useState([]);
  const [apiError, setApiError] = useState(null);
  useEffect(()=>{
    const setURL = `${ENDPOINT_URL}/svc/mostpopular/v2/viewed/1.json?api-key=dGDTwvKgNlYcJJg7DpeXrsRFD8I95Nki`;
    fetchGetAPI(setURL).then((response) => {
        if (response.status !== 200) {
            throw new Error("Something went wrong, Please try again later.");
        }
        return response.json();
      })
      .then(data =>{
        setArticleList(data.results);
      })
      .catch((e) => {
        console.error("<<<<<<<Error:", e);
        setApiError(e.message)
      });
  },[])
  
    return(
      <>
      <Row>
        <Col xs={12}>
          <Container>
            <Row>
              <Col xs={12}><h6>Articles</h6>
              <hr className="solid" />
               </Col>
            </Row>
          </Container>
          {
            articleList.length > 0 && articleList.map((art,index)=>(
                <ArticleCard key={index} postIndex={index} results={art}/>
            ))
          }
          {
              apiError && (
                <Container>
                <Row>
                    <Col xs={12}><h6>{apiError}</h6></Col>
                </Row>
                </Container>
              )
          }
        </Col>
      </Row>
      </>
    );
};

export default Article;