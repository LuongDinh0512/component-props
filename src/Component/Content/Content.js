import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <section id="scroll">
                    <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className={"col-lg-6 " + this.props.pos1}>
                        <div className="p-5"><img className="img-fluid rounded-circle" src={this.props.picture} alt="..." /></div>
                        </div>
                        <div className="col-lg-6">
                        <div className="p-5">
                            <h2 className="display-4">{this.props.title}</h2>
                            <p>{this.props.description}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Content;