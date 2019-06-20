import React, { Component } from 'react'
import {Card} from 'rbx'
import Form from './Form'

export default class ContainerForm extends Component {
    render(){
        return(
            <Card id="containerForm">
                <Form/>
            </Card>
        )
    }
}