/**
 *  Copyright (c) 2016-present, The Regents of the University of California,
 *  through Lawrence Berkeley National Laboratory (subject to receipt
 *  of any required approvals from the U.S. Dept. of Energy).
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Highlighter from "../components/Highlighter";
import Markdown from "react-markdown";
import Index from "../guides_entry";
import logo from "../img/diagrams.png";

export default React.createClass({

    mixins: [Highlighter],

    render() {
        const doc = this.props.match.params.doc;
        const text = Index[doc];
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <img src={logo} alt="ESnet" width={120} height={120}/>
                    </div>
                    <div className="col-md-9">
                        <Markdown source={text}/>
                    </div>
                </div>
            </div>
        );
    }
});
