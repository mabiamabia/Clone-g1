import AdvertisingComponent from "../advertising/AdvertisingComponent";
import { Container } from "react-bootstrap";
import PostComponent from "../posts/postAll/PostComponent";
import React, { Component } from "react";
import VideoComponent from "../posts/video/VideoComponent";

export default class HomeComponent extends Component {
  render() {
    return (
      /* Este container contêm todo o corpo da home */
      <Container>
        <AdvertisingComponent />
        <VideoComponent />
        <PostComponent />
        <VideoComponent />
        <PostComponent />
      </Container>
    );
  }
}
