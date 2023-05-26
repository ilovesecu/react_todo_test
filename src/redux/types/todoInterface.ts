export type Todo = {
  id: number;
  subject: string;
  text: string;
  done: boolean;
  writer: string;
  date: string;
};

export type TodoState = Todo[];
