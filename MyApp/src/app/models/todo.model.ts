export interface TodoDTOInterface {
  id?: number;
  done: boolean;
  taskName: string;
  user: string
}

export class Todo{
  id: number | undefined;
  done: boolean = false;
  taskName: string ='';
  user: string = '';

  constructor(data: TodoDTOInterface | null = null){
      if (data) {
          this.taskName = data.taskName;
          this.done = data.done;
          this.user = data.user;
          this.id = data.id || new Date().getTime();

      } else {
          this.id= new Date().getTime();
      }

  }
}