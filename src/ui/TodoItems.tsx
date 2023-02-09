import * as React from 'react';
import { Button } from 'reactstrap';
import { TodoListItem } from '../types';

export interface TodoItemTableRowProps {
  item: TodoListItem;
  onToggle: () => any;
  useButton?: boolean;
}

export const TodoItemTableRow: React.FunctionComponent<TodoItemTableRowProps> = (props) => (
  <tr>
    <td>{props.item.label}</td>
    <td>
      { props.useButton ? (
        <Button
          color={props.item.isCompleted ? "success" : "secondary"}
          onClick={() => props.onToggle()}
        >
        {props.item.isCompleted ? 'Completed' : 'Mark Done'}
        </Button>
      ) : (
        <input type="checkbox"
          checked={props.item.isCompleted}
          onChange={() => props.onToggle()}
        />
      )}
    </td>
  </tr>
)
