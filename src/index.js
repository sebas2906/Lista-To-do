import{crearTodoHtml}from './js/componentes';//no es necesario la extension
import'./styles.css';
import{Todo,TodoList} from './classes'

export const todoList=new TodoList();

todoList.todos.forEach(crearTodoHtml);

console.log('todos',todoList.todos);