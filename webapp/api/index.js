import forge from 'mappersmith'

const crud = (path) => ({
    list: { path: path, method: 'GET' },
    create: { path: path, method: 'POST' },
    update: { path: path, method: 'PUT' },
    remove: { path: path + '/{id}', method: 'DELETE' },
    detail: { path: path + '/{id}', method: 'GET' },
})

export const api = forge({
  clientId: 'api',
  host: '/',
  resources: {
    Tasks: crud('/appa/task'),
    ProcessorEntities: crud('/appa/processor'),
    Config: {}
  }
})

export default api;