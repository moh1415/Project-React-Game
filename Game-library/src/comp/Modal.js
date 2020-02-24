import React from "react";

export default class Modal extends React.Component {

    render() {
        return (
            <div>

            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">


                        <div className="modal-header">
                            <h4 className="modal-title">Modal Heading</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>


                        <div className="modal-body">
                            Modal body..
                            <input type="text"/>
                        </div>


                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        );
    }
}