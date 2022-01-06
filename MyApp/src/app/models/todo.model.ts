export interface TodoDTOInterface {
  id?: number;
  taskName: string;
  done: boolean;
}

export class Todo{
    id: number | undefined;
    taskName: string = '';
    done: boolean = false;

  constructor(data: TodoDTOInterface | null = null) {
    if(data) {
      this.taskName = data.taskName;
      this.done = data.done;
      this.id = data.id || new Date().getTime()
    } else {
      this.id = new Date().getTime();
    }


    
  }

	  }
	 

