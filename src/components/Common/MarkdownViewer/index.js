import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import './markdown-viewer.css';

class MarkDownViewer extends React.Component {
    constructor(props){
        super(props);
        this.updateIframe = this.updateIframe.bind(this);
    }

    componentDidMount() {
        this.updateIframe();
    }

    componentDidUpdate() {
        this.updateIframe();
    }

    updateIframe() {
        const iframe = this.refs.iframe;
        const document = iframe.contentDocument;
        // const head = document.getElementsByTagName('head')[0];
        try {
            document.body.innerHTML = marked(this.props.content);
        } catch (err) {
            document.body.innerHTML = 'failed to render markdown';
        }
        
        // this.props.stylesheets.forEach(url => {
        //     const ref = document.createElement('link');
        //     ref.rel = 'stylesheet';
        //     ref.type = 'text/css';
        //     ref.href = url;
        //     head.appendChild(ref);
        // });
    }

    render(){
        return <iframe id="markdown-iframe" className="markdown-content" ref="iframe"/>
    }
}

MarkDownViewer.propTypes = {
    content: PropTypes.string.isRequired
}

export default MarkDownViewer;