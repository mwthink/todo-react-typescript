import * as React from 'react';
import { TodoListItem } from './types';
import { Button, Table } from 'reactstrap';
import { TodoItemTableRow } from './ui/TodoItems';

const App = () => {

  const [ useButtons, setUseButtons ] = React.useState(false);
  const [ todoList, setTodoList ] = React.useState<TodoListItem[]>([
    {label:'Get groceries', isCompleted: false},
    {label:'Pickup mail', isCompleted: false},
  ]);

  /**
   * This function will toggle the isCompleted state of an item in the list
   * @param itemIndex Array index of the target item
   */
  const toggleItemCompletion = (itemIndex:number) => {
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
  /**
   * This function will add a new item to the TODO list
   * @param itemLabel Label of the new item in the list
   */
  const addNewListItem = (itemLabel:string) => {
    const updatedList = todoList.concat([{
      label: itemLabel,
      isCompleted: false
    }]);

    setTodoList(updatedList);
  }
  
  return (
    <div>
      <Button onClick={()=>setUseButtons(!useButtons)}>{useButtons ? 'Use checkboxes' : 'Use buttons'}</Button>
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
            <TodoItemTableRow key={index}
              item={item}
              onToggle={()=>toggleItemCompletion(index)}
              useButton={useButtons}
            />
          ))}
        </tbody>
      </Table>
      <Button onClick={()=>addNewListItem(`Item #${Math.random()}`)}>Add Random Item</Button>
    </div>
  )
}

export default App;
