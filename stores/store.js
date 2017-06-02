/**
 * Created by qymspace on 6/2/17.
 */
import {EventEmitter} from 'event'
import dispatcher from '../dispatchers/dispatcher.js';
class Store extends EventEmitter {
    constructor() {
        super();
        this.jobs = [{
            id: 34335343,
            name: 'Kenya',
            description: "Best country"
        }]
    }

    deleteJob() {
        this.jobs.pop();
        this.emit("change")
    }

    getAll() {
        return this.jobs;
    }

    handleActions(action) {
        switch (action.type) {
            case "CREATE_JOB":
                break;
            case "DELETE_JOB":
                this.deleteJob(action.id);
                break;
        }

    }
}
const store = new Store();
dispatcher.register(store.handleActions(actions).bind(this));
export default store;
