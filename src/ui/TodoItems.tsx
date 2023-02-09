import * as React from 'react';
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
        <button onClick={() => props.onToggle()}>{props.item.isCompleted ? 'Completed' : 'Mark Done'}</button>
      ) : (
        <input type="checkbox"
          checked={props.item.isCompleted}
          onChange={() => props.onToggle()}
        />
      )}
    </td>
  </tr>
)
