import React from 'react'
import {connect} from 'dva'
import './app.less'

const Article = ({topic: {data}}) => {
    return (
        <div className="normal">
            <h1>Welcome to dva!</h1>
            <hr />
            <div dangerouslySetInnerHTML={{__html: data.content}} />
        </div>
    )
}

Article.propTypes = {}

function mapStateToProps({ topic }) {
    return { topic }
}

export default connect(mapStateToProps)(Article)
