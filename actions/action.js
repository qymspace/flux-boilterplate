/**
 * Created by qymspace on 6/2/17.
 */
import dispatcher from '../dispatchers/dispatcher.js'

export function createJob(text) {
    dispatcher.dispatch({type: CREATE_JOB, text: text})
}

export function deleteJob(id) {
    dispatcher.dispatch({type: DELETE_JOB, id: id})
}
