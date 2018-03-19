import React from 'react';
import {render} from 'react-dom';
import PageSection from './PageSection.jsx';
import Heading from './Heading.jsx';
import Scroll from 'react-scroll';

function getShade(degree)
{
    return 0;
}

let a = {
    //this should be relative to index.html wherever it lives
    //backgroundImage: 'url(' + './app/test.jpg' + ')',
    //backgroundColor: 'aqua'
    //backgroundColor: 'hsl(120, 100%, ' + '95%' + ')'
    backgroundColor: 'rgb(0, 0, 0)',
    backgroundColor: '#e9ebee',
    paddingTop: '50px'//,
    //height: secHeight
    
};

let b = {
    //this should be relative to index.html wherever it lives
    //backgroundImage: 'url(' + './app/test.jpg' + ')'
    //backgroundColor: 'hsl(120, 100%, ' + '75%' + ')'
    backgroundColor: 'rgb(255, 255, 255)',
    //height: secHeight
    backgroundColor: '#e9ebee'
};

let c = {
    //this should be relative to index.html wherever it lives
    //backgroundImage: 'url(' + './app/test.jpg' + ')'
    //backgroundColor: 'hsl(120, 100%, ' + '35%' + ')'
    backgroundColor: 'rgb(0, 0, 0)',
    backgroundColor: '#e9ebee'
};

let d = {
    //this should be relative to index.html wherever it lives
    //backgroundImage: 'url(' + './app/test.jpg' + ')'
    //backgroundColor: 'hsl(120, 100%, ' + '5%' + ')'
    backgroundColor: 'rgb(255, 255, 255)',
    backgroundColor: '#e9ebee'
};

let menuBarLinks = {
    labels: ["Our Wedding", "RSVP"],
    urls: ["http://www.google.com", "http://www.facebook.com"]
}

class Home extends React.Component {
    
    constructor(props)
    {
        super(props);
        this.scrollFunction = this.scrollFunction.bind(this);
        this.moveFunction = this.moveFunction.bind(this);
        this.resizeFunction = this.resizeFunction.bind(this);
        //resizeFunction()
        //this.state = {sectionHeight: this.state.sectionHeight};
        
        this.windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;

        this.secHeight = this.windowHeight-50;
        
        this.windowWidth = "innerWidth" in window ? window.innerWidth : document.documentElement.offsetWidth;
        
        this.state = {sectionHeight: this.secHeight, windowWidth: this.windowWidth};
    }
    
    componentDidMount()
    {
        this.setState({color: false})
        console.debug("yass")
        window.addEventListener('scroll', this.scrollFunction);
        window.addEventListener("resize", this.resizeFunction);
        //document.documentElement.removeEventListener('scroll', this.scrollFunction);
    }
    
    componentWillUnmount()
    {
        window.removeEventListener('scroll', this.scrollFunction);
        window.removeEventListener("resize", this.resizeFunction);
        //document.documentElement.removeEventListener('scroll', this.scrollFunction);
    }
    
    componentDidUpdate(prevProps, prevState)
    {
        //console.debug("did update")
                var elmnt = document.getElementById('app');
        //console.debug("scroll " + elmnt.scrollTop);
        elmnt.scrollTop = 300;
        //console.debug("meh " + document.documentElement.scrollTop)
    }
    
    componentWillUpdate(nextProps, nextState)
    {
        //console.debug("will update")
    }
    
    resizeFunction(evt)
    {
        this.windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        
        this.windowWidth = "innerWidth" in window ? window.innerWidth : document.documentElement.offsetWidth;

        this.secHeight = this.windowHeight-50;
        console.debug("secHeight " + this.secHeight);
        
        this.setState({sectionHeight: this.secHeight})
        this.setState({windowWidth: this.windowWidth})
    }
    
        // TODO: use this http://codepen.io/takatama/pen/mVvbqx to do scroll snapping stuff
    scrollFunction(evt)
    {
        //var node = this.getDOMNode();
        var elmnt = document.getElementById('app');
        //console.debug("scroll " + elmnt.scrollTop);
        elmnt.scrollTop = 300;
        //console.debug("meh " + document.documentElement.scrollHeight)
        //console.log("scroll " + node.scrollTop)
        //console.debug("heading " + document.getElementById('heading').scrollTop)
        //TODO: i cannot find out where the scroll is
        
        //TODO: modify this and research to do scroll info
            const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
        //console.debug("docHeight " + docHeight);
        //console.debug("windowBottom " + windowBottom);
        //console.debug("scrollY " + window.scrollY);
        if(window.scrollY > 50)
            {
                console.debug("scrollY " + window.scrollY);
            }
        
    }
    
    moveFunction(evt)
    {
        //console.debug("move");
        this.setState({color: !this.state.color})
    }
    
  render () {
      
      //var sectionHeight = window.
      var htstyle = {height: this.state.sectionHeight};
      return(
    <div ref="abc" onScroll={(evt) => this.scrollFunction(evt)} onMouseMove={(evt) => this.moveFunction(evt)}>
              {/*<Heading id="heading" menuLinks={menuBarLinks}/>*/}
        <PageSection sstyle={Object.assign({}, a, htstyle)} viewwidth={this.state.windowWidth}/>
        {/*
        
        <PageSection sstyle={Object.assign({}, b, htstyle)} viewwidth={this.state.windowWidth}/>
        <PageSection sstyle={Object.assign({}, c, htstyle)} viewwidth={this.state.windowWidth}/>
        <PageSection sstyle={Object.assign({}, d, htstyle)} viewwidth={this.state.windowWidth}/>
        */}
              {/*<IframeEmbed/>*/}
    </div>
  );}
}

export default Home;