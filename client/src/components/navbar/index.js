import React, { Component } from 'react'
import MobileNavbar from "./mobile"
import DesktopNavbar from "./desktop"
import Media from 'react-media';
export default class index extends Component {
    render() {
        return (
            <Media queries={{ small: "(max-width: 576px)" }}>
            {matches =>
              matches.small ? (
                <MobileNavbar/>
              ) : (
                <DesktopNavbar/>
              )
            }
          </Media>
        )
    }
}
