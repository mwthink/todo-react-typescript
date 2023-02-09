import * as React from 'react';
import { TodoListItem } from './types';
import { Button, Table } from 'reactstrap';

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

  const addNewListItem = (itemLabel:string) => {
    const updatedList = todoList.concat([{
      label: itemLabel,
      isCompleted: false
    }]);

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
      <Button onClick={()=>addNewListItem(`Item #${Math.random()}`)}>Add Random Item</Button>
    </div>
  )
}

export default App;
