/**
 * @jsx React.DOM
 */

/**
 *
 * @type {*|exports}
 */
import React from 'react'
import Inject from 'svg-injector'


export default class SvgIcon extends React.Component {

    constructor(props) {
        super(props)
    }


    componentDidMount() {

        // Elements to inject
        var mySVGsToInject = React.findDOMNode(this.refs.inject);
        //options
        var options = {
            evalScripts: 'never'
        }
        // Do the injection
        Inject(mySVGsToInject, options);

    }

    render() {


        return (
        <img ref="inject" className={this.props.classname} src={this.props.iconSrc} data-fallback={this.props.pngSrc} />
        );
    }
  }

SvgIcon.PropTypes = {
    size: React.PropTypes.string.isRequired,
    iconSrc: React.PropTypes.string.isRequired,
    classs: React.PropTypes.string

}
SvgIcon.defaultProps = {
    size: '48px',
    fill: 'blue',
    iconSrc: 'svg/flashlight.svg',
    pngSrc: 'default.png',
    classname: 'svg'
}