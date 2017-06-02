import {Component} from 'react';
import Store from '../stores/store.js'
import * as Actions from '../actions/action.js'

class Jobs extends Component {
    constructor() {
        super();
        this.state = {
            jobs: Store.getAll()
        }
    }

    componentWillMount() {
        JobsStore.on("change", ()=> {
            this.setState({
                jobs: Store.getAll()
            })
        })
    }


    render() {
        return (
            <div>
                {this.jobs}
            </div>
        );
    }
}
;


export default Jobs;