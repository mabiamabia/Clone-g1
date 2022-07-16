import "./Pagination.css";
import PaginationComponent from "./pageNumber/PaginationComponent";
import PaginationSelector from "./selector/PaginationSelector";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

export default function Pagination() {
  const [items, setItems] = useState([]);

  /* paginação */
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(items.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3000/feed/page/11")
        .then((response) => response.json())
        .then((data) => data);

      setItems(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [itemsPerPage]);

  return (
    <div className="Pagination">
      <PaginationSelector
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />

      {currentItems.map((item) => {
        return (
          <div className="item">
            <Container>
              <Row>
                {/* Noticia principal */}
                <Col
                  style={{
                    padding: "1%",
                    textDecoration: "none",
                    border: "none",
                  }}
                  sm={8}
                >
                  <Row className="post"
                  
                  >
                    <Col>
                      <Card.Img
                        width="304"
                        height="246"
                        src={
                          item.image
                            ? item.image
                            : "https://picsum.photos/304/246"
                        }
                        alt="Card image"
                      />
                    </Col>

                    <Col>
                      <a
                        style={{ textDecoration: "none" }}
                        href={item.url ? item.url : "https://g1.globo.com/"}
                      >
                        <Card
                          style={{
                            textAlign: "center",
                            border: "none",
                            weight: "10%",
                            height: "100%",
                          }}
                          className="text-dark"
                        >
                          <Card.Title className="post-title"
                            
                          >
                            {item?.title}
                          </Card.Title>
                          <Card.Text
                            style={{
                              textDecoration: "none",
                            }}
                          >
                            {item?.summary}
                          </Card.Text>
                          Conteúdo: {item?.type}
                        </Card>
                      </a>
                    </Col>
                  </Row>
                </Col>

                {/* noticia do canto (card com imagem acima e texto abaixo)*/}
                <Col
                  style={{
                    padding: "1%",
                  }}
                  sm={4}
                >
                  <Card
                    style={{ textAlign: "center" }}
                    className="bg-dark text-white"
                  >
                    <Card.Img
                      src={
                        item.image
                          ? item.image
                          : "https://picsum.photos/304/246"
                      }
                      alt="Card image"
                    />
                    <ListGroup variant="flush">
                      <ListGroup.Item
                        style={{ color: "#C4170C", fontWeight: "bolder" }}
                      >
                        {item?.title}
                      </ListGroup.Item>
                      <ListGroup.Item>{item?.summary}</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        );
      })}

      <PaginationComponent pages={pages} setCurrentPage={setCurrentPage} />
    </div>
  );
}
