import api from 'api';
import { FETCHING_CONSTANTS } from './constants';

export const fetchProcessor = () => ({
    type: FETCHING_CONSTANTS,
    api: api.Processor.list()
});