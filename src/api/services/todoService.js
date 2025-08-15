import apiEndpoints from '../apiEndpoints.js'
import { networkLayer } from '../networkLayer.js'

export const todoService = {
  getAllTodosByUserId: (userId, onSuccess, onError) =>
    networkLayer.get(apiEndpoints.todo.listByUser(userId), onSuccess, onError),

  postTodoByUserId: (userId, postBody, onSuccess, onError) =>
    networkLayer.post(apiEndpoints.todo.create(), onSuccess, onError, { userId, ...postBody }),

  deleteTodosByUserId: (todoId, onSuccess, onError) =>
    networkLayer.delete(apiEndpoints.todo.delete(todoId), onSuccess, onError),
}
export default todoService
