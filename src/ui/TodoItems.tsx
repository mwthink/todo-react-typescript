import * as React from 'react';
import { TodoListItem } from '../types';

export interface TodoItemTableRowProps {
  item: TodoListItem;
  onToggle: () => any;
}

export const TodoItemTableRow: React.FunctionComponent<TodoItemTableRowProps> = (props) => (
  <tr>
    <td>{props.item.label}</td>
    <td>
      <input type="checkbox"
        checked={props.item.isCompleted}
        onChange={() => props.onToggle()}
      />
    </td>
  </tr>
)
