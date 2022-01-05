export interface TodoDataInterface {
  titre: string;
  detail?: string;
}

export class Todo implements TodoDataInterface {
  titre: string = '';
  detail?: string;
  constructor(todo: TodoDataInterface | null = null) {
	  if (todo) {
		this.titre = todo.titre;
	  	this.detail = todo.detail;
  }  
	  }
	 

  
}
