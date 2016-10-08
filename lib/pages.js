'use strict'

export default [
    {
        path: '/component1',
        components: [
            {name: 'component1'}
        ]
    },
    {
        path: '/component2',
        components: [
            {name: 'component2'}
        ]
    },
    {
        path: ['/component1and2', '/component12'],
        components: [
            {name: 'component1'},
            {name: 'component2'}
        ]
    },
    {
        path: '/component3/:dynamic',
        components: [
            {name: 'component3', params: {static: 'value'}}
        ]
    }
]