import React, { Component, Fragment } from 'react'
import { Footer, Content } from "rbx";
import '../styles/secFooter.scss'
class SecFooter extends Component {
    render(){
        return (
            <Fragment>
                <Footer class="footer">
                    <Content textAlign="centered">
                        aqui vai os negocio do footer
                    </Content>
                </Footer>
            </Fragment>
        )
    }
}

export default SecFooter