import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="page-footer purple">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Note Box</h5>
                            <p className="grey-text text-lighten-4">An Innovative Way to Organize Your Thoughts and Knowledge</p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2018 Copyright notebox.deepal.io
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;