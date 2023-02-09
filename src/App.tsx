import * as React from 'react';
import { TodoListItem } from './types';
import { Table } from 'reactstrap';

const App = () => {
  const [ todoList, setTodoList ] = React.useState<TodoListItem[]>([
    {label:'Get groceries', isCompleted: false},
    {label:'Pickup mail', isCompleted: false},
  ]);

  const markItemCompleted = (itemIndex:number) => {
    const updatedList = todoList.map((item, index) => {
      if(index != itemIndex){
        return item;
      }
      return {
        ...item,
        isCompleted: !item.isCompleted
      }
    })
    setTodoList(updatedList);
  }
  
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Label</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* for each item in the todoList, render a new row in the table */}
          {todoList.map((item,index) => (
            <tr key={index}>
              <td>{item.label}</td>
              <td>
                <input type="checkbox"
                  checked={item.isCompleted}
                  onChange={()=>markItemCompleted(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default App;
