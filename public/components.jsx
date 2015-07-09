/**
 * Created by shawnsandy on 6/4/15.
 */

//var React = require("react");
//var $ = require('jquery');

/**
 * webpack compiled components sample file
 */

// import the component
import React from 'react'
import Sample from '../src/libs/react-svg-injector.jsx'
//var Sample = require('../src/libs/samples.jsx');
// render the main component
React.render(<Sample />, document.getElementById('component'));
