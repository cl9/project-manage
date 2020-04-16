import React from 'react'
import PropTypes from 'prop-types'
import {
    RouterListView
} from 'cl9-docs-component'

function OSList(props) {
    const list = [
        {
            title: 'Mac',
            path: '/os/mac'
        }
    ]

    return (
        <RouterListView list={list} />
    )
}

OSList.propTypes = {

}

export default OSList

