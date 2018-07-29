import api from 'api';
import { FETCHING_CONSTANTS } from './constants';

export const fetchTasks = () => ({
    type: FETCHING_CONSTANTS,
    api: api.Tasks.list()
});