import React, { Component } from 'react';
import { Card } from 'react-bootstrap'

export default class FooterComponent extends Component {

    render() {
        return (
            <div>
                <Card>
                    <Card.Body style={{ backgroundColor: '#c4170c' }}>
                        <div className="d-flex p-0 text-light">
                            <span className="ml-3 h1 font-weight-bold">g1
                                <span className="ml-3 h5 font-weight-bold"> Ultimas Notícias</span>
                            </span>
                        </div>
                        <p className="mt-4 d-flex p-0 h6 text-light" >
                            © Copyright 2000-2022 Globo Comunicação e Participações S.A.
                        </p>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}